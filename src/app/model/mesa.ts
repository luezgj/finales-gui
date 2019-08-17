export class Mesa {
  nombre: string;
  fechaDesde: Date;
  fechaHasta: Date;

  constructor(
    nombre: string,
    fechaDesde: Date,
    fechaHasta: Date
  ){
		this.nombre=nombre;
		this.fechaDesde=fechaDesde;
		this.fechaHasta=fechaHasta;
  }
}
