import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'onboarding',
        pathMatch: 'full',
    },
    {
        path: 'onboarding',
        loadChildren: () => import('./modules/onboard/onboard.module').then((m) => m.OnboardModule),
    },
    {
        path: 'feedbacks',
        loadChildren: () => import('./modules/feedbacks/feedbacks.module').then((m) => m.FeedbacksModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: 'professional',
        loadChildren: () => import('./modules/professional/professional.module').then((m) => m.ProfessionalModule),
    },
    {
        path: 'scheduling',
        loadChildren: () => import('./modules/scheduling/scheduling.module').then((m) => m.SchedulingModule),
        canActivate: [AuthGuard],
    },
    {
        redirectTo: 'onboarding',
        path: '**',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
