import handle from "./handle.js";
import chalk from "chalk";

async function generatePassword() {
  const password = await handle();
  console.log(`${chalk.blue.bold("Newly generated password:")} ${password}`);
}

export default generatePassword;
