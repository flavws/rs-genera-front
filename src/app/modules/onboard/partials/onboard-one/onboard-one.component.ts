import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-onboard-one',
    templateUrl: './onboard-one.component.html',
    styleUrls: ['./onboard-one.component.scss'],
})
export class OnboardOneComponent {
    @Output()
    public clickChange: EventEmitter<void> = new EventEmitter<void>();
}
