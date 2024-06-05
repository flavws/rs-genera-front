import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalRegisterComponent } from './pages/professional-register/professional-register.component';
import { WrapperContainerModule } from 'src/app/shared/components/wrapper-container/wrapper-container.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
    imports: [
        CommonModule,
        ProfessionalRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        WrapperContainerModule
    ],
    declarations: [ProfessionalRegisterComponent],
})
export class ProfessionalModule {}
