import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingRoutingModule } from './scheduling-routing.module';
import { SchedulingWrapperComponent } from './wrapper/scheduling-wrapper/scheduling-wrapper.component';
import { SchedulingUserComponent } from './pages/scheduling-user/scheduling-user.component';
import { SchedulingProfessionalComponent } from './pages/scheduling-professional/scheduling-professional.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SchedulingExplorerComponent } from './wrapper/scheduling-explorer/scheduling-explorer.component';
import { CardSchedulingModule } from 'src/app/shared/components/card-scheduling/card-scheduling.module';
import { SchedulingViewUserComponent } from './pages/scheduling-user/partials/scheduling-view-user/scheduling-view-user.component';
import { MatChipsModule } from '@angular/material/chips';
import { SchedulingResultUserComponent } from './pages/scheduling-user/partials/scheduling-result-user/scheduling-result-user.component';

@NgModule({
    imports: [
        CommonModule,
        SchedulingRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        CardSchedulingModule,
        MatChipsModule
    ],
    declarations: [
        SchedulingWrapperComponent,
        SchedulingUserComponent,
        SchedulingProfessionalComponent,
        SchedulingExplorerComponent,
        SchedulingViewUserComponent,
        SchedulingResultUserComponent,
    ],
})
export class SchedulingModule {}
