import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProfissionalInterface } from 'src/app/shared/interfaces/profissional.interface';
import { AuthService } from 'src/app/shared/services/http/auth/auth.service';
import { ProfissionalService } from 'src/app/shared/services/http/profissional/profissional.service';

@Component({
    selector: 'app-scheduling-user',
    templateUrl: './scheduling-user.component.html',
    styleUrls: ['./scheduling-user.component.scss'],
})
export class SchedulingUserComponent implements OnDestroy, AfterViewInit {
    public data: ProfissionalInterface[] = [
        {
            id: 1,
            name: 'Carlos Eduardo',
            occupation_area: 'Medicina',
            platforms: ['Zoom'],
            professional_record: '',
        },
        {
            id: 2,
            name: 'Flavita',
            occupation_area: 'Fisiologia',
            platforms: ['Zoom', 'Meet', 'Teams'],
        },
        {
            id: 3,
            name: 'Felipe M.',
            occupation_area: 'Psicologico',
            platforms: ['Meet', 'Teams'],
        }
    ];

    public username = 'Desconhecido';

    public _destroy$: Subject<void> = new Subject<void>();

    public constructor(
        private router: Router,
        private authService: AuthService,
        private professionalService: ProfissionalService,
        private cdRef: ChangeDetectorRef
    ) {}

    public ngAfterViewInit(): void {
        this.loadingNameUser();
        this.loadingProfessionals();
    }

    public ngOnDestroy(): void {
        if (this._destroy$.observed) {
            this._destroy$.next();
            this._destroy$.complete();
        }
    }

    public loadingNameUser(): void {
        const data = localStorage.getItem('user') ?? null;
        if (data) {
            this.username = JSON.parse(data).name;
            this.cdRef.detectChanges();
        }
    }

    public loadingProfessionals(): void {
        this.professionalService.getAll().pipe(takeUntil(this._destroy$)).subscribe((response) => {
            this.data = response;
        });
    }

    public goToLogin(): void {
        this.authService.logout().pipe(takeUntil(this._destroy$)).subscribe(() => {
            this.router.navigate(['/auth/login']);
        });
    }

    public goToView(id?: number): void {
        this.router.navigate(['/scheduling/scheduling-user', id]);
    }
}
