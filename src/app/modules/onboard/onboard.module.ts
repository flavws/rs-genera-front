import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { OnboardRoutingModule } from './onboard-routing.module';
import { OnboardOneComponent } from './partials/onboard-one/onboard-one.component';
import { OnboardTwoComponent } from './partials/onboard-two/onboard-two.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MatIconModule } from '@angular/material/icon';
import { OnboardRegisterComponent } from './partials/onboard-register/onboard-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAnimationsComponent } from './partials/onboard-two/components/dialog-animations/dialog-animations.component';

@NgModule({
    imports: [
        CommonModule,
        OnboardRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule
    ],
    declarations: [
        OnboardOneComponent,
        OnboardTwoComponent,
        WrapperComponent,
        OnboardRegisterComponent,
        DialogAnimationsComponent,
    ],
    providers: [],
})
export class OnboardModule {}
