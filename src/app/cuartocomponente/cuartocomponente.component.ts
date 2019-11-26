import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-cuartocomponente',
  templateUrl: './cuartocomponente.component.html',
  styleUrls: ['./cuartocomponente.component.css']
})
export class CuartocomponenteComponent implements OnInit {

  datosAObservar = of(1,2,3);
  observador;
  numero: number[];

  constructor() {
    this.observador = {
      next: posicion => {
        console.log('Mostramos el primer valor' + posicion);
        this.numero = posicion;
        },
    error: err => {
        console.log('Mostramos un error');
    },
      complete: () => {
      console.log('Hemos completado los datos');
    }
    };
  }

  ngOnInit() {
    this.datosAObservar.subscribe(this.observador);
  }

}
