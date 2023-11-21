let auto = {
    color: 'rojo',
    transmisicon: 'manual',
    velocidadMaxima: '150km/h',
    estadoMotor: 'apagado',
    encender: function(){
        auto.estadoMotor = 'encendido';
    },
    apagar: function(){
        auto.estadoMotor = 'apagado';
    },
}
document.write('Al iniciar el programa el auto esta: ' + auto.estadoMotor + '<br/>')
auto.encender()
document.write('Luego de usar el metodo ENCENDER el auto esta: ' + auto.estadoMotor)