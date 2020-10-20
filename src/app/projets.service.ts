import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { HttpHeaders } from '@angular/common/http';*/

import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Projet } from './projet';

@Injectable({
  providedIn: 'root',
})
export class configService {

  projetUrlApi = 'https://daily-standup-campus.herokuapp.com/api/projects';



  constructor(private http: HttpClient) { }

}
