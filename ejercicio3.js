function Rectangulo(alto,ancho){
    this.alto = alto;
    this.ancho = ancho;
    this.perimetro = undefined;
    this.area = undefined;
    this.cambiarAlto = function(nuevoAlto){
        rectangulo.alto = nuevoAlto;
    }
    this.cambiarAncho = function(nuevoAncho){
        rectangulo.ancho = nuevoAncho;
    };
    this.propiedades = function(){
        document.write('El alto es: ' + rectangulo.alto + '<br/>'+ 'El ancho es: '+ rectangulo.ancho + '<br/>')
    }
    this.calcularPerimetro = function(){
        rectangulo.perimetro = rectangulo.alto*2 + rectangulo.ancho*2
        document.write('Perimetro: ' + rectangulo.perimetro+'<br/>')
    }
    this.calcularArea = function(){
        rectangulo.area = rectangulo.alto*rectangulo.ancho
        document.write('Area: ' + rectangulo.area + 'cm2')
    }
}
let rectangulo = new Rectangulo(parseInt(prompt('ingrese el alto en centimetros')),parseInt(prompt('ingrese el ancho en centimetros')))
rectangulo.propiedades()
rectangulo.calcularPerimetro()
console.log(rectangulo.perimetro)
rectangulo.calcularArea()
console.log(rectangulo.area )
