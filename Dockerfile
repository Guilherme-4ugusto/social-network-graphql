# Usa imagem oficial do Node
FROM node:20

# Instala utilitários básicos e cliente do Postgres (para pg_isready)
RUN apt-get update && apt-get install -y postgresql-client iputils-ping netcat-openbsd && rm -rf /var/lib/apt/lists/*

# Cria diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos de dependências e instala
COPY package*.json ./
RUN npm install

# Copia o restante da aplicação
COPY . .

# Copia o script de espera pelo banco e dá permissão
COPY wait-for-db.sh .
RUN chmod +x wait-for-db.sh

# Gera o client do Prisma
RUN npx prisma generate

# Compila o código TypeScript para JavaScript
RUN npm run build

# Expõe a porta da aplicação
EXPOSE 3000

# Comando de inicialização: aguarda o banco, roda migrations e inicia a API
CMD ["./wait-for-db.sh", "db", "npx prisma migrate deploy && npm start"]