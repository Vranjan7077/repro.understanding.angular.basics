import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();

  private _currentUser = new BehaviorSubject<User | null>(null);
  currentUser$ = this._currentUser.asObservable();

  constructor() {
    const savedLogin = localStorage.getItem('isLoggedIn') === 'true';
    const savedUser = localStorage.getItem('currentUser');
    if (savedLogin && savedUser) {
      this._isLoggedIn.next(true);
      this._currentUser.next(JSON.parse(savedUser));
    }
  }

  register(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    this._currentUser.next(user);
    this._isLoggedIn.next(true);
  }

  login(email: string, password: string): boolean {
    const savedUserString = localStorage.getItem('currentUser');
    if (!savedUserString) return false;

    const savedUser: User = JSON.parse(savedUserString);
    if (savedUser.email === email && savedUser.password === password) {
      this._isLoggedIn.next(true);
      this._currentUser.next(savedUser);
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }

    return false;
  }

  logout() {
    this._isLoggedIn.next(false);
    this._currentUser.next(null);
    localStorage.setItem('isLoggedIn', 'false');
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn.value;
  }

  get currentUser(): User | null {
    return this._currentUser.value;
  }
}
