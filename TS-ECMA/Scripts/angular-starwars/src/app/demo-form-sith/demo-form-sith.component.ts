import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-sith',
  templateUrl: './demo-form-sith.component.html',
  styleUrls: ['./demo-form-sith.component.css']
})
export class DemoFormSithComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
