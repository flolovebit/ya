import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, OverviewArticle } from '../entities/overview';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OverviewService {
   url:string= 'https://61f12139072f86001749f044.mockapi.io/api/v1/animals/';
  constructor(private http: HttpClient) {}
  public getArticles(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url);
  }
  public getArticle(id:string): Observable<OverviewArticle> {
    return this.http.get<OverviewArticle>(this.url+'/'+ id);
  }
}
