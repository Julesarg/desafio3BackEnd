const express = require(`express`);
const app = express();
const Contenedor = require("./constructor");

const contenedor = new Contenedor(`productos.txt`);
const productos = contenedor.getAll();

app.get("/", (req, res) => {
   productos.then((val) =>
     res.send(`<h1>Ingrese las siguientes raices para ver: </br>/productos </br> /productoRandom</h1>`)
   );
 });

app.get("/productos", (req, res) => {
  productos.then((val) =>
    res.send(`<h2>Complete array: </br>${JSON.stringify(val)}</h2>`)
  );
});

app.get("/productoRandom", async (req, res) => {
  res.send(
    `<h3>Random object: ${await contenedor.getProductoRandom(
      1,
      await contenedor.getLength()
    )}</h3>`
  );
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
