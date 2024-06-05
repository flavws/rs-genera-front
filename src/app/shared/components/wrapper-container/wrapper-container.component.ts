import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-wrapper-container',
    templateUrl: './wrapper-container.component.html',
    styleUrls: ['./wrapper-container.component.scss'],
})
export class WrapperContainerComponent {
    @Input()
    public pathIcon: string;

    @Input()
    public alt: string;

    @Input()
    public previousBtn: boolean = false;

    @Output()
    public previousChange: EventEmitter<void> = new EventEmitter<void>();
}
