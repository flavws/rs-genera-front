import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    public constructor() {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const data = localStorage.getItem('user');
        const user = data ? JSON.parse(data) : null;
        const token = user ? user.token : null;

        if (token) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
            return next.handle(clonedReq);
        }
        return next.handle(req);
    }
}
