# README - API

## 📌 Sobre a API
Esta API fornece funcionalidades para gerenciar usuários. Inclui operações de listagem, criação, atualização e remoção de usuários no banco de dados.

## 🚀 Tecnologias Utilizadas
- Node.js
- Express.js
- MySQL
- 
   ```
1. Configure o banco de dados no arquivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=seu_banco
   ```

2. Inicie o servidor:
   ```sh
   npm start
   ```

## 📌 Endpoints
- `GET /users` - Lista todos os usuários
- `POST /users` - Cria um novo usuário
- `PUT /users/:id` - Atualiza um usuário existente
- `DELETE /users/:id` - Remove um usuário


## 🔧 Instalação
3. Clone este repositório:
   ```sh
   git clone https://github.com/pedro-dv/API_Crud.git
   cd API_Crud

    ```
4. Instale as dependências:
   ```sh
   npm install
---
