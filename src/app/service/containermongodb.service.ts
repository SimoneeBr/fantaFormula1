import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Container} from "../model/container";

@Injectable({
  providedIn: 'root'
})
export class ContainermongodbService {

  constructor(private httpClient: HttpClient) { }


  getAllMotori(): Observable<Container[]> {
    return this.httpClient.get<Container[]>("http://195.231.61.7:8888/fantaf1/container/getall/motori");
  }

  getAllPiloti(): Observable<Container[]> {
    return this.httpClient.get<Container[]>("http://195.231.61.7:8888/fantaf1/container/getall/piloti");
  }

  getAllCostruttori(): Observable<Container[]> {
    return this.httpClient.get<Container[]>("http://195.231.61.7:8888/fantaf1/container/getall/costruttori");
  }
}
