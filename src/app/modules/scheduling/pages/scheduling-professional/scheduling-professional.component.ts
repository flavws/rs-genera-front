import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-scheduling-professional',
    templateUrl: './scheduling-professional.component.html',
    styleUrls: ['./scheduling-professional.component.scss'],
})
export class SchedulingProfessionalComponent {
    public data = [
        {
            id: 1,
            name: 'Carlos Eduardo',
            history: `
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor.
            `,
        },
        {
            id: 2,
            name: 'Flavita',
            history: `
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor.
            `,
        },
        {
            id: 3,
            name: 'Felipe M.',
            history: `
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor.
            `,
        }
    ];

    public username = 'Carlos Eduardo';

    public constructor(private router: Router) {}

    public goToLogin(): void {
        this.router.navigate(['/auth/login']);
    }

    public goToView(id: number): void {
        this.router.navigate(['/scheduling/scheduling-profissional', id]);
    }
}
