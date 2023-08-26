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
channelId:any= localStorage.getItem('channelId');
channelsToSubscribe:any[];
activeIndex:number=0;
  constructor(private coreService:CoreService) {
    this.channelsToSubscribe=[]
   }

  ngOnInit(): void {
this.getPendingChannel();
  }
  getPendingChannel(){
    this.coreService.getChannelsToSubscribe().subscribe((res:any)=>{
      console.log(res.data)
      this.channelsToSubscribe=res.data;
      this.currentChannel=this.channelsToSubscribe[this.activeIndex]
    })
  }
  getUserDetails(){
    this.coreService.getUserDetails(this.channelId).subscribe((data:any)=>{
      console.log(data.data)
    })
  }
  subscribe(){
    this.activeIndex++;
    let userName= this.currentChannel.userName.split(" ").join("");
    console.log(this.currentChannel)
    window.open('https://youtube.com/@'+userName)
    this.coreService.subscribe(this.currentChannel.userId,this.channelId).subscribe((res:any)=>{
      this.currentChannel=this.channelsToSubscribe[this.activeIndex];
    })
  }

}
