class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<string>();
myGenericNumber.zeroValue = '0';
myGenericNumber.add = function(x, y) { return x + y; };

console.log(myGenericNumber.add('5','3'));