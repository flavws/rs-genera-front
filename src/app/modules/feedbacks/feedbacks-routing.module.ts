import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorySuccessComponent } from './pages/history-success/history-success.component';
import { CadastroSuccessComponent } from './pages/cadastro-success/cadastro-success.component';
import { CadastroProfissionalSuccessComponent } from './pages/cadastro-profissional-success/cadastro-profissional-success.component';

const routes: Routes = [
    {
        path: 'history-success',
        component: HistorySuccessComponent
    },
    {
        path: 'register-success',
        component: CadastroSuccessComponent
    },
    {
        path: 'register-profissional-success',
        component: CadastroProfissionalSuccessComponent
    },
    {
        path: '',
        redirectTo: 'history-success',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FeedbacksRoutingModule {}
