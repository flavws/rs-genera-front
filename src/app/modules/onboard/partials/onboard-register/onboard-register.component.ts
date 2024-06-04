import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { HistoryInterface } from 'src/app/shared/interfaces/history.interface';
import { SnackbarService } from 'src/app/shared/services/components/snackbar/snackbar.service';
import { HistoryService } from 'src/app/shared/services/http/history/history.service';

@Component({
    selector: 'app-onboard-register',
    templateUrl: './onboard-register.component.html',
    styleUrls: ['./onboard-register.component.scss'],
})
export class OnboardRegisterComponent implements OnDestroy {
    public form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        isAnonymous: new FormControl(false),
        email: new FormControl('', [Validators.required, Validators.email]),
        history: new FormControl('', [Validators.required]),
    });

    public _subscriber$: Subject<void> = new Subject<void>();

    public constructor(
        private router: Router,
        private _snackBar: SnackbarService,
        private service: HistoryService
    ) {}

    public goToBackUrl(): void {
        this.router.navigate(['/onboarding/two']);
    }

    public ngOnDestroy(): void {
        if (this._subscriber$.observed) {
            this._subscriber$.next();
            this._subscriber$.complete();
        }
    }

    public sendData(): void {
        if (this.form.valid) {
            const data: HistoryInterface = {
                history: this.form.get('history')?.value,
                name: this.form.get('name')?.value as string,
                anonymous: this.form.get('isAnonymous')?.value,
                email: this.form.get('email')?.value
            }
            this.service.add(data).pipe(takeUntil(this._subscriber$)).subscribe({
                next: (response) => {
                    this.router.navigate(['/feedbacks/history-success']);
                },
                error: (err) => {
                    this._snackBar.open(
                        `
                        ${err.error?.message || err.message || err.error || err}
                        `
                    );
                },
            });
        } else {
            this._snackBar.open(
                `Formulário inválido.`
            );
        }
    }
}
