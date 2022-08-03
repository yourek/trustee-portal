import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { AuthRequest, User } from "../api/models";
import { AuthService } from "../api/services";

interface CurrentUser {
    user: User | null,
    authData: string,
    isAuthenticated: boolean
}


@Injectable({
    providedIn: 'root'
  })
export class LoginSerivce {
    private newUser: CurrentUser = {
        user: null,
        authData: '',
        isAuthenticated: false
    }
    private currentUserSubject = new BehaviorSubject<CurrentUser>(this.newUser);
    public currentUser: Observable<CurrentUser> = this.currentUserSubject.asObservable();
    
    constructor(
        private authService: AuthService){
        var userFromLocalStorage = localStorage.getItem('user');
        if (userFromLocalStorage){
            this.currentUserSubject = new BehaviorSubject<CurrentUser>(JSON.parse(userFromLocalStorage));
            this.currentUser = this.currentUserSubject.asObservable();
        };
    }

    public get currentUserValue(): CurrentUser {
        return this.currentUserSubject.value;
    }

    public get currentUserFullName(): string | undefined {
        return this.currentUserSubject.value.user?.FullName?.toString();
    }

    logIn(credentials: AuthRequest){
        return this.authService.apiAuthPost$Json({body: credentials}).pipe(
            map(result => {
                if (result.Status === "Authenticated") {
                    if (result.User){
                        this.newUser.user = result.User;
                        this.newUser.authData = window.btoa(credentials.User + ':' + credentials.Password);
                        this.newUser.isAuthenticated = true;
                        localStorage.setItem('user', JSON.stringify(this.newUser));
                        this.currentUserSubject.next(this.newUser);
                        console.log(this.currentUserSubject);
                    }
                };
                return result;
            })
        )
    }

    logOut(){
        localStorage.setItem('user', '');
        this.currentUserSubject.next({user: null, authData: '', isAuthenticated: false});
    }
}