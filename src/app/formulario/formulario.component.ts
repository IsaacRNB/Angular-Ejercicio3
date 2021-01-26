import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder ) { }


    dateLength = 10;
    today = new Date().toISOString().substring(0, this.dateLength);

    form = this.formBuilder.group({
      registeredOn: this.today,
      nombre: [''],
      apellidos: [''],
      sexo: [''],
      edad: ['']
    });

  submit() {
    console.log(this.form.value)
  }
  refrescar(){
    this.form.patchValue({
      nombre: [''],
      apellidos: [''],
      sexo: [''],
      edad: ['']
    });
  }
}
