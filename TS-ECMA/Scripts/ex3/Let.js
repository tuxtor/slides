function scopeTest(){
    const info = 123;
    if(true){
        let info = 456;
        console.info(info);
    }
    console.log(info);
}
scopeTest();