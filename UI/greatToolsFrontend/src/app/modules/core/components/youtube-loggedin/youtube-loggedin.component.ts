import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-youtube-loggedin',
  templateUrl: './youtube-loggedin.component.html',
  styleUrls: ['./youtube-loggedin.component.scss']
})
export class YoutubeLoggedinComponent implements OnInit {
loggedInAs:string= localStorage.getItem('userName')||'';
currentChannel:any;
userDetails:any;
channelId:any= localStorage.getItem('channel');
channelsToSubscribe:any[];
activeIndex:number=0;
  constructor(private coreService:CoreService) {
    this.channelsToSubscribe=[]
   }

  ngOnInit(): void {
this.getPendingChannel();
this.getUserDetails();
  }
  getPendingChannel(){
    this.coreService.getChannelsToSubscribe().subscribe((res:any)=>{
      console.log(res.data)
      this.channelsToSubscribe=res.data;
      this.currentChannel=this.channelsToSubscribe[this.activeIndex]
    })
  }
  getUserDetails(){
    console.log(this.channelId)
    this.coreService.getUserDetails(this.channelId).subscribe((data:any)=>{
    if(data.success){
      this.userDetails=data.data
    }
    })
  }
  subscribe(){
    this.activeIndex++;
    let userName= this.currentChannel.userName.split(" ").join("");
    console.log(this.currentChannel)
    window.open('https://youtube.com/@'+userName)
    this.coreService.subscribe(this.currentChannel.userId,this.channelId).subscribe((res:any)=>{
      this.currentChannel=this.channelsToSubscribe[this.activeIndex];
      setTimeout(this.updateCredit,1000)
    })
  }
  updateCredit(){
    this.coreService.fetchLastCredit(this.channelId).subscribe((res:any)=>{
      if(res.success){
        this.userDetails=res.data;

      }
    })
  }
}
