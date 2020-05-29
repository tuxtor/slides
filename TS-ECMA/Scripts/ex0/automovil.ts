class Automovil{
    marca:string;
    private modelo?:string;

    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    avanzar(){
        console.log('Estoy avanzando')
    }
}
let auto = new Automovil('Mazda',2021);
console.log(auto);