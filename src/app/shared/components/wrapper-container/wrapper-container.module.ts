import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperContainerComponent } from './wrapper-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
    ],
    declarations: [WrapperContainerComponent],
    exports: [WrapperContainerComponent]
})
export class WrapperContainerModule {}
