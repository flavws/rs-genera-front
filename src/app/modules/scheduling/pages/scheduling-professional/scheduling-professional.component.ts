import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PersonInterface } from 'src/app/shared/interfaces/person.interface';
import { AuthService } from 'src/app/shared/services/http/auth/auth.service';
import { PersonService } from 'src/app/shared/services/http/person/person.service';

@Component({
    selector: 'app-scheduling-professional',
    templateUrl: './scheduling-professional.component.html',
    styleUrls: ['./scheduling-professional.component.scss'],
})
export class SchedulingProfessionalComponent implements OnDestroy {
    public data: PersonInterface[] = [
        {
            id: 1,
            name: 'Carlos Eduardo',
            isAnonymous: false,
            history: `
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor.
            `,
        },
        {
            id: 2,
            name: 'Flavita',
            isAnonymous: false,
            history: `
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor.
            `,
        },
        {
            id: 3,
            name: 'Felipe M.',
            isAnonymous: false,
            history: `
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor.
            `,
        }
    ];

    public username = 'Desconhecido';

    public _destroy$: Subject<void> = new Subject<void>();

    public constructor(
        private router: Router,
        private authService: AuthService,
        private personService: PersonService,
        private cdRef: ChangeDetectorRef
    ) {}

    public ngAfterViewInit(): void {
        this.loadingNameUser();
        this.loadingPersons();
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

    public loadingPersons(): void {
        this.personService.getAll().pipe(takeUntil(this._destroy$)).subscribe((response) => {
            this.data = response;
        });
    }

    public goToLogin(): void {
        this.authService.logout().pipe(takeUntil(this._destroy$)).subscribe(() => {
            this.router.navigate(['/auth/login']);
        });
    }

    public goToView(id?: number): void {
        this.router.navigate(['/scheduling/scheduling-profissional', id]);
    }
}
