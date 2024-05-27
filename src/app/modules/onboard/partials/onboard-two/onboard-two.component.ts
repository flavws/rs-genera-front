import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogAnimationsComponent } from './components/dialog-animations/dialog-animations.component';

@Component({
    selector: 'app-onboard-two',
    templateUrl: './onboard-two.component.html',
    styleUrls: ['./onboard-two.component.scss'],
})
export class OnboardTwoComponent {

    public constructor(public dialog: MatDialog, private router: Router) {}

    public openDialog(
        enterAnimationDuration: string,
        exitAnimationDuration: string
    ): void {
        this.dialog.open(DialogAnimationsComponent, {
            width: '350px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }

    public goToBackUrl(): void {
        this.router.navigate(['/onboarding/one']);
    }
}
