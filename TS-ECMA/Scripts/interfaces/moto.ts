type Cadena = string;
type Imprimir = () => string;

let imprimirHola: Imprimir;
imprimirHola = () => {
    return 'Hola amigos';
}
console.log(imprimirHola());