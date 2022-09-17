export class TarjetaCredito {
    nombre:string;
    numeroTarjeta:string;
    fechaVencimiento:string

  
    constructor(n:string, num:string, f:string) {
      this.nombre = n;
      this.numeroTarjeta = num;
      this.fechaVencimiento = f;
    }
  
  }