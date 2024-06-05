import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from 'src/app/core/interface/response.interface';
import { environment } from 'src/environments/environment';
import { PersonInterface } from '../../../interfaces/person.interface';

@Injectable({
    providedIn: 'root',
})
export class PersonService {

    constructor(private http: HttpClient) {}

    public getAll(): Observable<PersonInterface[]> {
        return this.http.get<PersonInterface[]>(`${environment.baseUrl}/persons`);
    }

    public get(id: number): Observable<PersonInterface[]> {
        return this.http.get<PersonInterface[]>(`${environment.baseUrl}/persons/${id}`);
    }

    public add(data: PersonInterface): Observable<PersonInterface> {
        return this.http.post<PersonInterface>(`${environment.baseUrl}/persons`, data);
    }

    public put(id: number, data: PersonInterface): Observable<PersonInterface> {
        return this.http.put<PersonInterface>(`${environment.baseUrl}/persons/${id}`, data);
    }

    public delete(id: number): Observable<PersonInterface> {
        return this.http.delete<PersonInterface>(`${environment.baseUrl}/persons/${id}`);
    }
}
