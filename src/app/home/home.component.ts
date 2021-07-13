import { Component, OnInit } from '@angular/core';
import { StudentRegistrationService } from '../student-registration.service';
import { Center } from '../center';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  studentRegData = {
    fname: "",
    mname: "",
    lname: "",
    fathersName: "",
    mothersName: "",
    dob: "",
    gender: "",
    nationality: "",
    caste: "",
    address: "",
    city: "",
    state: "",
    country: "",
    ssExamination: "",
    ssBoard: "",
    ssSubject: "",
    ssYear: "",
    ssPercentage: "",
    hsExamination: "",
    hsBoard: "",
    hsSubject: "",
    hsYear: "",
    hsPercentage: "",
    applyFor: "",
    stream: "",
    medium: "",
    centerCity: "",
    centerName: "",
    photo: null
  }

  centers: any = []

  constructor(private _studentRegService: StudentRegistrationService, private _http: HttpClient) { }

  ngOnInit() {
    this.getCenter();
    console.log(this.centers)
  }

  selectedFile: File = null

  getFile(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  studentRegistration() {
    console.log(this.studentRegData);
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name)
    this._http.post('http://localhost:3000/home', fd)
    .subscribe(
      res => { console.log(res) },
      err => { console.log(err) }
    )
    
    this._studentRegService.studentReg(this.studentRegData)
      .subscribe(
        (err) => console.log(err),
        (res) => {
          console.log(res);
          alert('Your data has been submitted sucessfully');
        }
                
      )
  }
 
  getCenter(){
    this._studentRegService.getCenterData()
    .subscribe(
      res => { this.centers = res as Center[];
                  console.log(res); 
                },
      err => { console.log(err)}          
    )
  }

}
