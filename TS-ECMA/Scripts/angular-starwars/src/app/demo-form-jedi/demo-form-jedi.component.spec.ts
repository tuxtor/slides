import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormJediComponent } from './demo-form-jedi.component';

describe('DemoFormJediComponent', () => {
  let component: DemoFormJediComponent;
  let fixture: ComponentFixture<DemoFormJediComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormJediComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormJediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
