function combinar<T, U>(a:T,b:U): T & U {
    return {...a,...b};
}

let x = combinar({nombre:'Juan', apellido:'Cortave'},{nombre:'Jose', edad:21});
console.log(x);