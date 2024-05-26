import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandpageComponent } from './landpage.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

const routes: Routes = [
    {
        path: '',
        component: LandpageComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        RouterModule,
        MatSidenavModule
    ],
    declarations: [LandpageComponent],
})
export class LandpageModule {}
