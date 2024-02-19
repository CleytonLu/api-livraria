import { app } from "./app";

const port = 3000;

app.listen(port, () => {
  try {
    console.log(`servidor rodando na porta: http://localhost:3000`);
  } catch (error) {
    console.error(`Não consegui conectar, erro: ${error}`);
  }
});
