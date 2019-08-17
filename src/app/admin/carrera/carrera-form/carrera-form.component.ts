import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Carrera } from '../../../model/carrera';
import { CarreraService } from '../../../services/carrera.service';

@Component({
  selector: 'app-carrera-form',
  templateUrl: './carrera-form.component.html',
  styleUrls: ['./carrera-form.component.scss']
})
export class CarreraFormComponent implements OnInit {

  @Input() carreraIn: Carrera;
  @Output() edit: EventEmitter<Carrera> = new EventEmitter();
  isEdit: boolean;
  error: boolean;
  submitting: boolean;
  submitBtnText: string;

	carreraForm: FormGroup;
	subjects: FormArray;

  newCarrera: Carrera;

	constructor(private formBuilder: FormBuilder, private carreraService: CarreraService) {}

  ngOnInit() {
    this.isEdit = (this.carreraIn!=null);
    this.submitBtnText = this.isEdit ? 'Modificar carrera' : 'Crear carrera';

    this.newCarrera = this._setNewCarrera();

    this._buildForm();
  }

  private _setNewCarrera() {
    if (!this.isEdit) {
      return new Carrera(null, []);
    } else {
      return new Carrera(
        this.carreraIn.nombre,
        this.carreraIn.materias,
      );
    }
  }

  private _buildForm() {
    this.carreraForm = this.formBuilder.group({
      nombre: [this.newCarrera.nombre, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      cantidadMaterias: 0,
      subjects: this.formBuilder.array(this.newCarrera.materias)
    });
  }

  addSubjects(cantidad: number){
  	this.subjects = this.carreraForm.get('subjects') as FormArray;
  	for (var _i = 0; _i < cantidad; _i++){
  		this.subjects.push(new FormControl());
  	}
  }

  add(submitform: FormGroup){
    let submitCarrera=new Carrera(
      submitform.get('nombre').value,
      submitform.get('subjects').value
      );
    this.submitting = true;

    if (!this.isEdit) {
      this.carreraService.addCarrera(submitCarrera)
        .subscribe(carrera => {
          this._handleSubmitSuccess(carrera);
          this.edit.emit(carrera);
        });
    } else {
      this.carreraService.modifyCarrera(submitCarrera)
        .subscribe(carrera => {
          this._handleSubmitSuccess(carrera);
          this.edit.emit(carrera)
        });
      }
  }

  private _handleSubmitSuccess(res) {
    this.error = false;
    this.submitting = false;
    // Agregar a la lista de carreras
  }


  deleteSubject(index: number){
    this.subjects = this.carreraForm.get('subjects') as FormArray;
    this.subjects.removeAt(index);
  }

  ereaseForm(){

  }

}
