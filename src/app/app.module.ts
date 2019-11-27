import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimercomponenteComponent } from './primercomponente/primercomponente.component';
import { SegundocomponenteComponent } from './segundocomponente/segundocomponente.component';
import { TercercomponenteComponent } from './tercercomponente/tercercomponente.component';
import { CuartocomponenteComponent } from './cuartocomponente/cuartocomponente.component';
import {FormsModule} from '@angular/forms';
import {_MatMenuDirectivesModule} from '@angular/material';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { QuintocomponenteComponent } from './quintocomponente/quintocomponente.component';
import {UsuarioApiComponent} from './usuario-api/usuario-api.component';
import {UsuarioApiService} from './Servicios/usuario-api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrimercomponenteComponent,
    SegundocomponenteComponent,
    TercercomponenteComponent,
    CuartocomponenteComponent,
    QuintocomponenteComponent,
    UsuarioApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    _MatMenuDirectivesModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UsuarioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
