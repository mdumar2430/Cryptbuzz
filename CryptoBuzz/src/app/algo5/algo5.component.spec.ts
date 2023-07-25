import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Algo5Component } from './algo5.component';

describe('Algo5Component', () => {
  let component: Algo5Component;
  let fixture: ComponentFixture<Algo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Algo5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Algo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
