import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public formregister!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    
  }

  ngOnInit(): void {
    this.formInit()
  }
  //Metodo para inicializar el form
  public formInit() {
    this.formregister = this.fb.group({
      email: [''],
      pass: [''],
      confirmPass: ['']
    });
  }



  //metodo para registrar usuario
  registrarUsuario() {
    const data = this.formregister.value;
    console.log(data);
  }
}

