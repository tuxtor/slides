let bici:{
    modelo?:number;
    color:string;
    avanzar:()=>void;
}

bici = {
    avanzar: () => {console.log('Vamos en la bici')},
    color: 'Rojo'
}
console.log(bici);