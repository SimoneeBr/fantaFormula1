import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Container} from "../model/container";
import {environment} from "../../environments/environment";
import {Lega} from "../model/lega";

@Injectable({
  providedIn: 'root'
})
export class ContainermongodbService {

  baseUrl = environment.baseUrl

  constructor(private httpClient: HttpClient) { }

  getAllMotori(): Observable<Container[]> {
    return this.httpClient.get<Container[]>(`${this.baseUrl}/container/getall/motori`);
  }

  getAllPiloti(): Observable<Container[]> {
    return this.httpClient.get<Container[]>(`${this.baseUrl}/container/getall/piloti`);
  }

  getAllCostruttori(): Observable<Container[]> {
    return this.httpClient.get<Container[]>(`${this.baseUrl}/container/getall/costruttori`);
  }
  updateContainer(container: Container ): Observable<Container> {
    return this.httpClient.post<Container>(`${this.baseUrl}/container/update`, container);
  }

  getAllLeghe(): Observable<Lega[]> {
    return this.httpClient.get<Lega[]>(`${this.baseUrl}/container/getall/leagues`);
  }

  getAllLegheConfig(): Observable<Lega[]> {
    return this.httpClient.get<Lega[]>(`${this.baseUrl}/container/getall/leagues-config`);
  }


  updateLega(lega: Lega) {
    return this.httpClient.post<Lega>(`${this.baseUrl}/container/updateLega`, lega);
  }
}
