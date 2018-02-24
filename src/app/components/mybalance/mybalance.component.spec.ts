import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybalanceComponent } from './mybalance.component';

describe('MybalanceComponent', () => {
  let component: MybalanceComponent;
  let fixture: ComponentFixture<MybalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
