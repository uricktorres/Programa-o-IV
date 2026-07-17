# Projeto Final - Prog IV

## Objetivo
API NestJS com CRUD de conteúdo, autenticação JWT, persistência com TypeORM/SQLite, testes unitários e exemplo de integração com front-end.

## Requisitos atendidos
- CRUD de conteúdo com campos: título, conteúdo, imagem e ordenação.
- Banco de dados com TypeORM + SQLite.
- Front-end consumindo API via fetch.
- Testes unitários com Jest.
- Autenticação JWT protegendo rotas principais.
- Entidade de usuário no banco.

## Estrutura
- `src/posts`: CRUD da entidade de conteúdo.
- `src/users`: cadastro simples de usuários.
- `src/auth`: login e JWT.
- `frontend/index.html`: exemplo de consumo dinâmico.
- `test/posts.service.spec.ts`: teste unitário básico.

## Instalação
```bash
npm install
```

## Executar em desenvolvimento
```bash
npm run start:dev
```

Servidor: `http://localhost:3000`

## Criar usuário
```http
POST /users
Content-Type: application/json

{
  "username": "admin",
  "password": "123456"
}
```

## Login
```http
POST /auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "123456"
}
```

Resposta esperada:
```json
{
  "access_token": "TOKEN_AQUI"
}
```

## Endpoints de Posts
- `GET /posts` - lista todos os posts.
- `GET /posts/:id` - busca um post (JWT).
- `POST /posts` - cria post (JWT).
- `PUT /posts/:id` - atualiza post (JWT).
- `DELETE /posts/:id` - remove post (JWT).

Exemplo de criação:
```http
POST /posts
Authorization: Bearer TOKEN_AQUI
Content-Type: application/json

{
  "title": "Primeiro Post",
  "content": "Conteúdo do post",
  "imageUrl": "https://exemplo.com/imagem.jpg",
  "order": 1
}
```

## Testes
```bash
npm run test
```

## Como funciona
1. O usuário é cadastrado em `/users`.
2. O login é feito em `/auth/login`.
3. O back-end valida senha com bcrypt e gera JWT.
4. As rotas protegidas usam `JwtAuthGuard`.
5. O front-end chama `GET /posts` com fetch e renderiza dinamicamente.

## Observações para entrega
- Em ambiente real, trocar a chave JWT por variável de ambiente.
- `synchronize: true` deve ser usado apenas em desenvolvimento.
