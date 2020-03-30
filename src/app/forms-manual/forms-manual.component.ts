
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

      this.http.get<any>('https://3a412771.ngrok.io/card-data').subscribe(result => {
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
  //radio
  checkvalue(value){

   if(value == 1){
      this.checked1 = false
   }
   else{
    this.checked1 = true
  }
   
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
        prefix: ['',],
        firstName: ['',],
        lastName: ['',],
        birthday: [''],
        idCardNo: [''],
        houseNo: ['',],
        alley: [''],
        subArea: ['',],
        area: ['',],
        province: ['',],
        mobileNo: [''],
        connected: ['',],
        // prefix: ['',],
        // firstName: ['',],
        // lastName: ['',],
        // birthday: [''],
        // idCardNo: ['',[,Validators.pattern(/^[0-9]{13}$/)]],
        // houseNo: ['',],
        // alley: [''],
        // subArea: ['',],
        // area: ['',],
        // province: ['',],
        // mobileNo: [''],
        // connected: ['',],


      })
    })
  }

  SetvalueForms() {
    
   
    // if(this.formgroup2.invalid){
    //   this.formgroup2.get('agent').get('prefix').markAllAsTouched();
    //   this.formgroup2.get('agent').get('firstName').markAllAsTouched();
    //   this.formgroup2.get('agent').get('lastName').markAllAsTouched();
    //   this.formgroup2.get('agent').get('idCardNo').markAllAsTouched();
    //   this.formgroup2.get('agent').get('houseNo').markAllAsTouched();
    //   this.formgroup2.get('agent').get('subArea').markAllAsTouched();
    //   this.formgroup2.get('agent').get('area').markAllAsTouched();
    //   this.formgroup2.get('agent').get('province').markAllAsTouched();
    //   this.formgroup2.get('agent').get('connected').markAllAsTouched();
    //   return 
    // }
    this.http.post<any>(environment.URL_API + environment.URL_CREATE_DATA_USERS, this.formgroup2.value).toPromise().then(result => {
      console.log(result)
    })
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { environment } from '../../environments/environment'
// import { HttpClient } from '@angular/common/http';
// import * as moment from 'moment';


// @Component({
//   selector: 'app-forms-manual',
//   templateUrl: './forms-manual.component.html',
//   styleUrls: ['./forms-manual.component.scss']
// })
// export class FormsManualComponent implements OnInit {
//   checked1: boolean = false;
//   checked2: boolean = true;
//   formgroup2: FormGroup;
//   DataFormIDcard;
//   date = new Date()
//   years;
//   DataAge;
//   agentArray: any = [{
//     prefix: '',
//     firstName: '',
//     lastName: '',
//     birthday: '',
//     idCardNo: '',
//     houseNo: '',
//     alley: '',
//     subArea: '',
//     area: '',
//     province: '',
//     mobileNo: '',
//     connected: '',
//   }];

//   submit = false
//   constructor(private formgroup2Builder: FormBuilder, private http: HttpClient) {
//     this.FormsGroup2()
//     setInterval(() => {

//       this.http.get<any>('https://97f8456b.ngrok.io/card-data').subscribe(result => {
        //age revrere
        // let year = result.birthday.substring(0, 4) - 543
        // let daymonth = result.birthday.substring(5, 10)
        // let sumyear = daymonth + "/" + year
        // this.years = moment().diff(sumyear, 'years');
        // console.log(this.years)
        //age revrere

        //formvalue
  //       if (this.DataFormIDcard) {
  //         if (this.DataFormIDcard.idCardNo != result.idCardNo) {
  //           this.DataFormIDcard = result;
  //           this.formgroup2.patchValue({
  //             prefix: result.prefix,
  //             firstName: result.firstname,
  //             lastName: result.lastname,
  //             birthday: this.years,
  //             idCardNo: result.idCardNo,
  //             houseNo: result.houseNo,
  //             subArea: result.subArea,
  //             area: result.area,
  //             province: result.province,

  //           })
  //         }
  //       } else {
  //         this.DataFormIDcard = result;
  //         this.formgroup2.patchValue({
  //           prefix: result.prefix,
  //           firstName: result.firstname,
  //           lastName: result.lastname,
  //           birthday: this.years,
  //           idCardNo: result.idCardNo,
  //           houseNo: result.houseNo,
  //           subArea: result.subArea,
  //           area: result.area,
  //           province: result.province,

  //         })
  //       }
  //     })
  //   }, 5000)


  // }
  // ngDoCheck() {

  // }

  // changeForm(value){
  //   if(value == 1){
  //     this.checked1 = false
  //   }
  //   else{
  //     this.checked1 = true
  //   }
  //   console.log(this.checked1)
  // }


  // ngOnInit(): void {
  // }

  // private FormsGroup2() {
  //   this.formgroup2 = this.formgroup2Builder.group({
  //     prefix: [''],
  //     firstName: [''],
  //     lastName: [''],
  //     birthday: [''],
  //     idCardNo: [''],
  //     houseNo: [''],
  //     alley: [''],
  //     road: [''],
  //     subArea: [''],
  //     area: [''],
  //     province: [''],
  //     mobileNo: [''],

  //   })
  // }

  // SetvalueForms() {
    //submit check requie
    // this.submit = true
    //ปั้น data agent array
    // let itemSentData = {
    //   prefix: this.formgroup2.value.prefix,
    //   firstName: this.formgroup2.value.firstName,
    //   lastName: this.formgroup2.value.lastName,
    //   birthday: this.formgroup2.value.birthday,
    //   idCardNo: this.formgroup2.value.idCardNo,
    //   houseNo: this.formgroup2.value.houseNo,
    //   alley: this.formgroup2.value.alley,
    //   subArea: this.formgroup2.value.subArea,
    //   area: this.formgroup2.value.area,
    //   province: this.formgroup2.value.province,
    //   mobileNo: this.formgroup2.value.mobileNo,
    //   connected: this.formgroup2.value.connected,
    //   agent: this.agentArray
    // }
    //for check validate
//     for (let i = 0; i < itemSentData.agent.length; i++) {
//       if (itemSentData.agent[i].prefix == '') {
//         return
//       }
//       if (itemSentData.agent[i].firstName == '') {
//         return
//       }
//       if (itemSentData.agent[i].lastName == '') {
//         return
//       }
//       if (itemSentData.agent[i].idCardNo == '') {
//         return
//       }
//       if (itemSentData.agent[i].houseNo == '') {
//         return
//       }
//       if (itemSentData.agent[i].subArea == '') {
//         return
//       }
//       if (itemSentData.agent[i].area == '') {
//         return
//       }
//       if (itemSentData.agent[i].province == '') {
//         return
//       }
//       if (itemSentData.agent[i].connected == '') {
//         return
//       }
//     }

//     this.http.post<any>(environment.URL_API + environment.URL_CREATE_DATA_USERS, itemSentData).toPromise().then(result => {
//       console.log(result)
//     })

//     console.log("allData -> agent = ", itemSentData)
//   }
//   addform() {
//     let agentItem = {
//       prefix: '',
//       firstName: '',
//       lastName: '',
//       birthday: '',
//       idCardNo: '',
//       houseNo: '',
//       alley: '',
//       subArea: '',
//       area: '',
//       province: '',
//       mobileNo: '',
//       connected: '',
//     }
//     this.agentArray.push(agentItem)
//     console.log("a")
//   }

// }
