import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CardSchedulingComponent } from './card-scheduling.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatChipsModule,
        MatButtonModule,
        MatIconModule,
    ],
    declarations: [CardSchedulingComponent],
    exports: [CardSchedulingComponent]
})
export class CardSchedulingModule {}
