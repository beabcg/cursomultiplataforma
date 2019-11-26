import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercercomponente',
  templateUrl: './tercercomponente.component.html',
  styleUrls: ['./tercercomponente.component.css']
})
export class TercercomponenteComponent implements OnInit {

  numeroPipe = 10.879;
  dineroPipe = 13.89;
  fechaPipe = Date.now();
  objetoPipe = {nombre: 'Curso', asistentes: 12};
  cadenaPipe = 'Esto eS UnA CadeNa';

  constructor() { }

  ngOnInit() {
  }

}
