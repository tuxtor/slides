package io.academik

class Tractor (
        marca: String = "Caterpillar",
        modelo: Int = 1999,
        color: String = "Amarillos"
) : Vehiculo(marca, modelo, color)  {

    override fun avanzar(){
        println("Soy un tractor y estoy avanzando")
    }

}
