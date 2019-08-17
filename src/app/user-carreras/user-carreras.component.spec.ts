import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarrerasComponent } from './user-carreras.component';

describe('UserCarrerasComponent', () => {
  let component: UserCarrerasComponent;
  let fixture: ComponentFixture<UserCarrerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarrerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
