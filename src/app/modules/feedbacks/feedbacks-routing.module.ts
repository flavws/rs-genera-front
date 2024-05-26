import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorySuccessComponent } from './pages/history-success/history-success.component';

const routes: Routes = [
    {
        path: 'history-success',
        component: HistorySuccessComponent
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
