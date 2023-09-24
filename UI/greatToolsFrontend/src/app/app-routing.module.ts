import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/core/components/home/home.component';
import { CoreComponent } from './modules/core/core/core.component';
import { TermsandconditionComponent } from './modules/core/components/termsandcondition/termsandcondition.component';
import { AboutusComponent } from './modules/core/components/aboutus/aboutus.component';
import { ContactusComponent } from './modules/core/components/contactus/contactus.component';
import { YoutubeLoggedinComponent } from './modules/core/components/youtube-loggedin/youtube-loggedin.component';
import { YoutubeComponent } from './modules/core/components/youtube/youtube.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {path:'privacy',component:TermsandconditionComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'about',component:AboutusComponent},
  {path:'youtube',component:YoutubeComponent},
  
  {
    path:'dashboard',component:YoutubeLoggedinComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
