import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-demo-form-valid-jedi',
  templateUrl: './demo-form-valid-jedi.component.html',
  styleUrls: ['./demo-form-valid-jedi.component.css']
})
export class DemoFormValidJediComponent implements OnInit {

  myForm: FormGroup;
  name: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'name' : ['', Validators.compose([Validators.required, jediValidator])]
    });

    

    this.name = this.myForm.controls['name'];

    this.name.valueChanges.subscribe(
      (value:string) => {
        console.log('name value changed to: ' + value);
      }
    )
  }

  ngOnInit() {
  }

  onSubmit(value:string){
    console.log('you submitted value: ', value);
  }

  

}

function jediValidator(control: FormControl): {[s:string]:boolean} {
  if(control.value == 'Dillo'){
    return {invalidJedi:true};
  }
}
