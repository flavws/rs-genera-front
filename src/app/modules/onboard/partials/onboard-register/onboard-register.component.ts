import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-onboard-register',
    templateUrl: './onboard-register.component.html',
    styleUrls: ['./onboard-register.component.scss'],
})
export class OnboardRegisterComponent {
    public form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        isAnonymous: new FormControl(false),
        email: new FormControl('', [Validators.required]),
        history: new FormControl('', [Validators.required]),
    });

    public constructor(private router: Router) {}

    public goToBackUrl(): void {
        this.router.navigate(['/onboarding/two']);
    }

    public sendData(): void {
        if (this.form.valid) {
            // Send data to the server
            this.router.navigate(['/feedbacks/history-success']);
        }
    }
}
