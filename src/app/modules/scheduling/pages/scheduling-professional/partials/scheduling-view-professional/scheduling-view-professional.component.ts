import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-scheduling-view-professional',
    templateUrl: './scheduling-view-professional.component.html',
    styleUrls: ['./scheduling-view-professional.component.scss'],
})
export class SchedulingViewProfessionalComponent {
    public data = {
        id: 1,
        name: 'Carlos Eduardo',
        history: `
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.
        `,
    };

    public constructor(private router: Router) {}

    public goToLogin(): void {
        this.router.navigate(['/auth/login']);
    }

    public goToInitial(): void {
        this.router.navigate(['/scheduling/scheduling-professional']);
    }

    public goToResult(): void {
        this.router.navigate(['/scheduling/scheduling-profissional-result']);
    }
}
