import { Component, OnInit, HostBinding, Input, EventEmitter, Output, ReflectiveInjector, Inject } from '@angular/core';
import { Starship } from './starship.model';
import { SaludarService } from '../saludar.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() starship:Starship;
  @Output() selectedStarship:EventEmitter<Starship>;
  saludarService:SaludarService;
  nombreMascota:string;
  
  constructor(dependencia1:SaludarService,
    @Inject('mascotaUniversales') nombreMascota:string,
    @Inject('valorPuntual') valor:string) { 

    console.log(valor);
    this.selectedStarship = new EventEmitter();
    this.saludarService = dependencia1;
    this.nombreMascota = nombreMascota;
  }
  ngOnInit() {
    console.log(`Hola soy ${this.nombreMascota} y estoy encargado de la nave 
    ${this.starship.name}`)
  }
  selectStarship(){
    let saludo = this.saludarService.crearSaludo(this.starship.name);
    console.log(saludo);
  }

  voteUp(){
    this.starship.voteUp();
    return false;
  }

  voteDown(){
    this.starship.voteDown();
    return false;
  }

}
