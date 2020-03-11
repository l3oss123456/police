import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forms-no-agent',
  templateUrl: './forms-no-agent.component.html',
  styleUrls: ['./forms-no-agent.component.scss']
})
export class FormsNoAgentComponent implements OnInit {
  checked1: boolean = false;
  checked2: boolean = true;
  data = {};
  // formgroup2: FormGroup;
  DatatoPrint;

  constructor(private formgroup2Builder: FormBuilder, private http: HttpClient) {
    
    //get value to print
   
  }



  ngOnInit(): void {
    // this.FormsGroup2()
    this.http.get<any>(environment.URL_API+environment.URL_CREATE_DATA_USERS+"/5e67d6b51af2e900427c7602").subscribe( result => {
      
      this.DatatoPrint = result;
      
    })
    
  }

  
 
  

  // private FormsGroup2() {
  //   this.formgroup2 = this.formgroup2Builder.group({
  //     firstName: [''],
  //     lastName: [''],
  //     age: [],
  //     idCardNo: [''],
  //     houseNo: [''],
  //     alley: [''],
  //     road: [''],
  //     subArea: [''],
  //     area: [''],
  //     province: [''],
  //     mobileNo: [''],
  //     agent: this.formgroup2Builder.group({
  //       firstName: [''],
  //       lastName: [''],
  //       age: [],
  //       idCardNo: [''],
  //       houseNo: [''],
  //       alley: [''],
  //       subArea: [''],
  //       area: [''],
  //       province: [''],
  //       mobileNo: [''],
  //       connected: [''],

  //     })
  //   })
    
  // }




//   SetvalueForms() {
//     console.log(this.formgroup2.value)


//     this.http.post<any>(environment.URL_API + environment.URL_CREATE_DATA_USERS, this.formgroup2.value).toPromise().then(result => {
//       console.log(result)
//     })

//   }

// }
}

