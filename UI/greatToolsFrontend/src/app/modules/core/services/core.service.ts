import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private apiService:ApiService) { }
  registerWithYoutube(channelId:string){
   return this.apiService.getRequest(`user/registerByChannelId/${channelId}`)
  }
  getChannelsToSubscribe(){
    return this.apiService.getRequest('order/getPendingChannel')
  }
  getUserDetails(channelId:string){
    return this.apiService.getRequest('user/userDetails/'+channelId)

  }
  subscribe(otherChannelId:string,channelId:string){
    return this.apiService.postRequest('order/subscribleChannel',{
      channelId:otherChannelId,
      loggedinId:channelId
    })
  }
}
