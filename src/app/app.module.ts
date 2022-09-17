import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormListasComponent } from './form-listas/form-listas.component';
import { ListasGeneradasComponent } from './listas-generadas/listas-generadas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormListasComponent,
    ListasGeneradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
