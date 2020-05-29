package io.academik;

public class Vehiculo {

    private String marca;
    private Integer modelo;
    private String color;

    public Vehiculo(String marca, Integer modelo, String color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    public Vehiculo() {
        this.marca = "";
        this.modelo = 1996;
        this.color = "";
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Integer getModelo() {
        return modelo;
    }

    public void setModelo(Integer modelo) {
        this.modelo = modelo;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void avanzar() throws Exception {
        throw new Exception("No implementado");
    };
}
