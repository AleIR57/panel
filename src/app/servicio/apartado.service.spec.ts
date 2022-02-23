import { TestBed } from '@angular/core/testing';

import { ApartadoService } from './apartado.service';

describe('ApartadoService', () => {
  let service: ApartadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
