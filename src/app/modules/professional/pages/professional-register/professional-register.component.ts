import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';

@Component({
    selector: 'app-professional-register',
    templateUrl: './professional-register.component.html',
    styleUrls: ['./professional-register.component.scss'],
})
export class ProfessionalRegisterComponent implements OnInit {
    private platforms: string[] = [];

    public form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        // photo: new FormControl(''),
        occupationArea: new FormControl('', [Validators.required]),
        register_profissional: new FormControl(''),
        platforms: new FormControl(undefined, [Validators.required]),
    });

    public options: string[] = [
        'Psicologia',
        'Medicina',
        'Psiquiatria',
        'Artista'
    ];

    public filteredOptions: Observable<string[]>;

    public constructor(private router: Router) {}

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
            // Send data to the server
            console.log(this.form.value);
            this.router.navigate(['/feedbacks/register-profissional-success']);
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
