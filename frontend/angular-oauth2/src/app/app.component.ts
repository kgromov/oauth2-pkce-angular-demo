import {Component, OnInit} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './auth.config';
import {AppServiceService} from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public greeting: string;
  public accessToken: string;
  public idToken: string;
  public isLogged: boolean = false;

  constructor(private oauthService: OAuthService, private appService: AppServiceService) {
  }

  ngOnInit(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.appService.callGreeting().subscribe(greeting => {
      console.log('Greeting: ', greeting);
      this.greeting = greeting;
    });
  }

  login(): void {
    this.oauthService.initCodeFlow();
    this.isLogged = true;
  }

  logout(): void {
    // this.accessToken = this.oauthService.getAccessToken();
    // this.idToken = this.oauthService.getIdToken();
    this.oauthService.logOut();
    this.isLogged = false;
    this.greeting = '';
  }
}
