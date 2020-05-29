import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
}
// este guard nos sirve para q un usuario no pueda escribir la url e ingresar a un url sin haberse autenticado primero,,
// en este caso usamos un observable q devuelve un boolean ya que vamos a usar isAuthenticated q es una funcion del service y me devuelve falso o
// verdadero si esta autenticado o no, entonces si esta autenticado puedo ingresar a esa ruta, la configuramos en las rutas
