import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClienteColaboradorComponent } from './listar-cliente-colaborador.component';

describe('ListarClienteColaboradorComponent', () => {
  let component: ListarClienteColaboradorComponent;
  let fixture: ComponentFixture<ListarClienteColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarClienteColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
