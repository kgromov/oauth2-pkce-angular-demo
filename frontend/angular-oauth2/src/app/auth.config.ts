import {AuthConfig} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  clientId: 'angular-pkce-client',
  issuer: 'http://localhost:9000/auth/realms/oauth-demo',
  redirectUri: window.location.origin,
  responseType: 'code',
  scope: 'openid email profile offline_access',
  strictDiscoveryDocumentValidation: true
};


