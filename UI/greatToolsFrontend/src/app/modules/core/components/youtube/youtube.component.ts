import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
channelId:any;
  isLoggedIn: boolean;
  userDetail: any;
  constructor(private coreService:CoreService, private router:Router) {
    this.isLoggedIn=false;
   }

  ngOnInit(): void {
    let token= localStorage.getItem('channel');
    if(token){
      this.channelId=token
    }
  }
  register(){
    if(this.channelId && this.channelId!=''){
      this.coreService.registerWithYoutube(this.channelId).subscribe((res:any)=>{
       if(res.success){
        this.isLoggedIn=true;
        this.userDetail=res.data;
        localStorage.setItem('userName',res.data.userName);
        localStorage.setItem('channel',this.channelId);
        this.router.navigateByUrl('/tools/dashboard')
       }
      })
    }
  }
}
