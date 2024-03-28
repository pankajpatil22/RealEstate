import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseURl =  'https://localhost:44376/'
  constructor(    private http: HttpClient,
    private route: Router,) { }


}
