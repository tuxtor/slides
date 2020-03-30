import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  counter:number = 0;

  constructor() { 
    console.log('construyendo instancia');
  }

  doHello(name:string){
    console.log(`${++this.counter} - Hola ${name} estos no son los droides que estas buscando`)
  }
}
