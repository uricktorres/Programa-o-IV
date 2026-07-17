# Checklist de Especificações

## Requisitos do projeto
- [x] API back-end em NestJS.
- [x] Persistência com banco de dados via TypeORM.
- [x] Entidade principal de conteúdo.
- [x] Campo título.
- [x] Campo conteúdo/texto.
- [x] Campo imagem/URL.
- [x] Campo ordenação de apresentação.
- [x] CRUD completo da entidade de conteúdo.
- [x] Front-end não usa dados mockados.
- [x] Front-end consome API com fetch.
- [x] Teste unitário no back-end.
- [x] Documentação com instalação, execução, testes e endpoints.
- [x] Autenticação JWT.
- [x] Rotas principais protegidas por autenticação.
- [x] Entidade de usuário no banco.

## Validação manual sugerida
1. Criar usuário em `/users`.
2. Fazer login em `/auth/login`.
3. Copiar token retornado.
4. Criar post em `/posts` com Bearer token.
5. Listar posts em `/posts`.
6. Abrir `frontend/index.html` para conferir renderização dinâmica.
