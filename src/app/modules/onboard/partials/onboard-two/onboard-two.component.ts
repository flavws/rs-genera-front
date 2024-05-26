import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogAnimationsComponent } from './components/dialog-animations/dialog-animations.component';

@Component({
    selector: 'app-onboard-two',
    templateUrl: './onboard-two.component.html',
    styleUrls: ['./onboard-two.component.scss'],
})
export class OnboardTwoComponent {
    @Output()
    public clickChange: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public previousChange: EventEmitter<void> = new EventEmitter<void>();

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
}
