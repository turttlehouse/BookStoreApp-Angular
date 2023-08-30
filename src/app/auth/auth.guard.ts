// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return false;
// };

import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class authGuard{
  constructor(private authService: AuthService) {}

  canActivate() {
    return this.authService.isAuthenticated;
  }
}


