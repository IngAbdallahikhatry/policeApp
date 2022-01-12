import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

const httpOptions ={
  headers :new HttpHeaders({'content-type':'application/json'})
}


export interface Comusareat {
  altitude: number,
  longitude: number,
  Libelle:string,
  phone:number,
   

}

@Injectable({
  providedIn: 'root'
})
export class ComusareatService {

  constructor(private http:HttpClient,private storage:Storage) { }


  extractData(res:Response){
    let body=res;
    return body || {};
  }


  getComuseareat(lng):Observable<any>{
    
    return this.http.get("https://servipolice.xyz/public/api/numCommusareat/"+lng,httpOptions).pipe(map(this.extractData));
  }

  /* getComusareat(id){
    return this.http.get("https://servipolice.xyz/public/api/numCommusareat/id",httpOptions).pipe(map(this.extractData));
  }
 */
}
