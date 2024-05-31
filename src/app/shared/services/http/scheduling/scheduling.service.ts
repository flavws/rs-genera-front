import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from 'src/app/core/interface/response.interface';
import { environment } from 'src/environments/environment';
import { SchedulingInterface } from '../../../interfaces/scheduling.interface';

@Injectable({
    providedIn: 'root',
})
export class SchedulingService {

    constructor(private http: HttpClient) {}

    public getAll(): Observable<ResponseInterface<SchedulingInterface[]>> {
        return this.http.get<ResponseInterface<SchedulingInterface[]>>(`${environment.baseUrl}/scheduling`);
    }

    public get(id: number): Observable<ResponseInterface<SchedulingInterface>> {
        return this.http.get<ResponseInterface<SchedulingInterface>>(`${environment.baseUrl}/scheduling/${id}`);
    }

    public add(data: SchedulingInterface): Observable<ResponseInterface<SchedulingInterface>> {
        return this.http.post<ResponseInterface<SchedulingInterface>>(`${environment.baseUrl}/scheduling`, { data });
    }

    public put(id: number, data: SchedulingInterface): Observable<ResponseInterface<SchedulingInterface>> {
        return this.http.put<ResponseInterface<SchedulingInterface>>(`${environment.baseUrl}/scheduling/${id}`, { data });
    }

    public delete(id: number): Observable<ResponseInterface<SchedulingInterface>> {
        return this.http.delete<ResponseInterface<SchedulingInterface>>(`${environment.baseUrl}/scheduling/${id}`);
    }
}
