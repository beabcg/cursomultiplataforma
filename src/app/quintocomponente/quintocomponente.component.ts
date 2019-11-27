import { Component, OnInit } from '@angular/core';
import {Usuario} from '../Models/usuario.model';
import {Observable, Subscription} from 'rxjs';
import {ApiService} from '../Servicios/api.service';

@Component({
  selector: 'app-quintocomponente',
  templateUrl: './quintocomponente.component.html',
  styleUrls: ['./quintocomponente.component.css']
})
export class QuintocomponenteComponent implements OnInit {

  public usuarios: Usuario[];
  public usuarios$: Observable<Usuario[]>;
  public usuariosSuscripcion: Subscription;
  public usuario: Usuario;

  // Inyeccion de dependencias (Dependency Injector)
  constructor(private apiservice: ApiService) {
    this.usuario = new Usuario('Bea', 'A1', 'A2', 'A3', 4);
  }

  ngOnInit() {
    this.usuarios = this.apiservice.getUsuarios();
    this.usuarios$ = this.apiservice.getUsuarios$();
    this.usuariosSuscripcion = this.usuarios$.subscribe({
      next: usuarios => this.usuarios = usuarios,
    });
    this.usuario = this.apiservice.nuevoUsuario();
  }

  public nuevo(): void{
    this.apiservice.agregaUsuario(this.usuario); //Grabo el usuario
    this.usuario = this.apiservice.nuevoUsuario(); //limpio el objeto para el siguiente
  }
  }
