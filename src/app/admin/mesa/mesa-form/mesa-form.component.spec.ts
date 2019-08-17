import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaFormComponent } from './mesa-form.component';

describe('MesaFormComponent', () => {
  let component: MesaFormComponent;
  let fixture: ComponentFixture<MesaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
