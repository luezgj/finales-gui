import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCarreraSubsComponent } from './usr-carrera-subs.component';

describe('UsrCarreraSubsComponent', () => {
  let component: UsrCarreraSubsComponent;
  let fixture: ComponentFixture<UsrCarreraSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCarreraSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCarreraSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
