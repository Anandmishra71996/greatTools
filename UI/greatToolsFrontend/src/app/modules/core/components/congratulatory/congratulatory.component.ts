import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-congratulatory',
  templateUrl: './congratulatory.component.html',
  styleUrls: ['./congratulatory.component.scss'],
})
export class CongratulatoryComponent implements OnInit {
  name = '';
  orderId: any;
  copied: boolean = false;
  waiting: boolean = false;
  url: string = 'https://greattechtools.com/cong?id=';
  createOrder: boolean = true;
  @ViewChild('copyTextToClipboard') copyTextToClipboard: ElementRef;

  constructor(
    private coreService: CoreService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.orderId = param.id;
      console.log(this.orderId);
      if (this.orderId) this.getOrderDetail();
    });
  }
  copyLink() {
    const textArea = this.copyTextToClipboard.nativeElement;

    // Check if the Clipboard API is supported by the browser
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(this.url)
        .then(() => {
          this.copied = true;
          console.log('Text copied to clipboard: ' + this.url);
        })
        .catch((error) => {
          console.error('Failed to copy text: ' + error);
        });
    } else {
      console.error('Clipboard API is not supported in this browser.');
    }
  }
  getOrderDetail() {
    this.coreService.getCongOrder(this.orderId).subscribe((res: any) => {
      if (res.success) {
        this.name = res.data.userName;
        this.createOrder = false;
        this.orderId = '';
        console.log(res);
      }
    });
  }
  addNewOrder() {
    let body = {
      userName: this.name,
      source: 'Diwali',
    };
    this.coreService.addNewCongOrder(body).subscribe((res: any) => {
      if (res.success) {
        this.orderId = res.data.orderId;
        this.url = this.url + this.orderId;
        this.waiting = true;
        setTimeout(() => {
          this.waiting = false;
        }, 5000);
      }
    });
  }

  share() {
    const assetUrl = `/assets/images/demo.png`;
    const imageUrl = this.domSanitizer.bypassSecurityTrustUrl(assetUrl);
    // @ts-nocheck
    // @ts-nocheck
    const shareData = {
      title: 'Send to your loved ones',
      text: `*${this.name}* ने आपके लिए ख़ास सन्देश भेजा है 
        ओपन करके देखो 👇👇🏻👇👇 
        `,
      url: this.url,
      // files: [new File(['/assets/images/demo.png'],'navratri.png',{ type: 'image/jpeg' })],
    };
    if (navigator.share) {
      navigator
        .share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Web Share API not supported in this browser');
    }
  }
}
