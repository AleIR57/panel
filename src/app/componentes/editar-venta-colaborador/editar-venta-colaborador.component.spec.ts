import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVentaColaboradorComponent } from './editar-venta-colaborador.component';

describe('EditarVentaColaboradorComponent', () => {
  let component: EditarVentaColaboradorComponent;
  let fixture: ComponentFixture<EditarVentaColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVentaColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVentaColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
