import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-scheduling-explorer',
    templateUrl: './scheduling-explorer.component.html',
    styleUrls: ['./scheduling-explorer.component.scss'],
})
export class SchedulingExplorerComponent {
    @Input()
    public title: string;

    @Input()
    public description: string;
}
