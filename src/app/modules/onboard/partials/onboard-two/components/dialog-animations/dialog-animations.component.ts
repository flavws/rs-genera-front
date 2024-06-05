import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dialog-animations',
    templateUrl: './dialog-animations.component.html',
    styleUrls: ['./dialog-animations.component.scss'],
})
export class DialogAnimationsComponent {

    public constructor(private router: Router) {}

    public goToRegister(): void {
        this.router.navigate(['/auth/register']);
    }
}
