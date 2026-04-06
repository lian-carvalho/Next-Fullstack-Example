# 👥Sistema de Usuários

## Sobre o projeto

Esse projeto é uma aplicação full stack utilizando Next.js com API integrada, onde é possível realizar operações básicas de CRUD (Create, Read, Update, Delete) de usuários.

O sistema permite:

* cadastrar novos usuários
* listar usuários cadastrados
* deletar usuários
* atualizar dados (estrutura pronta)

O objetivo do projeto é praticar a construção de uma aplicação completa, integrando frontend, backend e banco de dados utilizando Prisma.

---

## 🚀Deploy

(Em desenvolvimento)

Sugestão: deploy utilizando Vercel com banco de dados externo.

---

## 🧰Tecnologias

* Next.js - Framework full stack
* TypeScript - Tipagem
* Tailwind CSS - Estilização
* Prisma - ORM

---

## 📦Bibliotecas

* Prisma Client → comunicação com banco de dados

---

## ⚙️ Configuração do ambiente (.env)

O projeto utiliza a variável:

```env
DATABASE_URL=
```

---

### 💻 Rodando localmente (SQLite)

Para desenvolvimento local, use SQLite:

```env
DATABASE_URL="file:./dev.db"
```

Depois rode:

```bash
npx prisma migrate dev
```

---

### 🌐 Usando banco externo (ex: PostgreSQL)

Você pode usar um banco externo (como Supabase, Neon, Railway, etc).

Exemplo com PostgreSQL:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Exemplo real:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/meubanco"
```

Depois:

```bash
npx prisma migrate deploy
```

---

## ▶️Rodando o projeto

```bash
npm install
npm run dev
```

---

🌐 Acesse em:
[http://localhost:3000](http://localhost:3000)

---

## 🧠 Funcionalidades atuais

* ✅ Cadastro de usuários
* ✅ Listagem de usuários
* ✅ Exclusão de usuários
* ⚙️ Atualização de usuários (estrutura pronta)

---

## 📌 Observações

* O banco local (`dev.db`) não é versionado
* As migrations devem ser mantidas no repositório
* IDs são auto incrementais e não são reutilizados