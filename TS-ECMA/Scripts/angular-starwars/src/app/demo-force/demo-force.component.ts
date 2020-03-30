import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-force',
  templateUrl: './demo-force.component.html',
  styleUrls: ['./demo-force.component.css']
})
export class DemoForceComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Yoda';
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
