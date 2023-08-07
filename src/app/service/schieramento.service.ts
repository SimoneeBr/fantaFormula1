import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SchieramentoService {

  baseUrl = environment.baseUrl

  constructor(private httpClient: HttpClient) {
  };


  createSchieramento(value: any) {
    return this.httpClient.post(`${this.baseUrl}/schieramento/create`, value);
  }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/schieramento/getall`);
  }

  count(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/schieramento/countschier`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/schieramento/deleteall`);
  }
}


