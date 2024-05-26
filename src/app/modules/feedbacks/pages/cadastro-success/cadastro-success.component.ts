import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro-success',
    templateUrl: './cadastro-success.component.html',
    styleUrls: ['./cadastro-success.component.scss'],
})
export class CadastroSuccessComponent {

    public constructor(private router: Router) { }

    public goToLogin(): void {
        this.router.navigate(['/auth/login']);
    }
}
