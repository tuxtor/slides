function ScopeTest(tuxAge: number){
    this.tuxAge = tuxAge;
    this.increaseAge = () => {
        console.log('Inc edad');
        this.tuxAge++
    }
}

var sTest = new ScopeTest(10);
setTimeout(sTest.increaseAge, 1000);
setTimeout(function(){console.log(sTest.tuxAge)} ,2000);