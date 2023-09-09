import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { YoutubeComponent } from '../components/youtube/youtube.component';
import { CoreComponent } from '../core/core.component';
import { YoutubeLoggedinComponent } from '../components/youtube-loggedin/youtube-loggedin.component';
import { TermsandconditionComponent } from '../components/termsandcondition/termsandcondition.component';

const routes: Routes = [
  {path:'',component:CoreComponent,
children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'privacy',component:TermsandconditionComponent},
  {path:'contactus',component:TermsandconditionComponent},
  {path:'youtube',component:YoutubeComponent},
  {
    path:'dashboard',component:YoutubeLoggedinComponent
  }


]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
