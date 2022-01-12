import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions ={
  headers :new HttpHeaders({'content-type':'application/json'})
}


export interface Mobile {
  altitude: number,
  longitude: number,
  Libelle:string,
  phone:number,


}
@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  constructor(private http:HttpClient) { }


  extractData(res:Response){
    let body=res;
    return body || {};
  }


  getComuseareat(lng):Observable<any>{
    return this.http.get("https://servipolice.xyz/public/api/mobile/"+lng,httpOptions).pipe(map(this.extractData));
  }

}
