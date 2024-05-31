import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/components/snackbar/snackbar.service';
import { AuthService } from 'src/app/shared/services/http/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
    public form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });

    public _destroy$: Subject<void> = new Subject<void>();

    public constructor(
        private router: Router,
        private service: AuthService,
        private _snackBar: SnackbarService,
    ) {}

    public ngOnDestroy(): void {
        if (this._destroy$.observed) {
            this._destroy$.next();
            this._destroy$.complete();
        }
    }

    public sendData(): void {
        if (this.form.valid) {
            this.service.login(this.form.value)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: () => {
                    this.router.navigate(['/scheduling']);
                },
                error: (err) => {
                    this._snackBar.open(
                        `
                        ${err.error?.message || err?.message || err.error || err}
                        `
                    );
                }
            });
        }
    }
}
