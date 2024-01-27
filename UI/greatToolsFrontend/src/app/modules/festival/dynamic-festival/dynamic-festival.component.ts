import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Festival } from 'src/app/models/festivalModal';
import { CoreService } from '../../core/services/core.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-festival',
  templateUrl: './dynamic-festival.component.html',
  styleUrls: ['./dynamic-festival.component.scss'],
})
export class DynamicFestivalComponent implements OnInit {
  festival: Festival;
  name: string;
  festName: string;
  imgCount = new Array(14);
  showActualMessage: boolean;
  showName: boolean = true;
  userName: any;
  constructor(
    private coreService: CoreService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {
    this.route.params.subscribe((param) => {
      this.festName = param['festName'];
      if (this.festName) {
        this.getFestivalData();
        this.url = `https://greattechtools.com/fest/show/${this.festName}?id=`;
      }
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((param) => {
      this.orderId = param.id;
      console.log(this.orderId);
      if (this.orderId) this.getOrderDetail();
    });
  }

  showMessage() {
    this.showActualMessage = true;
  }

  orderId: any;
  copied: boolean = false;
  waiting: boolean = false;
  url: string;
  createOrder: boolean = true;
  @ViewChild('copyTextToClipboard') copyTextToClipboard: ElementRef;

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
      userName: this.userName,
      source: 'RamMandir',
    };
    this.name = this.userName;
    this.coreService.addNewCongOrder(body).subscribe((res: any) => {
      if (res.success) {
        this.orderId = res.data.orderId;
        this.url = this.url + this.orderId;
        this.showName = false;
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

  getFestivalData() {
    this.coreService.getFestivalByName(this.festName).subscribe((res) => {
      if (res.isSuccess) {
        this.festival = res.data;
      }
    });
  }
}
