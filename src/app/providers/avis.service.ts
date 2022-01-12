import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {apiKey} from "../../app/apiurls/serverurls.js";
import {map} from  'rxjs/operators';
import { Observable } from 'rxjs';

const httpOptions ={
  headers :new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor(private http:HttpClient) { }


  extractData(res:Response){
    let body=res;
    return body || {};
  }


  getAvis(lng):Observable<any>{
    return this.http.get("https://servipolice.xyz/public/api/avis/"+lng,httpOptions).pipe(map(this.extractData));
  }

  getAvi(id){
    return this.http.get("https://servipolice.xyz/public/api/avis/id",httpOptions).pipe(map(this.extractData));
  }

}
