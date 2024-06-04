import { AfterContentInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SchedulingInterface } from 'src/app/shared/interfaces/scheduling.interface';
import { SnackbarService } from 'src/app/shared/services/components/snackbar/snackbar.service';
import { PersonService } from 'src/app/shared/services/http/person/person.service';
import { SchedulingService } from 'src/app/shared/services/http/scheduling/scheduling.service';

@Component({
    selector: 'app-scheduling-view-professional',
    templateUrl: './scheduling-view-professional.component.html',
    styleUrls: ['./scheduling-view-professional.component.scss'],
})
export class SchedulingViewProfessionalComponent implements AfterContentInit, OnDestroy {
    public data = {
        id: 1,
        name: 'Carlos Eduardo',
        history: `
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.

            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor.
        `,
    };

    public _destroy$: Subject<void> = new Subject<void>();

    public constructor(
        private router: Router,
        private activateRoute: ActivatedRoute,
        private personService: PersonService,
        private schedulingService: SchedulingService,
        private _snackBar: SnackbarService
    ) {}

    public ngAfterContentInit(): void {
        this.activateRoute.params.subscribe((params) => {
            if ('id' in params) {
                const id = params['id'];
                this.getDataPerson(id);
            }
        });
    }

    public ngOnDestroy(): void {
        if (this._destroy$.observed) {
            this._destroy$.next();
            this._destroy$.complete();
        }
    }

    public getDataPerson(id: number): void {
        if (id) {
            this.personService.get(id).pipe(takeUntil(this._destroy$)).subscribe((person) => {
                this.data = {
                    id: person[0].id as number,
                    name: person[0].name,
                    history: person[0].history as string
                };
            });
        } else {
            this._snackBar.open('Ops! Pessoa não pode ser encontrada.')
            setTimeout(() => {
                this.goToInitial();
            }, 800);
        }
    }

    public goToLogin(): void {
        this.router.navigate(['/auth/login']);
    }

    public goToInitial(): void {
        this.router.navigate(['/scheduling/scheduling-profissional']);
    }

    public goToResult(person_id: number): void {
        const data = localStorage.getItem('user');
        const user_info = data ? JSON.parse(data) : null;

        if (user_info) {
            const scheduling: SchedulingInterface = {
                persons_id: person_id,
                professionals_id: user_info.id,
                date_scheduling: new Date().toISOString()
            };
            this.schedulingService.add(scheduling).pipe(takeUntil(this._destroy$)).subscribe({
                next: () => {
                    this.router.navigate(['/scheduling/scheduling-profissional-result']);
                },
                error: (err) => {
                    this._snackBar.open(
                        `
                        ${err.error?.message || err.message || err.error || err}
                        `
                    );
                }
            })
        }
    }
}
