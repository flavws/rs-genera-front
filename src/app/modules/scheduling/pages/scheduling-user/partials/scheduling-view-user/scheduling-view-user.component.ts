import { AfterContentInit, AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SchedulingInterface } from 'src/app/shared/interfaces/scheduling.interface';
import { SnackbarService } from 'src/app/shared/services/components/snackbar/snackbar.service';
import { ProfissionalService } from 'src/app/shared/services/http/profissional/profissional.service';
import { SchedulingService } from 'src/app/shared/services/http/scheduling/scheduling.service';

@Component({
    selector: 'app-scheduling-view-user',
    templateUrl: './scheduling-view-user.component.html',
    styleUrls: ['./scheduling-view-user.component.scss'],
})
export class SchedulingViewUserComponent implements AfterContentInit, OnDestroy {
    public data = {
        id: 1,
        name: 'Carlos Eduardo',
        occupation: 'Medicina',
        crmCrp: 'CRP-12345/PSI',
        platforms: ['Zoom', 'Meet'],
    };

    public _destroy$: Subject<void> = new Subject<void>();

    public constructor(
        private router: Router,
        private activateRoute: ActivatedRoute,
        private professionalService: ProfissionalService,
        private schedulingService: SchedulingService,
        private _snackBar: SnackbarService
    ) {}

    public ngAfterContentInit(): void {
        this.activateRoute.params.subscribe((params) => {
            if ('id' in params) {
                const id = params['id'];
                this.getDataProfessional(id);
            }
        });
    }

    public ngOnDestroy(): void {
        if (this._destroy$.observed) {
            this._destroy$.next();
            this._destroy$.complete();
        }
    }

    public getDataProfessional(id: number): void {
        if (id) {
            this.professionalService.get(id).pipe(takeUntil(this._destroy$)).subscribe((professional) => {
                this.data = {
                    id: professional[0].id as number,
                    name: professional[0].name,
                    occupation: professional[0].occupation_area,
                    crmCrp: professional[0].professional_record as string,
                    platforms: professional[0].platforms
                };
            });
        } else {
            this._snackBar.open('Ops! Profissional não pode ser encontrado.')
            setTimeout(() => {
                this.goToInitial();
            }, 800);
        }
    }

    public goToLogin(): void {
        this.router.navigate(['/auth/login']);
    }

    public goToInitial(): void {
        this.router.navigate(['/scheduling/scheduling-user']);
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
                    this.router.navigate(['/scheduling/scheduling-user-result']);
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
