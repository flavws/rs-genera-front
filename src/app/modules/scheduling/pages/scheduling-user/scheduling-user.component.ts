import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-scheduling-user',
    templateUrl: './scheduling-user.component.html',
    styleUrls: ['./scheduling-user.component.scss'],
})
export class SchedulingUserComponent {
    public data = [
        {
            id: 1,
            name: 'Carlos Eduardo',
            occupation: 'Medicina',
            platforms: ['Zoom'],
        },
        {
            id: 2,
            name: 'Flavita',
            occupation: 'Fisiologia',
            platforms: ['Zoom', 'Meet', 'Teams'],
        },
        {
            id: 3,
            name: 'Felipe M.',
            occupation: 'Psicologico',
            platforms: ['Meet', 'Teams'],
        }
    ];

    public username = 'Carlos Eduardo';

    public constructor(private router: Router) {}

    public goToLogin(): void {
        this.router.navigate(['/auth/login']);
    }

    public goToView(id: number): void {
        this.router.navigate(['/scheduling/scheduling-user', id]);
    }
}
