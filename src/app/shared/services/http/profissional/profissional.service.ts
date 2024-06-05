import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from 'src/app/core/interface/response.interface';
import { environment } from 'src/environments/environment';
import { ProfissionalInterface } from '../../../interfaces/profissional.interface';

@Injectable({
    providedIn: 'root',
})
export class ProfissionalService {

    constructor(private http: HttpClient) {}

    public getAll(): Observable<ProfissionalInterface[]> {
        return this.http.get<ProfissionalInterface[]>(`${environment.baseUrl}/professionals`);
    }

    public get(id: number): Observable<ProfissionalInterface[]> {
        return this.http.get<ProfissionalInterface[]>(`${environment.baseUrl}/professionals/${id}`);
    }

    public add(data: ProfissionalInterface): Observable<ProfissionalInterface[]> {
        return this.http.post<ProfissionalInterface[]>(`${environment.baseUrl}/professionals`, data);
    }

    public put(id: number, data: ProfissionalInterface): Observable<ProfissionalInterface> {
        return this.http.put<ProfissionalInterface>(`${environment.baseUrl}/professionals/${id}`, { data });
    }

    public delete(id: number): Observable<ProfissionalInterface> {
        return this.http.delete<ProfissionalInterface>(`${environment.baseUrl}/professionals/${id}`);
    }
}
