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


@NgModule({
  declarations: [
    CoreComponent,TopNavComponent,HomeComponent,BottomNavComponent,YoutubeComponent,YoutubeLoggedinComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot()
  ]
})
export class CoreModule { }
