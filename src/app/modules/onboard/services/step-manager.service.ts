import { Injectable } from '@angular/core';
import { PartialEnums } from '../enum/partials.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StepManagerService {
    private partial = PartialEnums.one;

    public _partialSubscriber$ = new BehaviorSubject<PartialEnums>(this.partial);

    public constructor() {}

    public next(): void {
        if (this.partial === PartialEnums.one) {
            this.partial = PartialEnums.two;
            this._partialSubscriber$.next(this.partial);
            return;
        }

        if (this.partial === PartialEnums.two) {
            this.partial = PartialEnums.three;
            this._partialSubscriber$.next(this.partial);
            return;
        }
    }

    public previous(): void {
        if (this.partial === PartialEnums.two) {
            this.partial = PartialEnums.one;
            this._partialSubscriber$.next(this.partial);
            return;
        }

        if (this.partial === PartialEnums.three) {
            this.partial = PartialEnums.two;
            this._partialSubscriber$.next(this.partial);
            return;
        }
    }
}
