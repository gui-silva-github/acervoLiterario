# Acervo Literário

Este projeto é um servidor web construído com Node.js e Express que serve como um acervo literário. O objetivo principal é permitir aos usuários visualizar os livros já lidos, organizados por gênero. O desenvolvimento foi realizado utilizando TypeScript e Mustache, e a compilação para JavaScript é feita com o comando `npm run postinstall` utilizando o compilador `tsc`.

## Funcionalidades

- **Visualização de Livros**: Permite aos usuários ver a lista de livros que já foram lidos.
- **Filtragem por Nome**: Os livros podem ser filtrados por nome, facilitando a navegação pelo acervo.
- **Filtragem por Gênero**: Os livros podem ser filtrados por gênero, facilitando a navegação pelo acervo.

## Como Executar o Projeto

1. **Clonar o Repositório**:
    ```sh
    git clone https://github.com/gui-silva-github/acervoLiterario.git
    cd acervoLiterario
    ```

2. **Instalar as Dependências**:
    ```sh
    npm install
    ```

3. **Compilar o Código TypeScript**:
    ```sh
    npm run postinstall
    ```

4. **Iniciar o Servidor**:
    ```sh
    npm start
    ```

5. **Acessar o Acervo Literário**:
    Abra o navegador e vá para `http://localhost:4000` para visualizar o acervo literário.

## Estrutura do Projeto

- **src/**: Contém o código-fonte TypeScript do projeto.
- **views/**: Contém os templates Mustache utilizados para renderizar as páginas HTML.
- **dist/**: Contém o código JavaScript compilado a partir do TypeScript.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução para o servidor.
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- **Express**: Framework para gerenciar as rotas e requisições HTTP.
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- **TypeScript**: Linguagem utilizada para o desenvolvimento, proporcionando tipagem estática e outras funcionalidades avançadas.
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- **Mustache**: Motor de template utilizado para renderizar as páginas HTML.
- ![Mustache](https://img.shields.io/badge/mustache.js-4A4A55?style=for-the-badge&logo=mustache&logoColor=white)
- **JavaScript**: Código compilado a partir do TypeScript para execução no ambiente Node.js.
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- **CSS**: Estilização responsiva e completa do Acervo Literário.
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.
