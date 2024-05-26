import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-feedbacks-wrapper',
    templateUrl: './feedbacks-wrapper.component.html',
    styleUrls: ['./feedbacks-wrapper.component.scss'],
})
export class FeedbacksWrapperComponent {
    @Input()
    public pathIcon: string;

    @Input()
    public alt: string;

    @Output()
    public previousChange: EventEmitter<void> = new EventEmitter<void>();
}
