import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PersonInterface } from 'src/app/shared/interfaces/person.interface';
import { SnackbarService } from 'src/app/shared/services/components/snackbar/snackbar.service';
import { PersonService } from 'src/app/shared/services/http/person/person.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
    public form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        isAnonymous: new FormControl(false),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
    });

    public _subscriber$: Subject<void> = new Subject<void>();

    public constructor(
        private router: Router,
        private _snackBar: SnackbarService,
        private service: PersonService
    ) {}

    public ngOnDestroy(): void {
        if (this._subscriber$.observed) {
            this._subscriber$.next();
            this._subscriber$.complete();
        }
    }

    public sendData(): void {
        if (this.form.valid) {
            const data: PersonInterface = {
                name: this.form.get('name')?.value as string,
                isAnonymous: this.form.get('isAnonymous')?.value,
                email: this.form.get('email')?.value,
                password: this.form.get('password')?.value
            };
            this.service.add(data).pipe(takeUntil(this._subscriber$)).subscribe({
                next: () => {
                    this.router.navigate(['/feedbacks/register-success']);
                },
                error: (err) => {
                    this._snackBar.open(
                        `
                        ${err.error?.message || err?.message || err.error || err}
                        `
                    );
                }
            });
        } else {
            this._snackBar.open(
                `Formulário inválido.`
            );
        }
    }
}
