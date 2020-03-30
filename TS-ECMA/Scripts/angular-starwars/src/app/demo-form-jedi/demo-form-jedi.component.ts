import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-demo-form-jedi',
  templateUrl: './demo-form-jedi.component.html',
  styleUrls: ['./demo-form-jedi.component.css']
})
export class DemoFormJediComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'name' : ['']
    });
  }

  ngOnInit() {
  }

  onSubmit(value:string){
    console.log('you submitted value: ', value);
  }

}
