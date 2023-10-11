import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/core/components/home/home.component';
import { CoreComponent } from './modules/core/core/core.component';
import { TermsandconditionComponent } from './modules/core/components/termsandcondition/termsandcondition.component';
import { AboutusComponent } from './modules/core/components/aboutus/aboutus.component';
import { ContactusComponent } from './modules/core/components/contactus/contactus.component';
import { YoutubeLoggedinComponent } from './modules/core/components/youtube-loggedin/youtube-loggedin.component';
import { YoutubeComponent } from './modules/core/components/youtube/youtube.component';
import { CongratulatoryComponent } from './modules/core/components/congratulatory/congratulatory.component';
import { OpenMultipleComponent } from './modules/core/components/open-multiple/open-multiple.component';
import { TagExtractorComponent } from './modules/core/components/tag-extractor/tag-extractor.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {path:'privacy',component:TermsandconditionComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'about',component:AboutusComponent},
  {path:'youtube',component:YoutubeComponent},
  {path:'cong',component:CongratulatoryComponent},
  {path:'increaseViews',component:OpenMultipleComponent},
  {path:'tagextractor',component:TagExtractorComponent},
  
  {
    path:'dashboard',component:YoutubeLoggedinComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
