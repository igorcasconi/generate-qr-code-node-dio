import chalk from "chalk";

const promptSchemaQrCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCode"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QRCode 1) Normal 2) Terminal",
    ),
    pattern: /^[1-2]$/,
    message: chalk.red.italic("Escolha uma opção válida (1 ou 2)"),
    type: "string",
    required: true,
  },
];

export default promptSchemaQrCode;
