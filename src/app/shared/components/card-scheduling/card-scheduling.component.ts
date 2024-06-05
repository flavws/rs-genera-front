import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-card-scheduling',
    templateUrl: './card-scheduling.component.html',
    styleUrls: ['./card-scheduling.component.scss'],
})
export class CardSchedulingComponent {
    @Input()
    public id: string | number;

    @Input()
    public title: string;

    @Input()
    public description: string;

    @Input()
    public txtButton: string = 'Agendar atendimento';

    @Input()
    public platforms: string[];

    @Output()
    public clickChanges: EventEmitter<string | number> = new EventEmitter<string | number>();
}
