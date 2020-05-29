var Automovil = /** @class */ (function () {
    function Automovil(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Automovil.prototype.avanzar = function () {
        console.log('Estoy avanzando');
    };
    return Automovil;
}());
var auto = new Automovil('Mazda', 2021);
console.log(auto);
