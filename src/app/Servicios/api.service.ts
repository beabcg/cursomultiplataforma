import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Usuario} from '../Models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private usuarios: Usuario[];
  private usuarios$ = new Subject<Usuario[]>();

  constructor() {
    this.usuarios = [];
  }

  public getUsuarios(){
     return this.usuarios;
  }

  public getUsuarios$(): Observable<Usuario[]>{
    return this.usuarios$.asObservable();
  }

  // Genera un objeto usuario vacío
   nuevoUsuario(): Usuario{
    return new Usuario(null, null, null, null, null);
   }

   // Recibe un objeto usuario y lo graba en nuestro array de usuarios
  agregaUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
    this.usuarios$.next(this.usuarios);
  }
}
