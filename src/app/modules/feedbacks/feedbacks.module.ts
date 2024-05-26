import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorySuccessComponent } from './pages/history-success/history-success.component';
import { FeedbacksWrapperComponent } from './wrapper/feedbacks-wrapper/feedbacks-wrapper.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FeedbacksRoutingModule } from './feedbacks-routing.module';
import { CadastroSuccessComponent } from './pages/cadastro-success/cadastro-success.component';
import { CadastroProfissionalSuccessComponent } from './pages/cadastro-profissional-success/cadastro-profissional-success.component';

@NgModule({
    imports: [
        CommonModule,
        FeedbacksRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
    ],
    declarations: [HistorySuccessComponent, FeedbacksWrapperComponent, CadastroSuccessComponent, CadastroProfissionalSuccessComponent],
})
export class FeedbacksModule {}
