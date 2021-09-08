import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  private studentRegUrl = "https://eems-heroku.herokuapp.com/home";
  private centerUrl = "https://eems-heroku.herokuapp.com/center";

  constructor(private _http: HttpClient) { }

  studentReg(student): Observable<any>{
    return this._http.post(this.studentRegUrl, student);
  }

  getCenterData(){
    return this._http.get(this.centerUrl);
  }
}
