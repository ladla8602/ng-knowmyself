import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Category } from './category';
import { Index } from './index';
import { Article } from './article';
import { LatestArticle } from './latestarticle';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  // baseUrl = 'http://192.168.10.22/knowmyself/api/v1';
  baseUrl = 'http://192.168.1.208/knowmyself/api/v1';
  // baseUrl = 'http://192.168.43.123/knowmyself/api/v1';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCategory(): Observable<Category> {
    return this.http.get<Category>(this.baseUrl + '/get_category')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  getIndex(cat_id:any): Observable<Index> {
    return this.http.get<Index>(this.baseUrl + '/get_index/' + cat_id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  getArticle(index_id:any): Observable<Article> {
    return this.http.get<Article>(this.baseUrl + '/get_article/' + index_id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  getLatestArticle(): Observable<LatestArticle> {
    return this.http.get<LatestArticle>(this.baseUrl + '/latest_article/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
