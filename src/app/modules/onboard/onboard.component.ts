import { Component, OnInit } from '@angular/core';
import { PartialEnums } from './enum/partials.enum';
import { StepManagerService } from './services/step-manager.service';

@Component({
    selector: 'app-onboard',
    templateUrl: './onboard.component.html',
    styleUrls: ['./onboard.component.scss'],
})
export class OnboardComponent implements OnInit {
    public partial = PartialEnums.one;

    public _partialEnum = PartialEnums;

    public constructor(public stepManagerService: StepManagerService) {}

    public ngOnInit(): void {
        this.stepManagerService._partialSubscriber$.subscribe((value) => {
            this.partial = value;
        });
    }
}
