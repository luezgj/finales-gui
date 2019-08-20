import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlogedLayoutComponent } from './unloged-layout.component';

describe('UnlogedLayoutComponent', () => {
  let component: UnlogedLayoutComponent;
  let fixture: ComponentFixture<UnlogedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlogedLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlogedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
