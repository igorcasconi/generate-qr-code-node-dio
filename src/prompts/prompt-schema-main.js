import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta 1) QRCode 2) Gerador de Senha",
    ),
    pattern: /^[1-2]$/,
    message: chalk.red.italic("Escolha uma opção válida (1 ou 2)"),
    type: "string",
    required: true,
  },
];

export default promptSchemaMain;
