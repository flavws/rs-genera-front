import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/landpage/landpage.module').then((m) => m.LandpageModule),
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
        loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        redirectTo: '',
        path: '**',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
