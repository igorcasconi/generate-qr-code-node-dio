import permittedCharacters from "./utils/permittedCharacters.js";

async function handle() {
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;
  const characters = await permittedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;
