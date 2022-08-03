import { Injectable } from "@angular/core";
import { CanActivate, Router} from "@angular/router";
import { LoginSerivce } from "../services/login.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private loginSerivce: LoginSerivce, private router: Router){}

    canActivate(){
        if (this.loginSerivce.currentUserValue.isAuthenticated) {
            return true;
        }

        this.router.navigate(['admin/login']);
        return false;
    }
}