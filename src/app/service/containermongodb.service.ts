import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Container} from "../model/container";
import {environment} from "../../environments/environment";

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
}
