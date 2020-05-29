import {Vehicle} from './vehicle';

let auto : Vehicle;
auto = {
    brand: 'Mazda',
    run: function(){
        console.log('hola mundo')
    }
    //model: 1999
}
console.log(auto);
auto.run();