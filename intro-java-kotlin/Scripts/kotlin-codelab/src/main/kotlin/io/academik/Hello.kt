package io.academik

fun main(args: Array<String>) {

    val v1:Vehiculo = Automovil()
    v1.color = "Rojo"
    val v2:Vehiculo = Motocicleta()
    val v3:Vehiculo = Max5

    println(doSelection(v2))
    v1.huirEnElToqueDeQueda()

}

fun doSelection(vehiculo: Vehiculo): String{

    val resultado = when(vehiculo) {
        is Automovil -> "Un auto"
        is Motocicleta -> "Es un motorista imprudente"
        is Max5 -> "Es el carro de Speed Racer (Meteoro)"
        else -> "No sabe/no respondio"
    }
    return resultado
}

