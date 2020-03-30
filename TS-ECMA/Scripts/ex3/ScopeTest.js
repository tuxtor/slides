function ScopeTest(tuxAge){
    this.tuxAge = tuxAge;
    this.increaseAge = () => { //Arrow function
        console.log("incrementando edad");
        this.tuxAge++;
    }
}

var sTest = new ScopeTest(10);
setTimeout(sTest.increaseAge,1000);//Contexto de invocacion
//ScopeTest
setTimeout(function(){console.log(sTest.tuxAge)},2000);