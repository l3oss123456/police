
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    setInterval(()=>{

      this.http.get<any>('https://97f8456b.ngrok.io/card-data').subscribe(result => {
      //age revrere
      let year = result.birthday.substring(0, 4) - 543
      let daymonth = result.birthday.substring(5, 10)
      let sumyear = daymonth + "/" + year
      this.years = moment().diff(sumyear, 'years');
      console.log(this.years)
      //age revrere

      //formvalue
      if(this.DataFormIDcard){
        if(this.DataFormIDcard.idCardNo != result.idCardNo){
          this.DataFormIDcard = result;
          this.formgroup2.patchValue({
            prefix: result.prefix,
            firstName: result.firstname,
            lastName: result.lastname,
            birthday: this.years,
            idCardNo: result.idCardNo,
            houseNo: result.houseNo,
            subArea: result.subArea,
            area: result.area,
            province: result.province,
    
          })
        }
      }else{
        this.DataFormIDcard = result;
          this.formgroup2.patchValue({
            prefix: result.prefix,
            firstName: result.firstname,
            lastName: result.lastname,
            birthday: this.years,
            idCardNo: result.idCardNo,
            houseNo: result.houseNo,
            subArea: result.subArea,
            area: result.area,
            province: result.province,
    
          })
      }
     
     
      
    })

    },5000)
    

  }
  ngDoCheck(){
    
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
        prefix: ['',Validators.required],
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        birthday: [''],
        idCardNo: ['',[Validators.required,Validators.pattern(/^[0-9]{13}$/)]],
        houseNo: ['',Validators.required],
        alley: [''],
        subArea: ['',Validators.required],
        area: ['',Validators.required],
        province: ['',Validators.required],
        mobileNo: [''],
        connected: ['',Validators.required],

      })
    })
  }

  SetvalueForms() {
    
   
    if(this.formgroup2.invalid){
      this.formgroup2.get('agent').get('prefix').markAllAsTouched();
      this.formgroup2.get('agent').get('firstName').markAllAsTouched();
      this.formgroup2.get('agent').get('lastName').markAllAsTouched();
      this.formgroup2.get('agent').get('idCardNo').markAllAsTouched();
      this.formgroup2.get('agent').get('houseNo').markAllAsTouched();
      this.formgroup2.get('agent').get('subArea').markAllAsTouched();
      this.formgroup2.get('agent').get('area').markAllAsTouched();
      this.formgroup2.get('agent').get('province').markAllAsTouched();
      this.formgroup2.get('agent').get('connected').markAllAsTouched();
      return 
    }
    this.http.post<any>(environment.URL_API + environment.URL_CREATE_DATA_USERS, this.formgroup2.value).toPromise().then(result => {
      console.log(result)
    })
  }
}
