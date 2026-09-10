# Gerador de QR Code e Senha com Node.js

Este projeto é um pequeno aplicativo em Node.js para gerar:

- QR Codes a partir de links informados pelo usuário
- Senhas aleatórias com regras configuráveis via variáveis de ambiente

Ele foi desenvolvido como uma aplicação simples de terminal, com interação por prompts no console.

## Funcionalidades

- Geração de QR Code a partir de qualquer URL
- Opção para exibir o QR Code em formato terminal
- Geração de senha aleatória
- Configuração da senha por meio de variáveis de ambiente
- Interface simples no terminal com a biblioteca `prompt`

## Tecnologias usadas

- Node.js
- JavaScript ES Modules
- `prompt` para entrada interativa no terminal
- `qrcode-terminal` para gerar QR Code em terminal
- `chalk` para estilos e mensagens coloridas

## Estrutura do projeto

```bash
.
├── package.json
├── src/
│   ├── index.js
│   ├── prompts/
│   │   ├── prompt-schema-main.js
│   │   └── prompt-schema-qrcode.js
│   └── services/
│       ├── password/
│       │   ├── create.js
│       │   ├── handle.js
│       │   └── utils/
│       │       └── permittedCharacters.js
│       └── qrcode/
│           ├── create.js
│           └── handle.js
```

## Pré-requisitos

- Node.js instalado
- npm ou yarn

## Instalação

1. Clone o repositório
2. Acesse a pasta do projeto
3. Instale as dependências:

```bash
npm install
```

## Execução

O projeto usa o seguinte script:

```bash
npm run start:dev
```

Esse comando inicia a aplicação em modo de desenvolvimento com `--watch`.

## Como usar

Ao iniciar a aplicação, o terminal mostra um menu com duas opções:

1. Gerar QR Code
2. Gerar senha

### 1) Gerar QR Code

- Informe o link ou URL
- Escolha o tipo do QR Code:
  - 1: normal
  - 2: terminal

O QR Code será exibido diretamente no terminal.

### 2) Gerar senha

A senha é gerada com base em variáveis de ambiente, por exemplo:

```env
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

Essas configurações definem:

- tamanho da senha
- se ela terá letras maiúsculas
- se terá letras minúsculas
- se terá números
- se terá caracteres especiais

## Exemplo de arquivo .env

Crie um arquivo `.env` na raiz do projeto com algo parecido com:

```env
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

## Observações

- A geração de QR Code usa a biblioteca `qrcode-terminal` e imprime a imagem no terminal.
- A senha é criada de forma aleatória, escolhendo caracteres permitidos conforme as variáveis de ambiente.
- Este projeto é ideal para fins educativos e de estudo de Node.js, geração de QR Codes e manipulação interativa de terminal.

## Licença

Projeto simples para fins de estudo e aprendizado.
