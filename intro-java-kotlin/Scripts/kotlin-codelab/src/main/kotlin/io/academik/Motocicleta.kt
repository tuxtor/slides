package io.academik

class Motocicleta (marca: String = "Ducati", modelo: Int = 1995, color: String = "Azul")
    :Vehiculo(marca, modelo, color){

    override fun avanzar() {
        println("Soy una moto ${this.color} y estoy avanzando")
    }
}
