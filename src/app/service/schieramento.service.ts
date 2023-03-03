import {Injectable} from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SchieramentoService{

  protected basePath = 'schieramento';

  constructor(private httpClient: HttpClient) {};



  updateSchieramento(value: any) {
    return this.httpClient.post("http://195.231.61.7:8888/fantaf1/schieramento/update", value);
  }

  createSchieramento(value: any) {
    return this.httpClient.post("http://195.231.61.7:8888/fantaf1/schieramento/create", value);
  }

  getByEmail(email: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://195.231.61.7:8888/fantaf1/schieramento/get-email/${email}`);
  }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>("http://195.231.61.7:8888/fantaf1/schieramento/getall");
  }

}
