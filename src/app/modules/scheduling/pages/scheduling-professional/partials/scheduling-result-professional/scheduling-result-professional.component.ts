import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-scheduling-result-professional',
    templateUrl: './scheduling-result-professional.component.html',
    styleUrls: ['./scheduling-result-professional.component.scss'],
})
export class SchedulingResultProfessionalComponent {
    public constructor(private router: Router) {}

    public goToLogin(): void {
        this.router.navigate(['/auth/login']);
    }

    public goToInitial(): void {
        this.router.navigate(['/scheduling/scheduling-profissional']);
    }
}
