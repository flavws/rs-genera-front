import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardComponent } from './onboard.component';

const routes: Routes = [
    {
        path: '',
        component: OnboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OnboardRoutingModule {}
