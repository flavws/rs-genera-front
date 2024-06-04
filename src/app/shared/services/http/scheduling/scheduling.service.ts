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

    public getAll(): Observable<SchedulingInterface[]> {
        return this.http.get<SchedulingInterface[]>(`${environment.baseUrl}/schedulings`);
    }

    public get(id: number): Observable<SchedulingInterface> {
        return this.http.get<SchedulingInterface>(`${environment.baseUrl}/schedulings/${id}`);
    }

    public add(data: SchedulingInterface): Observable<SchedulingInterface> {
        return this.http.post<SchedulingInterface>(`${environment.baseUrl}/schedulings`, data);
    }

    public put(id: number, data: SchedulingInterface): Observable<SchedulingInterface> {
        return this.http.put<SchedulingInterface>(`${environment.baseUrl}/schedulings/${id}`, { data });
    }

    public delete(id: number): Observable<SchedulingInterface> {
        return this.http.delete<SchedulingInterface>(`${environment.baseUrl}/schedulings/${id}`);
    }
}
