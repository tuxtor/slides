import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormValidJediComponent } from './demo-form-valid-jedi.component';

describe('DemoFormValidJediComponent', () => {
  let component: DemoFormValidJediComponent;
  let fixture: ComponentFixture<DemoFormValidJediComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormValidJediComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormValidJediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
