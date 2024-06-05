import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseInterface } from 'src/app/core/interface/response.interface';
import { LoginRequestInterface } from 'src/app/shared/interfaces/requests/login-request.interface';
import { LoginResponseInterface } from 'src/app/shared/interfaces/response/login-response.interface';
import { UserInterface } from 'src/app/shared/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor(private http: HttpClient) {}

    public login(params: LoginRequestInterface): Observable<LoginResponseInterface> {
        return this.http.post<LoginResponseInterface>(`${environment.baseUrl}/login`, params)
            .pipe(
                map((response: LoginResponseInterface) => {
                    if (response) {
                        this.saveDataInLocalStorage(response);
                    }
                    return response;
                })
            );
    }

    public isLogged(): boolean {
        let response = false;
        const data = localStorage.getItem('user');
        if (data) {
            const user = JSON.parse(data);
            if (user.token) response = true;
        }
        return response;
    }

    public logout(): Observable<ResponseInterface<void>> {
        return this.http.post<ResponseInterface<void>>(`${environment.baseUrl}/logout`, {}).pipe(
            map((response: ResponseInterface<void>) => {
                this.removeDataFromLocalStorage();
                return response;
            }));
    }

    private saveDataInLocalStorage(data: LoginResponseInterface): void {
        localStorage.setItem('user', JSON.stringify(data));
    }

    private removeDataFromLocalStorage(): void {
        localStorage.removeItem('user');
        localStorage.removeItem('userName');
        localStorage.removeItem('professional');
    }

}
