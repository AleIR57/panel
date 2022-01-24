import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVendedorComponent } from './agregar-vendedor.component';

describe('AgregarVendedorComponent', () => {
  let component: AgregarVendedorComponent;
  let fixture: ComponentFixture<AgregarVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
