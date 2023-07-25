import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Algo6Component } from './algo6.component';

describe('Algo6Component', () => {
  let component: Algo6Component;
  let fixture: ComponentFixture<Algo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Algo6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Algo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
