import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private apiService: ApiService) {}
  registerWithYoutube(channelId: string) {
    return this.apiService.getRequest(`user/registerByChannelId/${channelId}`);
  }
  getChannelsToSubscribe(userId: string) {
    return this.apiService.getRequest('order/getPendingChannel/' + userId);
  }
  getUserDetails(channelId: string) {
    return this.apiService.getRequest('user/userDetails/' + channelId);
  }
  youtubeSubscribe(otherChannelId: string, channelId: string) {
    console.log(otherChannelId, 'chhannel', channelId);
    return this.apiService.postRequest('order/subscribleChannel', {
      channelId: otherChannelId,
      loggedinId: channelId,
    });
  }
  fetchLastCredit(channelId: string) {
    return this.apiService.getRequest('order/fetchLastCredit/' + channelId);
  }
  placeOrder(body: any) {
    return this.apiService.postRequest(`order/addNewOrder`, body);
  }
  getOrderById(userId: string) {
    return this.apiService.getRequest(`order/getOrders/` + userId);
  }
  addNewCongOrder(body: any) {
    return this.apiService.postRequest('order/addCongOrder', body);
  }
  getCongOrder(orderID: any) {
    return this.apiService.getRequest('order/getCongOrder/' + orderID);
  }
  getVideoTagsById(videoId: string) {
    return this.apiService.getRequest('order/getTags/' + videoId);
  }
  subscribe(body) {
    return this.apiService.postRequest('notification/subscribe', body);
  }
}
