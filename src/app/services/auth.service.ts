import { Injectable } from '@angular/core';

import { Register } from '../modules/sign-up/entities/signUp';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn: boolean = false;

  constructor() { }

  public register(payload: Register): void {
    console.log(payload);
    
  }
}
