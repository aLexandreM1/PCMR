import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http'
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx'; //má pratica, mas solucionou meu problema com o map.

import { PC } from './pc.model'

@Injectable({
  providedIn: 'root'
})
export class PcService {

  selectedPc: PC;
  constructor(private http : Http) { }

  postPC(pc : PC){
    var body = JSON.stringify(pc);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions ({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('https://localhost:PORTADOPROJETOC#/',body,requestOptions).map(x => x.json());
  }
}
