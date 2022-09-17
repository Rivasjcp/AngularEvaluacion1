import { Component, OnInit } from '@angular/core';
import {TarjetaCredito} from "../models/tarjeta-credito.model"
@Component({
  selector: 'app-form-listas',
  templateUrl: './form-listas.component.html',
  styleUrls: ['./form-listas.component.css']
})
export class FormListasComponent implements OnInit {
  datos:TarjetaCredito[]
  constructor() {
    this.datos = []
   }

  ngOnInit(): void {
  }

  guardar(nombre:string,tarjeta:string,vencimiento:string){
    this.datos.push(new TarjetaCredito(nombre,tarjeta,vencimiento))
    console.log(this.datos)
    return false 
  }
}
