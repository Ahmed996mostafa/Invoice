import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvenDetails } from '../models/innoveDetails';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpclient:HttpClient) { }
 baseUrl:string='http://localhost:5078/api/'  //http://localhost:5078/api/Unit/3

 getUnitname(id:number){
   return this.httpclient.get(this.baseUrl+'Unit'+`${id}`);
 }
  getElmentDetails(id:number){
    return this.httpclient.get(this.baseUrl+'Innovice/'+`${id}`);
  }

  Addinvoice(obj:object){
    return this.httpclient.post(this.baseUrl+'Innovice',obj);
  }

  getallUnitNO(){
    return this.httpclient.get(this.baseUrl+'Unit');
  }

  edit(id:number,obj:InvenDetails){
    return this.httpclient.put(this.baseUrl+'Innovice/'+`${id}`,obj);
  }

  getAllinov(){
    return this.httpclient.get(this.baseUrl+'Innovice');
  }
}
