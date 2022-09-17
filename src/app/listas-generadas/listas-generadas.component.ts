import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {TarjetaCredito} from "../models/tarjeta-credito.model"
@Component({
  selector: 'app-listas-generadas',
  templateUrl: './listas-generadas.component.html',
  styleUrls: ['./listas-generadas.component.css']
})
export class ListasGeneradasComponent implements OnInit {
  @Input() tarjetas: TarjetaCredito;
  @HostBinding("attr.class") ccsClass = "col-md-4 mt-3"
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
