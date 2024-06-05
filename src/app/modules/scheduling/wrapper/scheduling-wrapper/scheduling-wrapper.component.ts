import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-scheduling-wrapper',
    templateUrl: './scheduling-wrapper.component.html',
    styleUrls: ['./scheduling-wrapper.component.scss'],
})
export class SchedulingWrapperComponent {
    @Input()
    public pathIcon: string;

    @Input()
    public alt: string;

    @Input()
    public previousBtn: boolean = false;

    @Output()
    public previousChange: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public logoutChange: EventEmitter<void> = new EventEmitter<void>();
}
