import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { CoreService } from '../modules/core/services/core.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _swPush: SwPush, private coreService: CoreService) {}
  requestSubscription = () => {
    if (!this._swPush.isEnabled) {
      console.log('Notification is not enabled.');
      return;
    }

    this._swPush
      .requestSubscription({
        serverPublicKey:
          'BCyXcgs-RIAph0Wm_mZDmSis-TGYxun3bEGEwrT35gCwJLxTlGwvR0elobtutxHelvULcw73EPIbUIXXVobTo58',
      })
      .then((suscription: any) => {
        let body = JSON.stringify(suscription);
        console.log(body);
        let subscription = JSON.parse(body);
        subscription['endpoint1'] = subscription?.endpoint;
        this.coreService.subscribe(subscription).subscribe((res) => {
          console.log('subscribed Successfully');
        });
      })
      .catch((_) => console.log);
  };
}
