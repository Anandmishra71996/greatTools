import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-congratulatory',
  templateUrl: './congratulatory.component.html',
  styleUrls: ['./congratulatory.component.scss']
})
export class CongratulatoryComponent implements OnInit {
name='Anand'
  orderId: any;
  url:string='https://greattechtools/cong?id=';
  createOrder:boolean=true;
  constructor(private coreService:CoreService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(param=>{
  
      this.orderId=param.id;
      console.log(this.orderId)
      if(this.orderId)
        this.getOrderDetail();
    })
  }
  getOrderDetail(){
    this.coreService.getCongOrder(this.orderId).subscribe((res:any)=>{
      if(res.success){
        this.name=res.data.userName;
        this.createOrder=false;
        this.orderId=''
        console.log(res)
      }
    })
  }
addNewOrder(){
  let body={
    userName:this.name,
    source:'Navratri',
  }
  this.coreService.addNewCongOrder(body).subscribe((res:any)=>{
    if(res.success){
      this.orderId=res.data.orderId;
      this.url=this.url+'this.orderId';
    }
  })
}
}
