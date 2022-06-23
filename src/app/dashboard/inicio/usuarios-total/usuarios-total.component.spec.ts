import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosTotalComponent } from './usuarios-total.component';

describe('UsuariosTotalComponent', () => {
  let component: UsuariosTotalComponent;
  let fixture: ComponentFixture<UsuariosTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
