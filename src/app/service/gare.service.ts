import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Gare} from "../model/gare";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GareService {

  private baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }



  getGareList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllGare`);
  }

  getgaraListByNomeGara(nome: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllBy/nomeGara/${nome}`);
  }

  deleteGara(id: string)  {
    return this.http.delete(`${this.baseUrl}/deleteById/${id}`);
  }

  creaGara(gara: Gare): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, gara);

  }


  getGara(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/gara/${id}`);
  }

  updateGara(id: string, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/updateGara/${id}`, value);
  }



}
