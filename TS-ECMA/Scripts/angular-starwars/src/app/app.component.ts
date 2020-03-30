import { Component, Inject} from '@angular/core';
import { Starship } from './starship/starship.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starwars';
  starships:Starship[];


  constructor(
    @Inject('STAR_WARS_API') apiURL:string,
    public httpClient:HttpClient){

      httpClient.get(apiURL)
      .subscribe((data) => {
        console.log(data['results'][0]['manufacturer']);
      });

    this.starships = [];
    this.starships.push(new Starship('Death Star', 'DS-1 Orbital Battle Station'));
    this.starships.push(new Starship('Millennium Falcon', 'YT-1300 light freighter'));
    this.starships.push(new Starship('Y Wing', 'BTL Y-wing'));
  }
  addStarship(starshipName:HTMLInputElement, starshipModel:HTMLInputElement){
    this.starships.push(new Starship(starshipName.value, starshipModel.value));
    starshipName.value = '';
    starshipModel.value = '';
    console.log(this.starships);
    return false;
  }

  sortedShips(){
    return this.starships.sort( (a,b) => a.score > b.score? -1: 1);
  }

  starshipSelectionSubscriber(starship:Starship){
    console.log(`La nave emitida desde el componente hijo fue ${starship.name}`);
  }

}
