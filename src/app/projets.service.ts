import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Projet } from './projet';

@Injectable({
  providedIn: 'root',
})
export class ProjetsService {


  projetUrlApi = 'https://daily-standup-campus.herokuapp.com/api/projects';

  httpLogUser={
    headers: new HttpHeaders ({
      'content-type':'application/json; charset=utf-8',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMjhhZWFhZjdhYjk0MDAxNDUxY2ZjNSIsImlhdCI6MTUyOTM5MjgxMH0.3_5Sbr6BKK5Y3uTTTGlMZ-eKx4anRjtcF-WR2U5_wuw'
    })
  }

/*httpheader  sert a l'authentification => Automatise le process d'accés users.*/


  constructor(private http: HttpClient) { }

getRecupData():Observable<Projet[]>{
  return this.http.get<Projet[]>(this.projetUrlApi,this.httpLogUser)
}

}
