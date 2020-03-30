function hacerAlgo(){
    var frase = 'Hola mundo';
    console.log(frase)
    function hacerOtracosa(){
        var frase = 'Hola mundo 2';
        console.log(frase);
        this.frase = ' Hola mundo 3';
    }
    hacerOtracosa();
    console.log(frase);
}

hacerAlgo();