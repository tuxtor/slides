import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { StarshipComponent } from './starship/starship.component';
import { DemoFormSithComponent } from './demo-form-sith/demo-form-sith.component';
import { DemoFormJediComponent } from './demo-form-jedi/demo-form-jedi.component';
import { DemoFormValidJediComponent } from './demo-form-valid-jedi/demo-form-valid-jedi.component';
import { DemoForceComponent } from './demo-force/demo-force.component';
import { SaludarService } from './saludar.service';
import { DemoReactiveFormComponent } from './demo-reactive-form/demo-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipComponent,
    DemoFormSithComponent,
    DemoFormJediComponent,
    DemoFormValidJediComponent,
    DemoForceComponent,
    DemoReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:SaludarService, useClass:SaludarService},
    {provide:'mascotaUniversales', useValue: 'Armadillo'},
    {provide:'valorPuntual', useFactory() {
      console.log('Estoy fabricando el valor');
      return 'Valor desde el factory';
    }},
    {provide:'STAR_WARS_API',
      useValue: 'https://swapi.co/api/starships/?search=destroyer'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
