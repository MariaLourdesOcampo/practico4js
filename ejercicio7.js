class Agenda {
    #contactos
    #tamanio
    constructor(tamanio){
        this.#contactos = [],
        this.#tamanio = tamanio
    }
    get tamanio(){
        return this.#tamanio
    }
    set tamanio(nuevoTamanio){
        if(nuevoTamanio > 0){
            this.#tamanio = nuevoTamanio
        }
    }
    get contactos(){
        return this.#contactos
    }
    set contactos(nuevoContacto){
        this.#contactos = nuevoContacto
    }
    añadirContacto(contacto){
        if(this.#contactos.length < this.#tamanio){
            this.#contactos.push(contacto) 
        }else{
            document.write('La agenda esta llena, no puede agregar más contactos. <br/>')
        }
    }
    existeContacto(contactoBuscado){
        let contactosEncontrados = 0
        for(let i = 0;i < this.#contactos.length; i++){
            if(this.#contactos[i].nombre.includes(contactoBuscado)){
                document.write('Nombre del contacto: '+this.#contactos[i].nombre+ '<br/>' +'Numero: '+this.#contactos[i].numero +'<br/><hr/>');
                contactosEncontrados++;
            }
        }
        if (contactosEncontrados == 0){
            document.write('No encontramos el contacto que esta buscando.')
        }
        
    }
    listarContactos(){
        document.write('<table class="table"><thead><tr><th>Nombre</th><th>Numero</th></tr></thead><tbody>')
    for (let i = 0 ;i < this.#contactos.length ;i++){
        let contacto = this.#contactos [i]
        document.write('<tr><td>' + contacto.nombre + '</td><td>' + contacto.numero + '</td>')
    }
    document.write('</tbody></table>')
    }
    agendaLlena(){
        if(this.#contactos.length == this.#tamanio){
            document.write('La agenda esta llena, no puede agregar más contactos. <br/>')
        }else{
            document.write('La agenda esta no esta llena, se puede agregar más contactos. <br/>')
        }
        
    }
    huecosLibres(){
        if(this.#contactos.length < this.#tamanio){
        document.write('Quedan '+ (this.#tamanio - this.#contactos.length) + ' espacios libres. <br/>')
        }else{
            document.write('La agenda esta llena, no puede agregar más contactos. <br/>')
        }
    }
}
class Contacto{
    #nombre
    #numero
    constructor(nombre,numero){
        this.#nombre = nombre;
        this.#numero = numero;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this.#nombre = nuevoNombre
        }
    }
    get numero(){
        return this.#numero;
    }
    set numero(nuevoNumero){
        if(nuevoNumero > 0){
            this.#numero = nuevoNumero
        }
    }
}
let agenda1 =new Agenda(2)
const contacto1 = new Contacto('Maria','3813585445')
const contacto2 = new Contacto('Estetica','3813585245')
agenda1.añadirContacto(contacto1)

agenda1.listarContactos()
console.log(agenda1.contactos)

agenda1.existeContacto('Juan')
agenda1.huecosLibres()
agenda1.agendaLlena()