import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre: string;
  apellidos: string;
  edad: number;
}

interface ICoche{
  marca: string;
  potencia: number;
}

export class CPersona{
  constructor(nombre: string, apellidos: string, edad: number) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
  }

  nombre: string;
  apellidos: string;
  edad: number;
}

export class CCoche{
  constructor(marca: string, potencia: number) {
    this.marca = marca;
    this.potencia = potencia;
  }

  marca: string;
  potencia: number;
}

@Component({
  selector: 'app-primercomponente',
  templateUrl: './primercomponente.component.html',
  styleUrls: ['./primercomponente.component.css']
})
export class PrimercomponenteComponent implements OnInit {

  variable: number;
  variableCadena: string;
  variableArray: number[];
  variableBoolean: boolean;
  variableTupla: [string, number][];
  variableCualquierDato: any;

  variableICoche: ICoche;
  variableIPersona: Persona;


  variableCCoche: CCoche;
  variableCPersona: CPersona;

  constructor() {
    this.variable = 1;
    this.variableCadena = '2';
    this.variableArray = [
      12, 1, 5
    ];
    this.variableBoolean = true;
    this.variableTupla = [
      ['PruebaA', 7],
      ['PruebaB', 3]
    ];
    this.variableCualquierDato = 2;
    this.variableIPersona = {
      nombre: 'Beatriz',
      apellidos: 'Calvo',
      edad: 1
    };
    this.variableICoche = {
      marca: 'Audi',
      potencia: 75
    };
    this.variableCPersona = new CPersona('Beatriz','Calvo',1);
    this.variableCCoche = new CCoche('Fiat', 130);
  }

  ngOnInit() {
  }

  verNombre() {
    return this.variableCPersona.nombre;
  }

  cambiarNombre(evento) {
   console.log(evento);
   this.variableCPersona.nombre = evento;
  }

  cambiarPotencia(evento) {
    console.log(evento);
    this.variableCCoche.potencia = evento;
  }
}
