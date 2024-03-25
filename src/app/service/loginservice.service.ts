import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {apiresponse} from 'src/app/model/api.response'
import {loginmodel} from '../model/login.model'
import {rolemodel} from '../model/role.model';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  url = "http://localhost:9090/LMrecord/";

  constructor(private http:HttpClient) { }

  fetchdetail():Observable<apiresponse> {
    return this.http.get<apiresponse>(this.url + 'LMrecordall');
  }

  fetchdetailById(login_Id: number):Observable<any> {
    return this.http.get<apiresponse>(this.url + 'LMrecord/' + login_Id);
  }

  createdetail(loginmodel: loginmodel):Observable<apiresponse> {
    loginmodel.filepath = "F:/angularprojects/angular2/src/assets/files/";
    return this.http.post<apiresponse>(this.url + 'LMrecord' ,loginmodel);
  }

  updatedetail(login_Id: number, loginmodel: loginmodel):Observable<apiresponse> {
    return this.http.put<apiresponse>(this.url + 'LMrecord/' + login_Id ,loginmodel);
  }

  deletedetail(login_Id: number):Observable<apiresponse> {
    return this.http.delete<apiresponse>(this.url + 'LMrecord/' + login_Id);
  }

  fetchroledetail():Observable<apiresponse> {
    return this.http.get<apiresponse>(this.url + 'LMrole');
  }
}
