import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelAguaComponent } from './nivel-agua.component';

describe('NivelAguaComponent', () => {
  let component: NivelAguaComponent;
  let fixture: ComponentFixture<NivelAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
