function Producto(codigo,nombre,precio){
    this.codigo = codigo
    this.nombre = nombre
    this.precio = precio
    this.imprimeDatos = function(nombreObjeto){
        document.write((JSON.stringify(nombreObjeto, null, 5)) + ' <br/>')
    }
}
let producto1 = new Producto(1,'GUCCI GLOVES',1500)
let producto2 = new Producto(2,'IPHONE 15',1700)
let producto3 = new Producto(3,'MASCARA SKYHIGH',200)
let productos=[producto1,producto2,producto3]
for (let i = 0; i < productos.length; i++){
    let producto = productos[i];
    producto.imprimeDatos(producto)
}