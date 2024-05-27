import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulingUserComponent } from './pages/scheduling-user/scheduling-user.component';
import { SchedulingProfessionalComponent } from './pages/scheduling-professional/scheduling-professional.component';
import { SchedulingViewUserComponent } from './pages/scheduling-user/partials/scheduling-view-user/scheduling-view-user.component';
import { SchedulingResultUserComponent } from './pages/scheduling-user/partials/scheduling-result-user/scheduling-result-user.component';

const routes: Routes = [
    {
        path: 'scheduling-user',
        children: [
            {
                path: '',
                component: SchedulingUserComponent
            },
            {
                path: ':id',
                component: SchedulingViewUserComponent
            },
        ],
    },
    {
        path: 'scheduling-user-result',
        component: SchedulingResultUserComponent
    },
    {
        path: 'scheduling-profissional',
        component: SchedulingProfessionalComponent
    },
    {
        path: '',
        redirectTo: 'scheduling-user',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SchedulingRoutingModule {}
