import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
 export class DataTimeService {

  private baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }


  getDataTime(): Observable<any>{
    return this.http.get(`${this.baseUrl}/datatime/list`)
  }

  createDataTime(data: Date){
    return this.http.post(`${this.baseUrl}/datatime/save`, {time: data});
  }

  updateDataTime(value: any){
    return this.http.post(`${this.baseUrl}/datatime/update`, value)
  }




}
