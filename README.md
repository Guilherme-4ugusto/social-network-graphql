# 🚀 GraphQL API - Social Network Example

## 🇧🇷 Documentação em Português

✨ **Projeto desenvolvido em TypeScript** utilizando:  
- 🚡 Apollo Server  
- 🗃️ Prisma ORM  
- 🧩 TypeGraphQL  

📝 *Exemplo prático para apresentação acadêmica sobre GraphQL*  

---

### 🛠️ Tecnologias

| Categoria       | Tecnologias                          |
|-----------------|--------------------------------------|
| **Runtime**     | Node.js + TypeScript                 |
| **GraphQL**     | Apollo Server, TypeGraphQL           |
| **Database**    | Prisma ORM (PostgreSQL)              |
| **Config**      | dotenv (variáveis de ambiente)       |
| **Container**   | Docker, Docker Compose               |

---

### 📂 Estrutura do Projeto

```
graphql-api/
├── prisma/
│   ├── migrations/    # 🏗️ Migrações do banco
│   └── schema.prisma  # 📝 Schema do Prisma
├── src/
│   ├── dtos/          # 📦 DTOs/Inputs GraphQL
|       ├── inputs/     # 📥 Inputs GraphQL
|       └─  models/     # 🧬 Models GraphQL
|   ├── errors/        # ⚠️ Erros personalizados (regras de negócio)
│   ├── resolvers/     # 🔄 Resolvers (TypeGraphQL)
│   └── server.ts      # ⚡ Entrada do Apollo Server
├── Dockerfile         # 🐳 Imagem da API
├── docker-compose.yml # 🐙 Orquestração dos serviços
├── wait-for-db.sh     # ⏳ Script de espera pelo banco
├── .env               # 🔒 Variáveis de ambiente (não versionado)
├── package.json
├── tsconfig.json
└── README.md
```

---

### ⚙️ Configuração Inicial (sem Docker)

1. Instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz do projeto com a variável:

```
DATABASE_URL="sua_string_de_conexão_com_postgres"
```

3. Gere o client do Prisma e rode as migrações:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

### 🐳 Usando Docker

Você pode construir e executar a aplicação usando apenas Docker:

```bash
docker build -t graphql-api .
docker run -p 3000:3000 graphql-api
```

---

### 🐙 Usando Docker Compose

Para rodar a aplicação com banco de dados incluso:

```bash
docker-compose up --build
```

Isso criará dois containers: um para o PostgreSQL e outro para a API.

---

### 📦 Scripts disponíveis

| Script             | Ação                                      |
|--------------------|-------------------------------------------|
| `npm run dev`      | Inicia servidor com hot-reload (dev)      |
| `npm run build`    | Compila o projeto TypeScript               |
| `npm start`        | Inicia a API a partir da build            |

---

### 🎯 Comandos Prisma

| Comando                            | Ação                                   |
|------------------------------------|----------------------------------------|
| `npx prisma migrate dev`           | Executa migrações do banco (dev)       |
| `npx prisma migrate deploy`        | Executa migrações em produção          |
| `npx prisma generate`              | Regenera o Prisma Client               |
| `npx prisma studio`                | Abre interface visual do banco         |

---

### ⚙️ Variáveis de Ambiente

Exemplo de `.env`:

```
#APP Env
DATABASE_URL=postgresql://admin:admin@localhost:5432/homolog
APP_PORT=3001

#BD Env
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_DB=mydatabase
```

> 🔒 Nunca adicione o `.env` ao controle de versão (adicione ao `.gitignore`).

---

### 💡 Dicas Importantes

- 🔄 **Migrações**  
  Sempre execute `npx prisma migrate dev` após alterar `schema.prisma`

- 🔒 **Segurança**  
  🙈 Nunca versione `.env` - Adicione ao `.gitignore` e use o exemplo acima como template

- 🧩 **TypeGraphQL**  
  Utilize decorators (`@ObjectType`, `@Field`) para definir schemas

- 🌟 Divirta-se desenvolvendo! 😊

---

## 🇺🇸 English Documentation

✨ **Project developed in TypeScript** using:  
- 🚡 Apollo Server  
- 🗃️ Prisma ORM  
- 🧩 TypeGraphQL  

📝 *Practical example for academic presentation about GraphQL*  

---

### 🛠️ Technologies

| Category         | Technologies                         |
|------------------|--------------------------------------|
| **Runtime**      | Node.js + TypeScript                 |
| **GraphQL**      | Apollo Server, TypeGraphQL           |
| **Database**     | Prisma ORM (PostgreSQL)              |
| **Config**       | dotenv (environment variables)       |
| **Container**    | Docker, Docker Compose               |

---

### 📂 Project Structure

```
graphql-api/
├── prisma/
│   ├── migrations/    # 🏗️ Database migrations
│   └── schema.prisma  # 📝 Prisma Schema
├── src/
│   ├── dtos/          # 📦 DTOs/Inputs for GraphQL
|       ├── inputs/     # 📥 Inputs for GraphQL
|       └─  models/     # 🧬 Models for GraphQL
|   ├── errors/        # ⚠️ Custom errors (business rules) 
│   ├── resolvers/     # 🔄 Resolvers (TypeGraphQL)
│   └── server.ts      # ⚡ Apollo Server entry point
├── Dockerfile         # 🐳 API container
├── docker-compose.yml # 🐙 Services orchestration
├── wait-for-db.sh     # ⏳ DB wait script
├── .env               # 🔒 Env variables (not versioned)
├── package.json
├── tsconfig.json
└── README.md
```

---

### ⚙️ Initial Setup (without Docker)

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with:

```
DATABASE_URL="your_postgres_connection_string"
```

3. Generate Prisma client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

### 🐳 Using Docker

Build and run with Docker:

```bash
docker build -t graphql-api .
docker run -p 3000:3000 graphql-api
```

---

### 🐙 Using Docker Compose

Run app with PostgreSQL container:

```bash
docker-compose up --build
```

---

### 📦 Available Scripts

| Script             | Description                            |
|--------------------|----------------------------------------|
| `npm run dev`      | Start dev server with hot-reload       |
| `npm run build`    | Compile TypeScript project              |
| `npm start`        | Start API from compiled build           |

---

### ⚙️ Environment Variables

`.env` example:

```
#APP Env
DATABASE_URL=postgresql://admin:admin@localhost:5432/homolog
APP_PORT=3001

#DB Env
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_DB=mydatabase
```

---

### 💡 Tips

- 🔄 **Migrations**  
  Always run `npx prisma migrate dev` after modifying `schema.prisma`

- 🔒 **Security**  
  🙈 Never version .env - Add to .gitignore and use the example above as a template

- 🧩 **TypeGraphQL**  
  Use decorators (`@ObjectType`, `@Field`) to define GraphQL schemas

- 🌟 Have fun coding! 😊

---

<div align="center"> 
  <sub>Criado com ❤️ por [@guilherme4ugusto]  |  Made with ❤️ by [@guilherme4ugusto]</sub> 
</div>
