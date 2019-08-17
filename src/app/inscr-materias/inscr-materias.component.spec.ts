import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrMateriasComponent } from './inscr-materias.component';

describe('InscrMateriasComponent', () => {
  let component: InscrMateriasComponent;
  let fixture: ComponentFixture<InscrMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscrMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
