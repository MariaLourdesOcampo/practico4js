class Libro{
    #isbn;
    #titulo;
    #autor;
    #numeroDePaginas;
    constructor(isbn,titulo,autor,numeroDePaginas){
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor= autor;
        this.#numeroDePaginas = numeroDePaginas;
    }
    get isbn(){
        return this.#isbn;
    }
    set isbn(nuevoIsbn){
        if(nuevoIsbn.length > 0){
            this.#isbn = nuevoIsbn
        }
    }
    get titulo(){
        return this.#titulo 
    }
    set titulo(nuevoTitulo){
        if(nuevoIsbn.length > 0){
            this.#titulo = nuevoTitulo
        }
    }
    get autor(){
        return this.#autor
    }
    set autor(nuevoAutor){
        if(nuevoAutor.length > 0){
            this.#autor = nuevoAutor
        }
    }
    get numeroDePaginas(){
        return this.#numeroDePaginas
    }
    set numeroDePaginas(nuevoNumeroDePaginas){
        if(nuevoNumeroDePaginas > 0){
            this.#numeroDePaginas = nuevoNumeroDePaginas
        }
    }
    mostarLibro(){
        document.write('El libro '+ this.#titulo +' con ISBN '+ this.#isbn +' creado por el autor '+ this.#autor + ' tiene ' + this.#numeroDePaginas+' paginas. <br/>'  )
    }
}
function compararPaginas(numerodepaginasA,numeroDePaginasB,nombreLibroA,nombreLibroB){
    if(numerodepaginasA>numeroDePaginasB){
        document.write('El libro '+ nombreLibroA + ' tiene más paginas.')
    }else document.write('El libro '+ nombreLibroB +'tiene más paginas.')
}
const orgulloyprejuicio = new Libro('xxxx','orgulloyprejuicio','jane austin',360) 
const libroGenerico = new Libro('yyyy','Libro Generico','Escritor Generico',200)
orgulloyprejuicio.mostarLibro()
compararPaginas( orgulloyprejuicio.numeroDePaginas, libroGenerico.numeroDePaginas,orgulloyprejuicio.titulo,libroGenerico.titulo)