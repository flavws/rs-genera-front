import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro-profissional-success',
    templateUrl: './cadastro-profissional-success.component.html',
    styleUrls: ['./cadastro-profissional-success.component.scss'],
})
export class CadastroProfissionalSuccessComponent {
    public constructor(private router: Router) { }

    public goToLogin(): void {
        this.router.navigate(['/auth/login']);
    }
}
