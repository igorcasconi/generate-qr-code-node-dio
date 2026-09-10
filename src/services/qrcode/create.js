import prompt from "prompt";
import promptSchemaQrCode from "../../prompts/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function generateQRCode() {
  prompt.get(promptSchemaQrCode, handle);

  prompt.start();
}

export default generateQRCode;
