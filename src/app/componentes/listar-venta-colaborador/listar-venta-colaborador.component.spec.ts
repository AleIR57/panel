import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVentaColaboradorComponent } from './listar-venta-colaborador.component';

describe('ListarVentaColaboradorComponent', () => {
  let component: ListarVentaColaboradorComponent;
  let fixture: ComponentFixture<ListarVentaColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVentaColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVentaColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
