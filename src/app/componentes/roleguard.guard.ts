import { AuthService } from './../servicio/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';

@Injectable({
providedIn: 'root'
})

export class RoleguardGuard implements CanActivate {
constructor(private dataService: AuthService,private router: Router ) {}
canActivate(
router: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean {
const routeurl: string = state.url;
return this.isAdmin(routeurl)!;
}

isAdmin(routeurl: string) {

if (this.dataService.isAdmin()) {
return true;

}
else{
    this.dataService.redirectUrl = routeurl;
this.router.navigate(['/listar-venta'], {queryParams: { returnUrl: routeurl }} );
return false;
}




}
}