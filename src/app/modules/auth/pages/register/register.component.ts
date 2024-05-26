import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
    public form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        isAnonymous: new FormControl(false),
        photo: new FormControl(''),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    public constructor(private router: Router) {}

    public sendData(): void {
        if (this.form.valid) {
            // Send data to the server
            this.router.navigate(['/feedbacks/register-success']);
        }
    }
}
