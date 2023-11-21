function Persona(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
    this.nombre = nombre
    this.edad = edad
    this.dni = dni
    this.sexo = sexo
    this.peso = peso
    this.altura = altura
    this.anioNacimiento = anioNacimiento
    this.mostarGeneracion = function(){
        if(anioNacimiento >= 1994){
            document.write('Pertenece a la generacion Z y su caracteristica es la Irreverencia. <br/>')
        }else if(anioNacimiento >= 1981){
            document.write('Pertenece a la generacion Y y su caracteristica es la Frustracion. <br/>')
        }else if(anioNacimiento >= 1969){
            document.write('Pertenece a la generacion X y su caracteristica es la Obsecion por el exito. <br/>')
        }else if(anioNacimiento >= 1949){
            document.write('Pertenece a la generacion Baby Boom y su caracteristica es la Ambición. <br/>')
        }else{
            document.write('Pertenece a la generacion Silent y su caracteristica es la Austeridad. <br/>')
        }
    }
    this.esMayorDeEdad = function(){
        if(edad >= 18){
            document.write('Es una persona mayor de edad')
        }else{
            document.write('No es una persona mayor de edad')
        }
    }
    this.mostarDatos = function(nombreObjeto){
        document.write(JSON.stringify(nombreObjeto, null, 5) + '<br/>')
    }
    this.generaDni = function (){
        document.write(Math.floor(Math.random()*99999999)+1)
    }
} 

let persona1 = new Persona('Lourdes',26,undefined,'F', 86, '165cm',1997)
persona1.mostarGeneracion()
persona1.mostarDatos(persona1)
persona1.generaDni()