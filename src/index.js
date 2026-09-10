import prompt from "prompt";
import promptSchemaMain from "./prompts/prompt-schema-main.js";
import generateQrCode from "./services/qrcode/create.js";
import generatePassword from "./services/password/create.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, result) => {
    if (result.select == "1") await generateQrCode();
    if (result.select == "2") await generatePassword();
  });

  prompt.start();
}

main();
