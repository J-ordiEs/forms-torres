import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface StudentModel {
  nombres: FormControl<string | null>,
  apellidos: FormControl<string | null>,
  email: FormControl<string | null>,
  telefono: FormControl<string | null>,
  fechaNacimiento: FormControl<string | null>,
  direccionRecidencia: FormControl<string | null>,
  ciudad: FormControl<string | null>,
  codigopostal: FormControl<string | null>
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  nombresControl = new FormControl('', [Validators.required]);
  apellidosControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required]);
  telefonoControl = new FormControl('', [Validators.required]);
  fechaNacimientoControl = new FormControl('', [Validators.required]);
  direccionRecidenciaControl = new FormControl('', [Validators.required]);
  ciudadControl = new FormControl('', [Validators.required]);
  codigoPostalControl = new FormControl('', [Validators.required]);
  

  studentModel: FormGroup<StudentModel> = new FormGroup({
    nombres: this.nombresControl,
    apellidos: this.apellidosControl,
    email: this.emailControl,
    telefono: this.telefonoControl,
    fechaNacimiento: this.fechaNacimientoControl,
    direccionRecidencia: this.direccionRecidenciaControl,
    ciudad: this.ciudadControl,
    codigopostal: this.codigoPostalControl
  });
}
