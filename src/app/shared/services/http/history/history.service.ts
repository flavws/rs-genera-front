import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryInterface } from '../../../interfaces/history.interface';
import { environment } from 'src/environments/environment';
import { ResponseInterface } from 'src/app/core/interface/response.interface';

@Injectable({
    providedIn: 'root',
})
export class HistoryService {

    constructor(private http: HttpClient) {}

    public getAll(): Observable<HistoryInterface[]> {
        return this.http.get<HistoryInterface[]>(`${environment.baseUrl}/historys`);
    }

    public get(id: number): Observable<HistoryInterface> {
        return this.http.get<HistoryInterface>(`${environment.baseUrl}/historys/${id}`);
    }

    public add(data: HistoryInterface): Observable<HistoryInterface> {
        return this.http.post<HistoryInterface>(`${environment.baseUrl}/historys`, data);
    }

    public put(id: number, data: HistoryInterface): Observable<HistoryInterface> {
        return this.http.put<HistoryInterface>(`${environment.baseUrl}/historys/${id}`, { data });
    }

    public delete(id: number): Observable<HistoryInterface> {
        return this.http.delete<HistoryInterface>(`${environment.baseUrl}/historys/${id}`);
    }
}
