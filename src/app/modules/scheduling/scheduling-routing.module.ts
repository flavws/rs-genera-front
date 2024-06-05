import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulingUserComponent } from './pages/scheduling-user/scheduling-user.component';
import { SchedulingProfessionalComponent } from './pages/scheduling-professional/scheduling-professional.component';
import { SchedulingViewUserComponent } from './pages/scheduling-user/partials/scheduling-view-user/scheduling-view-user.component';
import { SchedulingResultUserComponent } from './pages/scheduling-user/partials/scheduling-result-user/scheduling-result-user.component';
import { SchedulingViewProfessionalComponent } from './pages/scheduling-professional/partials/scheduling-view-professional/scheduling-view-professional.component';
import { SchedulingResultProfessionalComponent } from './pages/scheduling-professional/partials/scheduling-result-professional/scheduling-result-professional.component';
import { UserGuard } from 'src/app/guards/user.guard';
import { ProfessionalGuard } from 'src/app/guards/professional.guard';

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
        canActivate: [UserGuard],
    },
    {
        path: 'scheduling-user-result',
        component: SchedulingResultUserComponent,
        canActivate: [UserGuard],
    },
    {
        path: 'scheduling-profissional',
        children: [
            {
                path: '',
                component: SchedulingProfessionalComponent
            },
            {
                path: ':id',
                component: SchedulingViewProfessionalComponent
            },
        ],
        canActivate: [ProfessionalGuard],
    },
    {
        path: 'scheduling-profissional-result',
        component: SchedulingResultProfessionalComponent,
        canActivate: [ProfessionalGuard],
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
