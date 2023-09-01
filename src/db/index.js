import pkg from "pg";
const { Pool } = pkg;

async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}
async function selectUsuarios() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}
async function selectUsuario() {
  const client = await connect();
  const query = "SELECT * FROM usuario WHERE id = $1";
  const usuario = [id];
  const res = await client.query(query, usuario);
  return res.rows;
}
async function insertUsuario() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}
async function deleteUsuario() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}
async function updateUsuario() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}
async function autenticarUsuario(email, senha) {
  const client = await connect();
  const query = "SELECT * FROM usuario WHERE email = $1 AND senha = $2";
  const usuario = [email, senha];
  const res = await client.query(query, usuario);
  return res.rows[0];
}
export { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario, autenticarUsuario };