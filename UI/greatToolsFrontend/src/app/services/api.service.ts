import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
BaseUrl=environment.BaseUrl
  constructor(private http:HttpClient) { }

  getRequest(url:string){
  return  this.http.get(`${this.BaseUrl}/${url}`)
  }
  postRequest(url:string,payload:any){
    return  this.http.post(`${this.BaseUrl}/${url}`,payload)
    }
}
