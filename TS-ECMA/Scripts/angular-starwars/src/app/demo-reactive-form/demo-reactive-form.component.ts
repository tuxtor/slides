import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-reactive-form',
  templateUrl: './demo-reactive-form.component.html',
  styleUrls: ['./demo-reactive-form.component.css']
})
export class DemoReactiveFormComponent implements OnInit {

  myForm:FormGroup;
  name:AbstractControl;
  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'name' : ['', Validators.compose([Validators.required])]
    });

    this.name = this.myForm.controls['name'];
  }

  ngOnInit() {
  }

  onSubmit(info:any){
    console.log(info);
  }

}
