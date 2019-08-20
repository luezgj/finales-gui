import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedLayoutComponent } from './loged-layout.component';

describe('LogedLayoutComponent', () => {
  let component: LogedLayoutComponent;
  let fixture: ComponentFixture<LogedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogedLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
