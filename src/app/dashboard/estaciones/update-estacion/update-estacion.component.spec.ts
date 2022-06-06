import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstacionComponent } from './update-estacion.component';

describe('UpdateEstacionComponent', () => {
  let component: UpdateEstacionComponent;
  let fixture: ComponentFixture<UpdateEstacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEstacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEstacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
