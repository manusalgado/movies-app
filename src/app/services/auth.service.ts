import { Injectable } from '@angular/core';

import { Register } from '../modules/sign-up/entities/signUp';
import { AlertService } from './alert.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn: boolean = false;

  constructor(private storageService: StorageService, private alert: AlertService) { }

  public register(payload: Register): void {
    this.storageService.setItem(payload).then(item => {
      this.alert.presentToast('Registro exitoso');
      console.log(item, 'storage');
    })
  }
}
