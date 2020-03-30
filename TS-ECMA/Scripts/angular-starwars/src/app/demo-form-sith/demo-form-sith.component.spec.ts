import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSithComponent } from './demo-form-sith.component';

describe('DemoFormSithComponent', () => {
  let component: DemoFormSithComponent;
  let fixture: ComponentFixture<DemoFormSithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
