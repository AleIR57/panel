import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './servicio/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'panelAngular';
  loginbtn:boolean;
logoutbtn:boolean;

constructor(private dataService: AuthService, private router: Router) {
dataService.getLoggedInName.subscribe(name => this.changeName(name));
if(this.dataService.isLoggedIn())
{
console.log("loggedin");
this.loginbtn=false;
this.logoutbtn=true
}
else{
this.loginbtn=true;
this.logoutbtn=false
}

}

private changeName(name: boolean): void {
this.logoutbtn = name;
this.loginbtn = !name;
}
logout()
{
this.dataService.deleteToken();
window.location.href = window.location.href;
this.router.navigateByUrl("/login");
}
}
