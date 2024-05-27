import { Component } from '@angular/core';

@Component({
    selector: 'app-scheduling-user',
    templateUrl: './scheduling-user.component.html',
    styleUrls: ['./scheduling-user.component.scss'],
})
export class SchedulingUserComponent {
    public data = [
        {
            id: 1,
            name: 'Carlos Eduardo',
            occupation: 'Medicina',
            platforms: ['Zoom'],
        },
        {
            id: 2,
            name: 'Flavita',
            occupation: 'Fisiologia',
            platforms: ['Zoom', 'Meet', 'Teams'],
        },
        {
            id: 3,
            name: 'Felipe M.',
            occupation: 'Psicologico',
            platforms: ['Meet', 'Teams'],
        }
    ];

    public username = 'Carlos Eduardo';
}
