import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Pc } from './pc.model'

@Injectable()
export class PcService {

  selectedPc : Pc;
  pcList : Pc[];
  constructor(private http : Http) { }

  postPC(pc : Pc){
    var body = JSON.stringify(pc);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions ({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:56462/api/PC',body,requestOptions).map(x => x.json());
  }

  putPC(id, pc) {
    var body = JSON.stringify(pc);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:56462/api/PC/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getPcList(){
    this.http.get('http://localhost:56462/api/PC')
    .map((data : Response) =>{
      return data.json() as Pc[];
    }).toPromise().then(x => {
      this.pcList = x;
    })
  }

  deletePC(id: number) {
    return this.http.delete('http://localhost:56462/api/PC/' + id).map(res => res.json());
  }
}
