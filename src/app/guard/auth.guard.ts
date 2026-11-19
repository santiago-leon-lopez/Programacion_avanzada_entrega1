
import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const autenticado = sessionStorage.getItem('login') === 'true'; 

  if (autenticado) {
    return true
  }

  return router.navigate(['auth/login'])
}