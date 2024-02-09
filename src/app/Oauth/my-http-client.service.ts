import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Token } from './Token';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyHttpClientService {

  token : string = "" ;
  constructor(private http : HttpClient , private route: ActivatedRoute) { }

  get(url : string) {
    return this.http.get("http://localhost:8080/"+url);
  }

  getPrivate(url : string){
    console.log(this.token)
    return this.http.get("http://localhost:8080/"+url , 
    {headers: new HttpHeaders({"Authorization" : "Baerer " + this.token})});
  }

  // getToken(code : string) {
  //   return this.http.get("http://localhost:8080/auth/callback?code="+code).subscribe(res=>{
  //     return res ;
      
  //   })

  // }
  getToken(code: string): Observable<string | null> {
    return this.http.get<string>("http://localhost:8080/auth/callback?code=" + code, { observe: "response" })
      .pipe(
        map((response: HttpResponse<string>) => {
          if (response.status == 200) {
            console.log(response);
            // Assuming the token is in the body of the response
            return response.body;
          } else {
            // You might want to handle other status codes here
            throw new Error('Token retrieval failed with status: ' + response.status);
          }
        })
      );
  }

  getUserInfo(token : string) {
    return this.http.get("http://localhost:8080/auth/userInfo?id_token="+token).subscribe(res=>{
      console.log(res);
    })
  }
}
