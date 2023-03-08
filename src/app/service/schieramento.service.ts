import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SchieramentoService{

  baseUrl = environment.baseUrl
  constructor(private httpClient: HttpClient) {};



  updateSchieramento(value: any) {
    return this.httpClient.post(`${this.baseUrl}/schieramento/update`, value);
  }
  //backtick

  createSchieramento(value: any) {
    return this.httpClient.post(`${this.baseUrl}/schieramento/create`, value);
  }

  getByEmail(email: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/schieramento/get-email/${email}`);
  }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/schieramento/getall`);
  }

}
