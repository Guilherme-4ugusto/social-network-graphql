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

---

### 📂 Estrutura do Projeto

```
graphql-api/
├── prisma/
│   ├── migrations/    # 🏗️ Migrações do banco
│   └── schema.prisma  # 📝 Schema do Prisma
├── src/
│   ├── dtos/          # 📦 DTOs/Inputs GraphQL
│   ├── resolvers/     # 🔄 Resolvers (TypeGraphQL)
│   └── server.ts      # ⚡ Entrada do Apollo Server
├── .env               # 🔒 Variáveis de ambiente (não versionado)
├── package.json
├── tsconfig.json
└── README.md
```

---

### ⚙️ Configuração Inicial

1. Instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env` na raiz do projeto com a variável:

```
DATABASE_URL="sua_string_de_conexão_com_postgres"
```

---

### 🎯 Comandos Úteis

| Comando                            | Ação                                   |
|------------------------------------|----------------------------------------|
| `npm run dev`                      | ▶️ Inicia servidor com hot-reload      |
| `npx prisma migrate dev --name init` | 🛠️ Cria/executa migrações do banco    |
| `npx prisma generate`              | 🔄 Regenera o Prisma Client            |
| `npx prisma studio`                | 🔍 Abre interface visual do banco      |

---

### 💡 Dicas Importantes

- 🔄 **Migrações**  
  Sempre execute `npx prisma migrate dev` após alterar `schema.prisma`

- 🔒 **Segurança**  
  🙈 Nunca versie `.env` - Adicione ao `.gitignore` e use `example.env` como template

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

---

### 📂 Project Structure

```
graphql-api/
├── prisma/
│   ├── migrations/    # 🏗️ Database migrations
│   └── schema.prisma  # 📝 Prisma Schema
├── src/
│   ├── dtos/          # 📦 DTOs/Inputs for GraphQL
│   ├── resolvers/     # 🔄 Resolvers (TypeGraphQL)
│   └── server.ts      # ⚡ Apollo Server entry point
├── .env               # 🔒 Env variables (not versioned)
├── package.json
├── tsconfig.json
└── README.md
```

---

### ⚙️ Initial Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with:

```
DATABASE_URL="your_postgres_connection_string"
```

---

### 🎯 Useful Commands

| Command                             | Description                             |
|-------------------------------------|-----------------------------------------|
| `npm run dev`                       | ▶️ Starts dev server with hot-reload    |
| `npx prisma migrate dev --name init` | 🛠️ Run database migrations              |
| `npx prisma generate`               | 🔄 Regenerate Prisma Client             |
| `npx prisma studio`                 | 🔍 Open Prisma Studio (GUI)             |

---

### 💡 Tips

- 🔄 **Migrations**  
  Always run `npx prisma migrate dev` after modifying `schema.prisma`

- 🔒 **Security**  
  🙈 Never version `.env` — Add it to `.gitignore` and use an `example.env` as template

- 🧩 **TypeGraphQL**  
  Use decorators (`@ObjectType`, `@Field`) to define GraphQL schemas

- 🌟 Have fun coding! 😊

---

<div align="center"> 
  <sub>Criado com ❤️ por [@guilherme4ugusto]  |  Made with ❤️ by [@guilherme4ugusto]</sub> 
</div>
