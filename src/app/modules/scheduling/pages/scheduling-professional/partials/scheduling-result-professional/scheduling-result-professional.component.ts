import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/shared/services/http/auth/auth.service';
import { StorageService } from 'src/app/shared/services/utils/storage.service';

@Component({
    selector: 'app-scheduling-result-professional',
    templateUrl: './scheduling-result-professional.component.html',
    styleUrls: ['./scheduling-result-professional.component.scss'],
})
export class SchedulingResultProfessionalComponent implements AfterViewInit, OnDestroy {
    public user: string;

    public _destroy$: Subject<void> = new Subject<void>();

    public constructor(
        private router: Router,
        private storageService: StorageService,
        private cdRef: ChangeDetectorRef,
        private authService: AuthService,
    ) {}

    public ngOnDestroy(): void {
        if (this._destroy$.observed) {
            this._destroy$.next();
            this._destroy$.complete();
        }
    }

    public ngAfterViewInit(): void {
        this.user = this.storageService.getNameUser();
        this.cdRef.detectChanges();
    }

    public goToLogin(): void {
        this.authService.logout().pipe(takeUntil(this._destroy$)).subscribe(() => {
            this.router.navigate(['/auth/login']);
        });
    }

    public goToInitial(): void {
        this.storageService.deleteUser();
        this.router.navigate(['/scheduling/scheduling-profissional']);
    }
}
