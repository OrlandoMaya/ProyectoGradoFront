import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelAguaComponent } from './vel-agua.component';

describe('VelAguaComponent', () => {
  let component: VelAguaComponent;
  let fixture: ComponentFixture<VelAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
