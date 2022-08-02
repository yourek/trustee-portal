import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginSerivce } from '../services/login.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private loginSerivce: LoginSerivce){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var user = this.loginSerivce.user;
        if (user.isAuthenticated) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Basic ${user.authData}`
                }
            })
        }

        return next.handle(req);
    }
}