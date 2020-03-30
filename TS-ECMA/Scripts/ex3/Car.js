var Car = /** @class */ (function () {
    function Car(color, doorQty) {
        this.color = color;
        this.doorQty = doorQty;
    }
    Car.prototype.run = function () {
        console.log("I am the " + this.color + " car and I have " + this.doorQty + " doors");
    };
    return Car;
}());
var c1 = new Car("Red", 4);
c1.run();
var c2 = new Car("Rojito", 5);
c2.run();
