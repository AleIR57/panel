import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApartadoService {

  constructor() { }
  apartado:any = "Conexion PRO";

  definirApartado(apartado:any){
    this.apartado = apartado;
  }

  obtenerApartado(){
    return this.apartado;
  }

}
