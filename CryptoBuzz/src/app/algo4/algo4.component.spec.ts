import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Algo4Component } from './algo4.component';

describe('Algo4Component', () => {
  let component: Algo4Component;
  let fixture: ComponentFixture<Algo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Algo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Algo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
