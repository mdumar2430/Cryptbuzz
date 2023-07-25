import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Algo1Component } from './algo1/algo1.component';
import { Algo2Component } from './algo2/algo2.component';
import { Algo3Component } from './algo3/algo3.component';
import { Algo4Component } from './algo4/algo4.component';
import { Algo5Component } from './algo5/algo5.component';
import { Algo6Component } from './algo6/algo6.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"Algo1",component:Algo1Component},
  {path:"Algo2",component:Algo2Component},
  {path:"Algo3",component:Algo3Component},
  {path:"Algo4",component:Algo4Component},
  {path:"Algo5",component:Algo5Component},
  {path:"Algo6",component:Algo6Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
