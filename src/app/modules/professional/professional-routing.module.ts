import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalRegisterComponent } from './pages/professional-register/professional-register.component';

const routes: Routes = [
    {
        path: 'register',
        component: ProfessionalRegisterComponent
    },
    {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfessionalRoutingModule {}
