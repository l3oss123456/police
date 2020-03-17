import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import { FormsMainComponent } from './forms-main/forms-main.component';
import { FormsManualComponent } from './forms-manual/forms-manual.component';
import { FormsNoAgentComponent } from './forms-no-agent/forms-no-agent.component';


const routes: Routes = [
  {
     path: '', redirectTo: 'main', pathMatch: 'full' 
  },
  {
    path:'main',component:MainComponent,
    children: [
   
      {
        path:'form',component:FormsManualComponent,
      },
      {
        path: '', redirectTo: 'form', pathMatch: 'full' 
      },
      
      
    ]
  },

 

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
