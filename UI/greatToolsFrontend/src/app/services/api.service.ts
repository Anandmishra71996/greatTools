import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BaseUrl = environment.BaseUrl;
  constructor(private http: HttpClient) {}

  getRequest(url: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.BaseUrl}/${url}`);
  }
  postRequest(url: string, payload: any) {
    return this.http.post(`${this.BaseUrl}/${url}`, payload);
  }
}
