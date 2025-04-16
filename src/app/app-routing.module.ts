import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {BookInformationComponent} from './book-information/book-information.component';

const routes: Routes = [
  {path:'personal-info', component:PersonalInformationComponent},
  {path:'book-info', component:BookInformationComponent},
  {path:'',redirectTo:'personal-info',pathMatch:'full'},
  {path:'**', redirectTo: 'personal-info'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
