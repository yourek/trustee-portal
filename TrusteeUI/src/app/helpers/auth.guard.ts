import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginSerivce } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private loginSerivce: LoginSerivce, private router: Router){}

    canActivate(){
        if (this.loginSerivce.user.isAuthenticated) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}