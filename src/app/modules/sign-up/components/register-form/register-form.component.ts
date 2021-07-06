import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DEFAULT_IMAGE } from '../../constants/signUp';
import { Photo } from '../../interfaces/signUp';
import { PhotoService } from '../../services/photo.service';
import { Register } from '../../entities/signUp';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass'],
})
export class RegisterFormComponent implements OnInit {

  public form: FormGroup;
  public defaultImage: string = DEFAULT_IMAGE;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.init();
  }

  get photo(): Photo {
    return this.photoService.photo;
  }

  get photoValidator(): string {
    return this.photo ? this.photo?.webviewPath : this.defaultImage;
  }

  public clear(): void {
    this.form.reset();
  }

  public addPhoto(): void {
    this.photoService.addPhoto();
  }

  public handleRegister(payload: Register): void {
    this.authService.register(payload);
  }

  public init(): void {
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      phone: [null, Validators.required],
      password: ['', Validators.required],
    })
  }

  public onSubmit(): void {
    if (this.form.valid && this.photo) {
      const {fullName, phone, password} = this.form.value;
      const payload: Register = {
        photo: this.photo.webviewPath,
        fullName,
        phone,
        password
      };
      this.handleRegister(payload);
      this.clear();
    }
  }

}
