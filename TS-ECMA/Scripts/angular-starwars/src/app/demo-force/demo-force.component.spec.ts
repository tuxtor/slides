import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoForceComponent } from './demo-force.component';

describe('DemoForceComponent', () => {
  let component: DemoForceComponent;
  let fixture: ComponentFixture<DemoForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
