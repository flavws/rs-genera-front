import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor() {}

    public getNameProfessional(): string {
        const name = localStorage.getItem('professional') ?? '';
        return name;
    }

    public saveProfessional(name: string): void {
        localStorage.setItem('professional', name);
    }

    public deleteProfessional(): void {
        const storage = localStorage.getItem('professional');
        if (storage) {
            localStorage.removeItem('professional');
        }
    }

    public getNameUser(): string {
        const name = localStorage.getItem('userName') ?? '';
        return name;
    }

    public saveUser(name: string): void {
        localStorage.setItem('userName', name);
    }

    public deleteUser(): void {
        const storage = localStorage.getItem('userName');
        if (storage) {
            localStorage.removeItem('userName');
        }
    }
}
