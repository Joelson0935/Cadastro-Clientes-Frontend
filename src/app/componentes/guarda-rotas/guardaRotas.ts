import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from 'src/app/Servicos/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardaRotas implements CanActivate {


  constructor(private login: LoginService, private routing: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.login.usuario === true) {
      return true
    }
    this.routing.navigate(['login'])
    return false
  }

}
