import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-scheduling-result-user',
    templateUrl: './scheduling-result-user.component.html',
    styleUrls: ['./scheduling-result-user.component.scss'],
})
export class SchedulingResultUserComponent {
    public constructor(private router: Router) {}

    public goToLogin(): void {
        this.router.navigate(['/auth/login']);
    }

    public goToInitial(): void {
        this.router.navigate(['/scheduling/scheduling-user']);
    }
}
