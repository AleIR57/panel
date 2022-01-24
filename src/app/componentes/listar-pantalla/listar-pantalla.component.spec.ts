import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPantallaComponent } from './listar-pantalla.component';

describe('ListarPantallaComponent', () => {
  let component: ListarPantallaComponent;
  let fixture: ComponentFixture<ListarPantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPantallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
