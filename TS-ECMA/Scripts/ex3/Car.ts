class Car {
    color: string;
    doorQty: number;
    
    constructor(color:string, doorQty: number) {
        this.color = color;
        this.doorQty = doorQty;
    }
    run(){
        console.log(`I am the ${this.color} car and I have ${this.doorQty} doors`)
    }
}
    
var c1 = new Car("Red", 4);
c1.run();

let c2 = new Car("Rojito", 5);
c2.run();