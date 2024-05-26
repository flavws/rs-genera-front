import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepManagerService } from '../services/step-manager.service';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
    @Input()
    public pathIcon: string;

    @Input()
    public alt: string;

    @Input()
    public previousBtn: boolean = false;

    @Output()
    public previousChange: EventEmitter<void> = new EventEmitter<void>();

    public constructor(public stepManagerService: StepManagerService) {}
}
