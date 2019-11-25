import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimercomponenteComponent } from './primercomponente/primercomponente.component';
import { SegundocomponenteComponent } from './segundocomponente/segundocomponente.component';
import { TercercomponenteComponent } from './tercercomponente/tercercomponente.component';
import { CuartocomponenteComponent } from './cuartocomponente/cuartocomponente.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrimercomponenteComponent,
    SegundocomponenteComponent,
    TercercomponenteComponent,
    CuartocomponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
