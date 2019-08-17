export class Log {
	id: number;
	usuario: string;
	mesa: string;
	materia: string;
	carrera: string;
	estado: string;
	fecha: Date;

	constructor(
		usuario: string,
		mesa: string,
		materia: string,
		carrera: string,
		estado: string,
		fecha: Date
  ){
		this.usuario= usuario;
		this.mesa= mesa;
		this.materia= materia;
		this.carrera= carrera;
		this.estado= estado;
		this.fecha= fecha;
  }
}