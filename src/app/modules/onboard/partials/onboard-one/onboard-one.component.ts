import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-onboard-one',
    templateUrl: './onboard-one.component.html',
    styleUrls: ['./onboard-one.component.scss'],
})
export class OnboardOneComponent {
    @Output()
    public clickChange: EventEmitter<void> = new EventEmitter<void>();

    public constructor(private router: Router) {}

    public goToRegisterProfessional(): void {
        this.router.navigate(['/professional/register']);
    }
}
