import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorySuccessComponent } from './pages/history-success/history-success.component';
import { FeedbacksWrapperComponent } from './wrapper/feedbacks-wrapper/feedbacks-wrapper.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FeedbacksRoutingModule } from './feedbacks-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FeedbacksRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
    ],
    declarations: [HistorySuccessComponent, FeedbacksWrapperComponent],
})
export class FeedbacksModule {}
