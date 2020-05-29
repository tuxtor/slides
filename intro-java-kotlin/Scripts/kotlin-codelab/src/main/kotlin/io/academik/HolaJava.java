package io.academik;

public class HolaJava {

    public static void main(String args[]){
        //Polimorfica
        Vehiculo t1 = new Tractor();
        System.out.println(t1.getMarca());
        System.out.println(t1.getColor());
        System.out.println(t1.getModelo());
    }
}
