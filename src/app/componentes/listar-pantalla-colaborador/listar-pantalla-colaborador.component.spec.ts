import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPantallaColaboradorComponent } from './listar-pantalla-colaborador.component';

describe('ListarPantallaColaboradorComponent', () => {
  let component: ListarPantallaColaboradorComponent;
  let fixture: ComponentFixture<ListarPantallaColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPantallaColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPantallaColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
