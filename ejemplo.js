const fs = require(`fs`);

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
  }
  async getAll() {
    let container = await fs.promises.readFile(this.archivo);
    let arrayObj = JSON.parse(container);
    return arrayObj
  }
  async getById(id) {
    let container = await fs.promises.readFile(this.archivo);
    let containerArray = JSON.parse(container);
    let productoDevuelto = await containerArray.find((prod)=>prod.id==id);    
    return productoDevuelto;
  }
  async getProductoRandom (min,max) {
    let id = Math.floor(Math.random()*(max) + min)
    let productoRandom = JSON.stringify(await this.getById(id));   
    return productoRandom;
 }
  async getLength(){
    let list = await this.getAll();
    return await list.length;
}
}
module.exports = Contenedor