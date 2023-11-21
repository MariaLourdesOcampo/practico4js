function Cuenta(titular,saldo){
    this.titular = titular;
    this.saldo = saldo;
    this.ingresar = function(dinero){
        cuenta.saldo = this.saldo + dinero
    };
    this.extraer = function(dinero){
        cuenta.saldo = this.saldo - dinero
    };
    this.informar = function(){
        document.write('Su saldo actual es: ' + cuenta.saldo + '<br/>')
    }
}
let cuenta = new Cuenta('Alex',0)
document.write('Estado de la cuenta: ' + (JSON.stringify(cuenta, null, 5))+ '<br/>')
cuenta.ingresar(500)
cuenta.extraer(5)
document.write('Despues de ingresar y extraer dinero: <br/>')
cuenta.informar()
document.write('Estado de la cuenta: ' + (JSON.stringify(cuenta, null, 5))+ '<br/>')