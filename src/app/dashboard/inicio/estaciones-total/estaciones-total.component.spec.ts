import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionesTotalComponent } from './estaciones-total.component';

describe('EstacionesTotalComponent', () => {
  let component: EstacionesTotalComponent;
  let fixture: ComponentFixture<EstacionesTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstacionesTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionesTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
