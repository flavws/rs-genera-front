import { Component } from '@angular/core';

@Component({
    selector: 'app-spinner',
    template: '<mat-spinner></mat-spinner>',
    styles: [
        `
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100vw;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
        `,
    ],
})
export class SpinnerComponent {}
