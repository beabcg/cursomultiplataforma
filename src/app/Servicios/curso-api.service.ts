import { Injectable } from '@angular/core';
import {Curso} from '../Models/curso.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoApiService {
  private apiUrl = 'http://localhost/pzend/public/';

  constructor(private http: HttpClient) {  }

  private static crearHeaders() {
    const options: any = {
      headers: new HttpHeaders(),
      params: new HttpParams(),
      responseType: 'json',
      observe: 'response'
    };
    return options;
  }
  /* private static updateHeaders() {
    const options: any = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers' : 'X-Requested-With, Origin, Content-Type, X-Auth-Token',
        'Content-Type': 'application/json'
      }),
      params: new HttpParams(),
      responseType: 'json',
      observe: 'response'
    };
    return options;
  } */

  public getCursos() {
    return this.http.get<Curso[]>('http://localhost/pzend/public/curso', CursoApiService.crearHeaders());
  }

  public modificarCurso(curso: Curso) {
    // return this.http.put<Usuario>(this.apiUrl + 'usuario' + '/' + usuario.login, usuario, UsuarioApiService.crearHeaders());
    return this.http.put<Curso>('http://localhost/pzend/public/curso/' + curso.id, curso, CursoApiService.crearHeaders());
  }

  public borrarCurso(curso: Curso) {
    // return this.http.delete<Usuario>(this.apiUrl + 'usuario' + '/' + usuario.login, UsuarioApiService.crearHeaders());
    return this.http.delete<Curso>('http://localhost/pzend/public/curso/' + curso.id, CursoApiService.crearHeaders());
  }

  public agregarCurso(curso: Curso) {
    // return this.http.post<Usuario>(this.apiUrl + 'usuario', usuario, UsuarioApiService.crearHeaders());
    return this.http.post<Curso>('http://localhost/pzend/public/curso', curso, CursoApiService.crearHeaders());
  }

}
