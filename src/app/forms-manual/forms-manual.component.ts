
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-forms-manual',
  templateUrl: './forms-manual.component.html',
  styleUrls: ['./forms-manual.component.scss']
})
export class FormsManualComponent implements OnInit {
  checked1: boolean = false;
  checked2: boolean = true;
  formgroup2: FormGroup;
  DataFormIDcard;
  date = new Date()
  years;
  DataAge;

  constructor(private formgroup2Builder: FormBuilder, private http: HttpClient) {
    this.FormsGroup2()

    this.http.get<any>('https://e8f51ea6.ngrok.io/card-data').subscribe(result => {
      //age
      let year = result.birthday.substring(0, 4) - 543
      let daymonth = result.birthday.substring(5, 10)
      let sumyear = daymonth + "/" + year
      this.years = moment().diff(sumyear, 'years');
      console.log(this.years)
      //age

      //formvalue
      this.DataFormIDcard = result;
      this.formgroup2.patchValue({
        prefix: result.prefix,
        firstName: result.firstname,
        lastName: result.lastname,
        birthday:this.years,
        idCardNo: result.idCardNo,
        houseNo: result.houseNo,

        subArea: result.subArea,
        area: result.area,
        province: result.province,

      })
      console.log(this.DataFormIDcard)
    })


  }

  ngOnInit(): void {
  }
  private FormsGroup2() {
    this.formgroup2 = this.formgroup2Builder.group({
      prefix: [''],
      firstName: [''],
      lastName: [''],
      birthday: [''],
      idCardNo: [''],
      houseNo: [''],
      alley: [''],
      road: [''],
      subArea: [''],
      area: [''],
      province: [''],
      mobileNo: [''],
      agent: this.formgroup2Builder.group({
        prefix: [''],
        firstName: [''],
        lastName: [''],
        birthday: [''],
        idCardNo: [''],
        houseNo: [''],
        alley: [''],
        subArea: [''],
        area: [''],
        province: [''],
        mobileNo: [''],
        connected: [''],

      })
    })
  }

  SetvalueForms() {
    console.log(this.formgroup2.value)


    this.http.post<any>(environment.URL_API + environment.URL_CREATE_DATA_USERS, this.formgroup2.value).toPromise().then(result => {
      console.log(result)
    })
  }
}
