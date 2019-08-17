import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLogComponent } from './detalle-log.component';

describe('DetalleLogComponent', () => {
  let component: DetalleLogComponent;
  let fixture: ComponentFixture<DetalleLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
