import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-youtube-loggedin',
  templateUrl: './youtube-loggedin.component.html',
  styleUrls: ['./youtube-loggedin.component.scss'],
})
export class YoutubeLoggedinComponent implements OnInit {
  loggedInAs: string = localStorage.getItem('userName') || '';
  currentChannel: any;
  earnCredit: boolean = false;
  userDetails: any;
  channelId: any = localStorage.getItem('channel');
  channelsToSubscribe: any[];
  activeIndex: number = 0;
  isPlaceOrder: boolean = true;
  no_of_subscriber:number=0;
  required_credit:number=0;
  constructor(
    private coreService: CoreService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.channelsToSubscribe = [];
  }

  ngOnInit(): void {
    this.getPendingChannel();
    this.getUserDetails();
  }
  calculateCredit(event:any){
    let val=Number(event.target.value);
    if(val>0){
      this.required_credit=val*2;
    }
  }
  openPlaceOrder() {
    this.isPlaceOrder = true;
  }
  placeOrder() {
    this.isPlaceOrder = false;
    let obj={

    }
    this.coreService.placeOrder(obj).subscribe(res=>{
      console.log(res)
    })
  }
  getPendingChannel() {
    this.coreService.getChannelsToSubscribe().subscribe((res: any) => {
      console.log(res.data);
      this.channelsToSubscribe = res.data;
      this.currentChannel = this.channelsToSubscribe[this.activeIndex];
    });
  }
  getUserDetails() {
    console.log(this.channelId);
    this.coreService.getUserDetails(this.channelId).subscribe((data: any) => {
      if (data.success) {
        this.userDetails = data.data;
      }
    });
  }
  subscribe() {
    this.activeIndex++;
    let userName = this.currentChannel.userName.split(' ').join('');
    console.log(this.currentChannel);
    window.open(
      'https://youtube.com/@' + userName,
      '_blank',
      'width=800,height=500 top=200,left=200'
    );
    this.coreService
      .subscribe(this.currentChannel.userId, this.channelId)
      .subscribe((res: any) => {
        this.currentChannel = this.channelsToSubscribe[this.activeIndex];
        setTimeout(this.updateCredit, 3000);
      });
  }
  updateCredit() {
    this.coreService.fetchLastCredit(this.channelId).subscribe((res: any) => {
      if (res.success) {
        this.userDetails = res.data;
      }
    });
  }
  logout() {
    localStorage.removeItem('userName');
    this.router.navigateByUrl('/');
  }


}
