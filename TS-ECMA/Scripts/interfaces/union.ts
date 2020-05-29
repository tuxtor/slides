function imprimir(param: number|string|boolean){
    if(typeof param === 'string'){
        console.log('Ingresó un string');
    }else if(typeof param === 'number'){
        console.log('Ingresó un numero');
    }else{
        console.log('Ingresó un valor booleano');
    }
}

imprimir('JavaScript');
imprimir(55);
imprimir(true);


