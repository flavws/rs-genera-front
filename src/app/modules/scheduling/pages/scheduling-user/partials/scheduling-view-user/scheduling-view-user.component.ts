import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-scheduling-view-user',
    templateUrl: './scheduling-view-user.component.html',
    styleUrls: ['./scheduling-view-user.component.scss'],
})
export class SchedulingViewUserComponent {
    public data = {
        id: 1,
        name: 'Carlos Eduardo',
        occupation: 'Medicina',
        crmCrp: 'CRP-12345/PSI',
        platforms: ['Zoom', 'Meet'],
    };

    public constructor(private router: Router) {}

    public goToLogin(): void {
        this.router.navigate(['/auth/login']);
    }

    public goToInitial(): void {
        this.router.navigate(['/scheduling/scheduling-user']);
    }

    public goToResult(): void {
        this.router.navigate(['/scheduling/scheduling-user-result']);
    }
}
