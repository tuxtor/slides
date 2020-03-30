import {Injectable} from '@angular/core';
@Injectable()
export class SaludarService{
    constructor(){
        console.log('creando instancia de saludar');
    }
    crearSaludo(name:string){
        return "Hola " + name; 
    }
}