import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  baseUrl = environment.baseUrl

  constructor(private httpClient: HttpClient) {
  }

  getConfig(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/config/get`);
  }

  saveConfig(config: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/config/save`, config);
  }
}
