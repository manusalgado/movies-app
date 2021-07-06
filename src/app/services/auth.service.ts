import { Injectable } from '@angular/core';
import { Credentials } from '../modules/login/interfaces/login';

import { Register } from '../modules/sign-up/entities/signUp';
import { AlertService } from './alert.service';
import { ITEMS, StorageService } from './storage.service';

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

  public login(payload: Credentials): void {
    this.storageService.getItems().then((items) => {
      console.log(typeof items);
      
    })
  }
}
