import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  public callGreeting(): Observable<string> {
    const headers: HttpHeaders =  new HttpHeaders().set('Content-Type', 'text/plain');
    return this.http.get<string>('http://localhost:8080/api/greeting', {headers, responseType: 'text'});
  }
}
