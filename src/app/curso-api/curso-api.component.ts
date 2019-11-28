import {Component, OnInit} from '@angular/core';
import {Curso} from '../Models/curso.model';
import {CursoApiService} from '../Servicios/curso-api.service';

@Component({
  selector: 'app-curso-api',
  templateUrl: './curso-api.component.html',
  styleUrls: ['./curso-api.component.css']
})
export class CursoApiComponent implements OnInit {
  public cursos: Curso[];
  public mensaje;
  public cuantos;
  public edito = false;
  public crear = false;
  public curso: Curso;

  constructor(private cursoApi: CursoApiService) {  }

  ngOnInit(): void {
    this.cursoApi.getCursos().subscribe(
      resp => {
        console.log(resp);
        this.cursos = [];
        // @ts-ignore
        resp.body.forEach((elem, i) => { this.cursos.push(elem); });
        // @ts-ignore
        this.cuantos = resp.body.length;
        this.mensaje = 'Datos cargados correctamente';
      },
      err => {
        this.mensaje = 'Error al cargar los datos.' + err;
      }
    );
  }

  // constructor(private usuarioApi: UsuarioApiService) { }
  /*
    ngOnInit() {
      this.usuarioApi.getUsuarios().subscribe(
        resp => {
          this.usuarios = [];
          // @ts-ignore
          resp.body.forEach((elem, i) => { this.usuarios.push(elem); });
          // @ts-ignore
          this.cuantos =resp.body.length;
          this.mensaje = 'Datos cargados correctamente';
        },
        err => {
          this.mensaje = 'Error al cargar los datos';
        }
      );
    }
  */

  /*
    constructor(private usuarioApi: UsuarioApiService) {

    }
  ngOnInit(): void {
  }

  ngAfterViewInit () {
    this.usuarioApi.getUsuarios().subscribe(
      resp => {
        this.usuarios = [];
        // @ts-ignore
        resp.body.forEach((elem, i) => {
          this.usuarios.push(elem);
        });
        // @ts-ignore
        this.cuantos = resp.body.length;
        this.mensaje = 'Datos cargados correctamente';
      },
      err => {
        this.mensaje = 'Error al cargar los datos';
      }
    );
  }
  */

  borrar(id): void {
    this.cursoApi.borrarCurso(new Curso(id, null, null, 0)).subscribe(
      resp => {
        this.mensaje = 'Datos eliminados correctamente';
        // Si los vuelvo a pedir me sale actualizado (poco óptimo, otra llamada al API)
        // this.usuarioApi.getUsuarios();

        // Más óptimo si actualizamos el array
        // @ts-ignore
        this.borrarCursoArray(new Curso(resp.body, null, null, null));
      },
      err => {
        this.mensaje = 'Error al eliminar los datos.' + err.toString();
      }
    );

  }
  editar(id): void {
    this.edito = true;

    this.cursos.forEach((item, index, dat) => {
      if (item.id === id) {
        // this.usuario = item;
        this.curso = new Curso(item.id, item.nombre, item.descripcion, item.capacidad);
      }
    });
  }

  actualizar(id): void {
    this.cursoApi.modificarCurso(this.curso).subscribe(
      resp => {
        this.mensaje = 'Datos actualizados correctamente';
        // Si los vuelvo a pedir me sale actualizado (poco óptimo, otra llamada al API)
        // this.usuarioApi.getUsuarios();

        // Más óptimo si actualizamos el array
        // @ts-ignore
        // tslint:disable-next-line:max-line-length
        this.modificarCursoArray(new Curso(resp.body.id, resp.body.nombre, resp.body.descripcion, resp.body.capacidad));
      },
      err => {
        this.mensaje = 'Error al actualizar los datos';
      }
    );
    // Si es el mismo objeto con edito = false nos vale para que se oculte el div y listo
    this.edito = false;
    // Siempre limpiamos el this.usuario para que la siguiente acción no lleve información errónea
    this.curso = this.nuevoCursoArray();
  }

  nuevo(accion): void {
    if (accion == 'grabar') {
      this.cursoApi.agregarCurso(this.curso).subscribe(
        resp => {
          this.mensaje = 'Datos insertados correctamente';
          // Si los vuelvo a pedir me sale actualizado (poco óptimo, otra llamada al API)
          // this.usuarioApi.getUsuarios();

          // Más óptimo si actualizamos el array
          // @ts-ignore
          // tslint:disable-next-line:max-line-length
          this.agregarCursoArray(new Curso(resp.body.id, resp.body.nombre, resp.body.descripcion, resp.body.capacidad));
        },
        err => {
          this.mensaje = 'Error al insertados los datos.' + err;
        }
      );
      this.crear = false;
    } else {
      this.crear = true;
    }
    // Siempre limpiamos el this.usuario para que la siguiente acción no lleve información errónea
    this.curso = this.nuevoCursoArray();
  }

  // Auxiliares gestión del array
  private modificarCursoArray(curso: Curso) {
    this.cursos.forEach((item, index, dat) => {
      if (item.id === curso.id) {
        item.nombre = curso.nombre;
        item.descripcion = curso.descripcion;
        item.capacidad = curso.capacidad;
      }
    });
  }

  private borrarCursoArray(curso: Curso) {
    this.cursos.forEach((item, index, dat) => {
      if (item.id === curso.id) {
        this.cursos.splice(index, 1); // Borra desde el index 1 elemento, podrían ser varios
      }
    });
  }
  private agregarCursoArray(curso: Curso) {
    this.cursos.push(curso);
  }

  /* Genera un objeto usuario vacio */
  private nuevoCursoArray(): Curso {
    // Todos null para crearlo sin valores concretos
    // Importante edad = null porque al ser numérco no se puede poner = '' y no queremos inicializaron con un valor
    return  new Curso(null, null, null, null);
  }

}
