import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass'],
})
export class RegisterFormComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.init();
  }

  public init(): void {
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      phone: [null, Validators.required],
      photo: [null, Validators.required],
      password: ['', Validators.required],
    })
  }

  public handleRegister(): void {
    if (this.form.valid) { }
  }

}
