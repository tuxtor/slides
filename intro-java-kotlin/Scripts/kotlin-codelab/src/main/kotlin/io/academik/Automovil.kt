package io.academik

class Automovil(marca:String = "Totoya", modelo:Int = 2020, color:String = "Negro") :
    Vehiculo(marca,modelo,color) {

    override fun avanzar() {
        println("Soy el auto ${this.marca} color ${this.color} del año ${this.modelo} y estoy avanzando")
    }
}
