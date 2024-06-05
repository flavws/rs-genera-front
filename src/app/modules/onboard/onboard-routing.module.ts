import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardOneComponent } from './partials/onboard-one/onboard-one.component';
import { OnboardTwoComponent } from './partials/onboard-two/onboard-two.component';
import { OnboardRegisterComponent } from './partials/onboard-register/onboard-register.component';

const routes: Routes = [
    {
        path: 'one',
        component: OnboardOneComponent
    },
    {
        path: 'two',
        component: OnboardTwoComponent
    },
    {
        path: 'register-history',
        component: OnboardRegisterComponent
    },
    {
        path: '',
        redirectTo: 'one',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OnboardRoutingModule {}
