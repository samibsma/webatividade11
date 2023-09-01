import dotenv from "dotenv";
import express from "express";
import roteadorLogin from "./routes/login.js";
import roteadorUsuario from "./routes/usuario.js";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: link_gitgub",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});
app.use(roteadorLogin);
app.use(roteadorUsuario);
app.use(express.urlencoded({ extended: true }));