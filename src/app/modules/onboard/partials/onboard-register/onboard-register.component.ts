import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-onboard-register',
    templateUrl: './onboard-register.component.html',
    styleUrls: ['./onboard-register.component.scss'],
})
export class OnboardRegisterComponent {
    @Output()
    public clickChange: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public previousChange: EventEmitter<void> = new EventEmitter<void>();

    public form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        isAnonymous: new FormControl(false),
        email: new FormControl('', [Validators.required]),
        history: new FormControl('', [Validators.required]),
    });

    public constructor(private router: Router) {}

    public sendData(): void {
        if (this.form.valid) {
            // Send data to the server
            this.clickChange.emit();
            this.router.navigate(['/feedbacks/history-success']);
        }
    }
}
