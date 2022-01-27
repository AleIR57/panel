import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVentaColaboradorComponent } from './agregar-venta-colaborador.component';

describe('AgregarVentaColaboradorComponent', () => {
  let component: AgregarVentaColaboradorComponent;
  let fixture: ComponentFixture<AgregarVentaColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarVentaColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarVentaColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
