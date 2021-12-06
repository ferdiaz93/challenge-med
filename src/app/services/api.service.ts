import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }
  
  sendContactInfo(params:any){
    return this.httpClient.post<any>("/test", params).pipe(map(data => data));
  }

  getWeatherInfo(url:string){
    return this.httpClient.get<any>(url).pipe(map(data => data))
  }
}
