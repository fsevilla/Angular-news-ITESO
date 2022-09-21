import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {


  constructor(private http: HttpClient) { }

  getNoticias(): Observable<any> {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-08-21&sortBy=publishedAt&apiKey=';
   return this.http.get(url);
  }
}
