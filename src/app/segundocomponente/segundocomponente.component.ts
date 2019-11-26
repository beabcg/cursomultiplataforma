import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundocomponente',
  templateUrl: './segundocomponente.component.html',
  styleUrls: ['./segundocomponente.component.css']
})
export class SegundocomponenteComponent implements OnInit {

  variableBooleana = true;
  numero = 2;
  arrayDatos: number[];
  posicion = 3;

  constructor() { }

  ngOnInit() {
    this.arrayDatos = [3,50,100,4];
  }

}
