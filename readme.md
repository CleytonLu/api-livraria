# Books API - Node.js & TypeScript

### Sobre o Projeto

Essa API foi criada como parte de um estudo autodirigido para aprofundar meu conhecimento em **Node.js** e **TypeScript**. O objetivo foi entender melhor o desenvolvimento de APIs com **Node.js**, utilizando **Express** para gerenciar as rotas e **Yarn** para gerenciar pacotes. O projeto inclui operações básicas de CRUD (Create, Read, Update, Delete) para livros.

Construí essa aplicação enquanto me preparava para um projeto no trabalho que exigia desenvolvimento em Node.js, e ela me ajudou a solidificar os conceitos fundamentais da plataforma.

### Tecnologias Utilizadas

- **Node.js** (>= 18)
- **Express**
- **TypeScript**
- **Yarn**

### Funcionalidades

A API possui as seguintes rotas:

- `GET /livros` - Retorna a lista completa de livros.
- `GET /livros/:id` - Retorna os detalhes de um livro específico com base no ID.
- `POST /livros` - Adiciona um novo livro.
- `PUT /livros/:id` - Atualiza os dados de um livro existente.
- `DELETE /livros/:id` - Remove um livro da lista.

### Instalação e Execução

Para rodar essa API localmente, siga os passos abaixo:

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/sua-api-de-livros.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd sua-pasta-do-projeto
    ```

3. Instale as dependências utilizando **Yarn**:

    ```bash
    yarn install
    ```

4. Inicie a aplicação:

    ```bash
    yarn start
    ```

### Exemplos de Uso

Aqui estão exemplos simples de como consumir a API utilizando **cURL**.

1. **Buscar todos os livros**:

    ```bash
    curl http://localhost:3000/livros
    ```

2. **Buscar um livro por ID**:

    ```bash
    curl http://localhost:3000/livros/1
    ```

3. **Adicionar um livro**:

    ```bash
    curl -X POST http://localhost:3000/livros -H "Content-Type: application/json" -d '{"titulo": "O Hobbit", "autor": "J.R.R. Tolkien"}'
    ```

4. **Atualizar um livro**:

    ```bash
    curl -X PUT http://localhost:3000/livros/1 -H "Content-Type: application/json" -d '{"titulo": "O Senhor dos Anéis"}'
    ```

5. **Deletar um livro**:

    ```bash
    curl -X DELETE http://localhost:3000/livros/1
    ```

### Considerações Finais

Esse projeto foi desenvolvido com o intuito de melhorar minha compreensão de Node.js e TypeScript, e eu encorajo quem estiver começando no backend a explorar e contribuir. Feedbacks e sugestões são sempre bem-vindos!
