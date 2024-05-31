import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpinnerComponent } from './loading.component';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private dialogRef: MatDialogRef<SpinnerComponent>;

    public constructor(private dialog: MatDialog) {}

    public show() {
        this.dialogRef = this.dialog.open(SpinnerComponent, {
            panelClass: 'transparent',
            disableClose: true,
        });
    }

    public hide() {
        this.dialogRef.close();
    }
}
