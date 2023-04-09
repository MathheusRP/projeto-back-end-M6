# Projeto-fullstack-backend
# Guia da API

- BaseURL: http://localhost:3001

## Tabela de Conteúdos

- [Tecnologias](#1-tecnologias)
- [Iniciando o servidor](#2---iniciando-o-servidor)
- [Rotas](#3---rotas)
- [Login](#4---login)
- [User](#5---users)
  - [Criação de Usuário](#51---criação-de-usuário)
  - [Listando Usuário](#52---listando-usuário)
  - [Listando Usuário por ID](#53---listando-usuário-por-id)
  - [Atualizar Usuário por ID](#54---atualizar-usuário-por-id)
  - [Deletar Usuário por ID](#55---deletar-usuário-por-id)
- [Contatos](#6---contatos)
  - [Criação de Contato](#61---criação-de-contato)
  - [Atualizar Contato por ID](#62---atualizar-contato-por-id)
  - [Deletar Contato por ID](#63---deletar-contato-por-id)
  - [Lista Contatos](#64---lista-contatos)

## 1. Tecnologias

Tecnologias usadas

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://zod.dev/)

A URL base da aplicação:
http//:localhost:3001

## 2 - Iniciando o servidor

Clone o projeto em sua máquina e instale as dependências com o comando - [ yarn install ].

Depois crie um arquivo .env e coloque suas informações com base no .env.example.

Execute as migrations com o comando - [ yarn typeorm migration:run -d src/data-source ].

Para iniciar o servidor user o seguinte comando - [ yarn dev ].


## 3 - Rotas

- [Users]
  - [POST - /login]()
  - [POST - /users]()
  - [GET - /users]()
  - [PATCH - /users/:user_id]()
  - [DELETE - /users/:user_id]()
- [Contact]()
  - [POST - /contacts]()
  - [GET - /contacts]()
  - [PATCH - /contacts/:id]()
  - [DELETE - /contacts/:id]()


## 4 - **Login**

---

| Método | Rota   | Descrição                   |
| ------ | ------ | --------------------------- |
| POST   | /login | Autenticação de um usuário. |

O objeto User é definido como:

---

| Campo    | Tipo   | Descrição                    |
| -------- | ------ | ---------------------------- |
| email    | string | O e-mail do usuário.         |
| password | string | A senha de acesso do usuário |

---

### Exemplo de Request:
```
POST http://localhost:3001/login
```
### Corpo da Requisição:
```json
{
  "email": "admin@dev.com",
  "password": "admin"
}
```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
200 Ok
```
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTY4MDgyMjI0NSwiZXhwIjoxNjgwODM2NjQ1LCJzdWIiOiIxMyJ9.i9sFDgL5slGWGj7Jab5lF6af7-rPgOPXTx4ImXdaT1c"
}
```
### Possíveis Erros:
| Código do Erro | Descrição                  |
| -------------- | -------------------------- |
| 403 Forbidden  | Invalid email or password. |
| 404 Not found  | User was deleted, 404.     |

## 5 - **Users**
[ Voltar para os Endpoints ](#tabela-de-conteúdos)
O objeto User é definido como:
| Campo     | Tipo    | Descrição                                    |
| --------- | ------- | -------------------------------------------- |
| id        | string  | Identificador único do usuário               |
| name      | string  | Nome do usuario                              |
| email     | string  | O e-mail do usuário.                         |
| password  | string  | A senha de acesso do usuário                 |
| is_admin  | boolean | Define se um usuário é Administrador ou não. |
| phone_number | string  | Número de telefone de usuário.            |
| createdAt | date    | data da criação do usuário                   |
| updatedAt | date    | data da atualização do usuário               |
| deletedAt | date    | data da atualização do usuário               |
|           |

### Endpoints
| Método | Rota            | Descrição                                        |
| ------ | --------------- | ------------------------------------------------ |
| POST   | /users          | Criação de um usuário.                           |
| GET    | /users          | Listagem de todos os usuarios                    |
| PATCH  | /users/id       | Atualiza um usuário usando seu ID como parâmetro |
| DELETE | /users/id       | Deleta um usuário usando seu ID como parâmetro   |


### 5.1 - **Criação de Usuário**
[ Voltar para os Endpoints ](#tabela-de-conteúdos)
### `/users`
### Exemplo de Request:
```
POST http://localhost:3001/users
Authorization: none
Content-type: application/json
```
### Corpo da Requisição:
```json
{
  "name": " admin ",
  "email": "admin@dev.com",
  "password": "admin123",
  "phone": "11 91234-5678"
}
```
OBS.: Chaves não presentes no schema serão removidas.
### Exemplo de Response:
```
201 Created
```
```json
{
  "id": 1,
  "name": "admin",
  "is_admin": false,
  "phone_number": "11 91234-5678",
  "email": "admin@dev.com",
  "deletedAt": null,
  "updatedAt": "2023-04-08T12:08:03.048Z",
  "createdAt": "2023-04-08T12:08:03.048Z"
}
```

### Possíveis Erros:
| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

## 5.2 - **Listando Usuário**
[ Voltar aos Endpoints ](#tabela-de-conteúdos)
### `/users`
### Exemplo de Request:
is_Admin: true

GET http://localhost:3000/users,
  Authorization: Bearer token,
  Content-type: application/json,
```
### Corpo da Requisição:
```json
Vazio
```
### Exemplo de Response:
```
200 OK
```
```json
[
  {
    "id": 1,
    "name": "admin",
    "is_admin": true,
    "phone_number": "11 91234-5678",
    "email": "admin@dev.com",
    "deletedAt": null,
    "updatedAt": "2023-04-08T12:12:03.048Z",
    "createdAt": "2023-04-08T12:12:03.048Z"
  },
  {
    "id": 2,
    "name": "no_admin",
    "is_admin": false,
    "phone_number": "12 91234-5678",
    "email": "no_admin@dev.com",
    "deletedAt": null,
    "updatedAt": "2023-04-08T12:12:03.048Z",
    "createdAt": "2023-04-08T12:12:03.048Z"
  }
]
```
### Possíveis Erros:
| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Token is missing. |
| 403 Forbidden    | you are not an admin. |
---

### 5.3 - **Listando Usuário por ID**
[ Voltar aos Endpoints ](#tabela-de-conteúdos)
### `/users`
### Exemplo de Request:
is_Admin: true

GET http://localhost:3000/users/1
  Authorization: Bearer token
  Content-type: application/json
```
### Corpo da Requisição:
```json
Vazio
```
### Exemplo de Response:
```
200 OK
```
```json

  {
    "id": 1,
    "name": "admin",
    "is_admin": true,
    "phone_number": "11 91234-5678",
    "email": "admin@dev.com",
    "deletedAt": null,
    "updatedAt": "2023-04-08T12:12:03.048Z",
    "createdAt": "2023-04-08T12:12:03.048Z"
  }

```
### Possíveis Erros:
| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 404 Not Found    | User dont exists. |
| 401 Unauthorized | Token is missing. |
| 403 Forbidden    | you are not an admin. |
---

### 5.4 - **Atualizar Usuário por ID**
[ Voltar aos Endpoints ](#tabela-de-conteúdos)
### `/users/:id`
### Exemplo de Request:
```
PATCH http://localhost:3000/users/1
Authorization: Bearer token
Content-type: application/json
```
### Parâmetros da Requisição:
| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |
### Corpo da Requisição:
Necessita de apenas um campo para fazer a atualização parcial.
```json
{
  "email": "new_email@dev.com"
}
```
### Exemplo de Response:
```
200 OK
```
```json
{
  "id": 1,
    "name": "admin",
    "is_admin": true,
    "phone_number": "12 91234-5678",
    "email": "new_email@dev.com",
    "deletedAt": null,
    "updatedAt": "2023-04-08T12:12:03.048Z",
    "createdAt": "2023-04-08T12:12:03.048Z"
}
```
### Possíveis Erros:
| Código do Erro   | Descrição         |
| ---------------- | ----------------- |
| 404 Not Found    | User dont exists. |
| 401 Unauthorized | jwt malformed.    |
| 401 Unauthorized | Invalid token.    |
---

### 5.5 - **Deletar Usuário por ID**
[ Voltar aos Endpoints ](#tabela-de-conteúdos)
### `/users/id`
### Exemplo de Request:
is_Admin: true

```
DELETE http://localhost:3001/users/2
Authorization: Bearer token
Content-type: application/json
```
### Parâmetros da Requisição:
| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário (User) |
### Corpo da Requisição:
vazio.
### Exemplo de Response:
```
204 No Content
```
### Possíveis Erros:
| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | jwt malformed.     |
| 404 Not Found    | User dont exists.  |
| 403 Unauthorized | User is not admin. |
---

## 6 - **Contatos**
[ Voltar para os Endpoints ](#tabela-de-conteúdos)
O objeto Clients é definido como:
| Campo        | Tipo   | Descrição                                          |
| ------------ | ------ | -------------------------------------------------- |
| id           | string | Identificador único do Contato                     |
| name         | string | O nome do Contato.                                 |
| email        | string | O e-mail da Contato.                               |
| phone_number | number | Telefone do Contato.                               |
| createdAt    | date   | Informa a data da criação do contato.              |
---

### Endpoints
| Método | Rota                 | Descrição                                        |
| ------ | -------------------- | ------------------------------------------------ |
| POST   | /contacts            | Criação de um Contato.                           |
| GET    | /contacts            | Lista seus Contato.                              |
| PATCH  | /contacts/:id        | Atualiza um Contato usando seu ID como parâmetro |
| DELETE | /contacts/:id        | Deleta um Contato usando seu ID como parâmetro   |
---

### 6.1 - **Criação de Contato**
[ Voltar para os Endpoints ](#tabela-de-conteúdos)
### `/contacts`
### Exemplo de Request:
```
POST http://localhost:3000/contacts
Authorization: Bearer token
Content-type: application/json
```
### Corpo da Requisição:
```json
{
  "name": "Novo Contato",
  "email": "contato@dev.com",
  "telefone": "11 92323-2323"
}
```
OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:
```
201 Created
```
```json
{
  "createdAt": "2023-04-02T02:06:20.314Z",
  "phone_number": "11 92323-2323",
  "email": "contato@dev.com",
  "name": "Novo Contato",
  "id": "1"
}
```
### Possíveis Erros:
| Código do Erro     | Descrição               |
| ------------------ | ----------------------- |
| 401 Unauthorized   | Token is missing.       |
---

### 6.2 - **Atualizar Contato por ID**
[ Voltar aos Endpoints ](#tabela-de-conteúdos)
### `/clients/:clients_id`
### Exemplo de Request:
```
PATCH http://localhost:3000/1
Authorization: Bearer token
Content-type: application/json
```
### Parâmetros da Requisição:
| Parâmetro | Tipo   | Descrição                                |
| --------- | ------ | ---------------------------------------- |
| ID        | string | Identificador único de Cliente (Clients) |
### Corpo da Requisição:
Necessita de apenas um campo para fazer a atualização parcial.
```json
{
  "name": "Novo Nome"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
  "createdAt": "2023-04-02T02:06:20.314Z",
  "phone_number": "11 92323-2323",
  "email": "contato@dev.com",
  "name": "Novo Nome",
  "id": "1"
}
```

### Possíveis Erros:
| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | Invalid token.     |
| 404 Not Found    | Clients not found. |
---

### 6.3 - **Deletar Contato por ID**
[ Voltar aos Endpoints ](#tabela-de-conteúdos)
### `/clients/:id`
### Exemplo de Request:
```
PATCH http://localhost:3000/clients/1
Authorization: Bearer token
Content-type: application/json
```
### Parâmetros da Requisição:
| Parâmetro | Tipo   | Descrição                               |
| --------- | ------ | --------------------------------------- |
| user_id   | string | Identificador único da Clients(Clients) |
### Corpo da Requisição:
vazio.
### Exemplo de Response:
```
204 No Content
```
### Possíveis Erros:
| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | Invalid token.     |
| 404 Not Found    | Clients not found. |
---

### 6.4 - **Lista Contatos**
[ Voltar aos Endpoints ](#tabela-de-conteúdos)
### `/clients/`
### Exemplo de Request:
```

GET http://localhost:3000/contact
Authorization: Bearer token
Content-type: application/json
```
### Corpo da Requisição:
```json
Vazio
```
### Exemplo de Response:
```
200 OK
```
```json
  {
   "name": "admin",
	  "email": "admin@dev.com",
	  "phone_number": "11 98888-2222",
	  "is_admin": false,
	  "id": 1,
	  "createdAt": "2023-04-08T13:25:03.156Z",
	  "updatedAt": "2023-04-08T13:25:03.156Z",
	  "deletedAt": null,
	  "contact": [
		  {
			  "createdAt": "2023-04-02T02:06:20.314Z",
        "phone_number": "11 92323-2323",
        "email": "contato@dev.com",
        "name": "Novo Contato",
        "id": "1"
		  }
	  ]
  }
```

### Possíveis Erros:
| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |
---