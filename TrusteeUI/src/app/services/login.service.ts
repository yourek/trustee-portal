import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { AuthRequest } from "../api/models";
import { AuthService } from "../api/services";

@Injectable({
    providedIn: 'root'
  })
export class LoginSerivce {
    public user = {
        authData: '',
        isAuthenticated: false,
    }
    
    constructor(private authService: AuthService){
        var userFromLocalStorage = localStorage.getItem('user');
        if (userFromLocalStorage) {
            this.user = JSON.parse(userFromLocalStorage);
        }
    }

    logIn(credentials: AuthRequest){
        return this.authService.apiAuthPost$Json({body: credentials}).pipe(
            map(result => {
                if (result.Status === "Authenticated") {
                    this.user.authData = window.btoa(credentials.User + ':' + credentials.Password);
                    this.user.isAuthenticated = true;
                    localStorage.setItem('user', JSON.stringify(this.user));
                };
                return result;
            })
        )
    }

    logOut(){
        localStorage.setItem('user', '');
    }
}