import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

 
  constructor() { 


  }
  refresh(){
    window.location.reload();
  }
  print(){

    window.print()
  }
  ngOnInit(): void {
  }

  backweb(){
    window.location.href = "https://www.google.com/"
  }

}
