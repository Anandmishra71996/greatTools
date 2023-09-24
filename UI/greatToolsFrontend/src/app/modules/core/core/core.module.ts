import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from '../core-routing/core-routing.module';
import { CoreComponent } from './core.component';
import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { HomeComponent } from '../components/home/home.component';
import { BottomNavComponent } from '../components/bottom-nav/bottom-nav.component';
import { YoutubeComponent } from '../components/youtube/youtube.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { YoutubeLoggedinComponent } from '../components/youtube-loggedin/youtube-loggedin.component';
import { TermsandconditionComponent } from '../components/termsandcondition/termsandcondition.component';
import { AboutusComponent } from '../components/aboutus/aboutus.component';
import { ContactusComponent } from '../components/contactus/contactus.component';


@NgModule({
  declarations: [
    CoreComponent,TopNavComponent,HomeComponent,BottomNavComponent,
    YoutubeComponent,YoutubeLoggedinComponent,TermsandconditionComponent, AboutusComponent,
    ContactusComponent,
    
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot()
  ],
  exports: [
    CoreComponent,TopNavComponent,HomeComponent,BottomNavComponent,
    YoutubeComponent,YoutubeLoggedinComponent,TermsandconditionComponent, AboutusComponent,
    ContactusComponent,
    
  ],
})
export class CoreModule { }
