import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-history-success',
    templateUrl: './history-success.component.html',
    styleUrls: ['./history-success.component.scss'],
})
export class HistorySuccessComponent {
    public constructor(private router: Router) {}

    public goToLogin(): void {
        this.router.navigate(['/onboarding/one']);
    }
}
