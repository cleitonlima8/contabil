# Projeto Contabil

Bem-vindo ao projeto **Contabil**. Este documento fornece instruções sobre como configurar e executar o projeto em seu ambiente local.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (Recomenda-se a versão LTS)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) como gerenciador de pacotes.

## Instalação

1. Abra o terminal na pasta do projeto:
   ```bash
   cd /home/cleiton/projetos/Contabil
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   # ou
   yarn install
   ```

## Como Rodar

Aqui estão os scripts comuns para execução (verifique o arquivo `package.json` para confirmar os nomes exatos dos scripts):

### Desenvolvimento
Para iniciar o servidor de desenvolvimento (com hot-reload):
```bash
npm run dev
```

### Produção
Para criar a build de produção:
```bash
npm run build
```

Para iniciar a aplicação em modo de produção (após o build):
```bash
npm start
```

## Tecnologias Identificadas

- **TypeScript**: Linguagem base do projeto.
- **date-fns**: Biblioteca para manipulação de datas.
