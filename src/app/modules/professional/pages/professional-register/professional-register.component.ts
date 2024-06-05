import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { ProfissionalInterface } from 'src/app/shared/interfaces/profissional.interface';
import { SnackbarService } from 'src/app/shared/services/components/snackbar/snackbar.service';
import { ProfissionalService } from 'src/app/shared/services/http/profissional/profissional.service';

@Component({
    selector: 'app-professional-register',
    templateUrl: './professional-register.component.html',
    styleUrls: ['./professional-register.component.scss'],
})
export class ProfessionalRegisterComponent implements OnInit, OnDestroy {
    private platforms: string[] = [];

    public form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        occupationArea: new FormControl('', [Validators.required]),
        register_profissional: new FormControl(''),
        platforms: new FormControl(undefined, [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
    });

    public options: string[] = [
        'Psicologia',
        'Medicina',
        'Psiquiatria',
        'Artista'
    ];

    public filteredOptions: Observable<string[]>;

    public _subscriber$: Subject<void> = new Subject<void>();

    public constructor(
        private router: Router,
        private _snackBar: SnackbarService,
        private service: ProfissionalService
    ) {}

    public ngOnDestroy(): void {
        if (this._subscriber$.observed) {
            this._subscriber$.next();
            this._subscriber$.complete();
        }
    }

    public ngOnInit() {
        this.filteredOptions = this.form.get('occupationArea')?.valueChanges.pipe(
            startWith(''),
            map(occupation => {
                const name = typeof occupation === 'string' ? occupation : occupation;
                return name ? this._filter(name as string) : this.options.slice();
            }),
        ) as Observable<string[]>;
    }

    public displayFn(occupation: string): string {
        return occupation ? occupation : '';
    }

    public getPlatforms(value: string, isChecked: MatCheckboxChange): void {
        const verifyInPlatform = this.itIsOnPlataform(value);
        if (verifyInPlatform) {
            this.removeInPlataform(value);
            return;
        }
        this.insertInPlataform(value);
    }

    public itIsOnPlataform(platform: string): boolean {
        return this.platforms.some((p) => p === platform);
    }

    public goToInitial(): void {
        this.router.navigate(['/onboarding']);
    }

    public sendData(): void {
        if (this.form.valid) {
            const data: ProfissionalInterface = {
                name: this.form.get('name')?.value as string,
                occupation_area: this.form.get('occupationArea')?.value,
                professional_record: this.form.get('register_profissional')?.value,
                platforms: this.form.get('platforms')?.value,
                email: this.form.get('email')?.value,
                password: this.form.get('password')?.value,
            }
            this.service.add(data).pipe(takeUntil(this._subscriber$)).subscribe({
                next: () => {
                    this.router.navigate(['/feedbacks/register-profissional-success']);
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

    private _filter(name: string): string[] {
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    private insertInPlataform(platform: string): void {
        this.platforms.push(platform);
        this.form.get('platforms')?.setValue(this.platforms);
    }

    private removeInPlataform(platform: string): void {
        const index = this.platforms.indexOf(platform);
        if (index > -1) {
            this.platforms.splice(index, 1);
        }
        this.form.get('platforms')?.setValue(this.platforms);
    }
}
