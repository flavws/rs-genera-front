import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../shared/services/components/loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    public constructor(private loadingService: LoadingService) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.show();

        return next.handle(req).pipe(
            finalize(() => this.loadingService.hide())
        );
    }
}
