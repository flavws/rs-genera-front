import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ProfessionalGuard implements CanActivate {
    public constructor(private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const user_info = JSON.parse(localStorage.getItem('user') as string);
        if (user_info && user_info.type_user === 'professional') {
            return true;
        } else {
            this.router.navigate(['/scheduling/scheduling-user']);
            return false;
        }
    }
}
