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
  isPlaceOrder: boolean = false;
  no_of_subscriber:number=0;
  required_credit:number=0;
  userOrders: any;
  viewOrder: boolean=false;
  constructor(
    private coreService: CoreService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.channelsToSubscribe = [];
  }

  ngOnInit(): void {
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
  openViewOrder(){
    this.viewOrder=true;
    this.getOrderByUserId();
  }
  placeOrder() {
    this.isPlaceOrder = false;
    let obj={
      userId:this.channelId,
      no_of_subscriber:this.no_of_subscriber
    }
    this.coreService.placeOrder(obj).subscribe(res=>{
      console.log(res)
      this.no_of_subscriber=0;
      this.getUserDetails();
    })
  }
  getPendingChannel() {
    this.coreService.getChannelsToSubscribe().subscribe((res: any) => {
      console.log(res.data);
      this.channelsToSubscribe = res.data;
      this.currentChannel = this.channelsToSubscribe[this.activeIndex];
    });
  }
  earnCredits(){
    this.earnCredit=true;
    this.isPlaceOrder=false;
    this.getPendingChannel();
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
      .youtubeSubscribe(this.currentChannel.userId, this.channelId)
      .subscribe((res: any) => {
        this.currentChannel = this.channelsToSubscribe[this.activeIndex];
        setTimeout(()=>{
          this.coreService.fetchLastCredit(this.channelId).subscribe((res: any) => {
            if (res.success) {
              this.userDetails = res.data;
            }
          });
        }, 3000);
      });
  }
  openDashboard(){
    this.isPlaceOrder=false;
    this.viewOrder=false;
    this.earnCredit=false;
  }
  updateCredit() {
    console.log('update credit')
    this.coreService.fetchLastCredit(this.channelId).subscribe((res: any) => {
      if (res.success) {
        this.userDetails = res.data;
      }
    });
  }
  getOrderByUserId(){
    this.coreService.getOrderById(this.channelId).subscribe((res:any)=>{
      if(res.success){
        this.userOrders=res.data;
      }
    })
  }
  logout() {
    localStorage.removeItem('userName');
    this.router.navigateByUrl('/');
  }


}
