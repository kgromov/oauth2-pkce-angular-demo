import {Component, OnInit} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-oauth2';
  public isLogged: boolean = false;

  constructor(private oauthService: OAuthService) {
  }


  ngOnInit(): void {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(): void {
    this.oauthService.initCodeFlow();
    this.isLogged = true;
  }

  logout(): void {
    this.oauthService.logOut();
    this.isLogged = false;
  }
}
