import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-thumbnail-extractor',
  templateUrl: './thumbnail-extractor.component.html',
  styleUrls: ['./thumbnail-extractor.component.scss'],
})
export class ThumbnailExtractorComponent implements OnInit {
  videoUrl: any;
  videoId: any;

  tags: Array<any>;
  selectedELe: Array<any> = [];
  @ViewChild('copyTextToClipboard') copyTextToClipboard: ElementRef;
  thumbnails: string[];
  constructor(private coreService: CoreService) {}

  ngOnInit(): void {}
  getTags() {
    var urlvid, fields, vid, vid1, list;
    urlvid = this.videoUrl;
    if (urlvid.includes('youtu.be')) {
      vid = list = urlvid.split('/')[3];
    } else if (urlvid.includes('&list=')) {
      fields = urlvid.split('?v=')[1];
      vid = fields.split('&')[0];
      list = fields.split('&list=')[1].split('&')[0];
    } else {
      fields = urlvid.split('?v=')[1];
      vid = fields.split('&')[0];
      list = vid;
    }
    if (vid != '') {
      this.videoId = vid;
      this.coreService.getVideoTagsById(this.videoId).subscribe((res: any) => {
        if (res.success) {
          this.tags = res.data.snippet.thumbnails;
          this.thumbnails = Object.keys(this.tags);
          console.log(this.tags);
        }
      });
    }
  }

  copyToClipboard(): void {
    const textArea = this.copyTextToClipboard.nativeElement;
    textArea.select();

    try {
      document.execCommand('copy');
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Unable to copy text: ', err);
    }

    // Clear the selection
    window.getSelection().removeAllRanges();
  }
  copySelected() {
    let contentTocopy = '';
    this.selectedELe.forEach((id) => {
      let ele = document.getElementById(id);
      contentTocopy += ele.innerHTML + ' ,';
    });
    const textArea = document.createElement('textarea');
    console.log(contentTocopy);
    textArea.value = contentTocopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.classList.add('d-none');
  }
  SelectAll() {
    let uniqueTag = new Set();
    this.selectedELe = [];
    this.tags.forEach((tag, i) => {
      this.selectedELe.push('tag' + i);

      let ele = document.getElementById('tag' + i);
      if (ele) ele.classList.add('selected');
    });
    this.selectedELe;
  }
  selectOneTag(id) {
    let ele = document.getElementById(id);
    let elementIndex = this.selectedELe.findIndex((e) => e == id);
    if (elementIndex == -1 && ele) {
      ele.classList.add('selected');

      this.selectedELe.push(id);
    } else {
      this.selectedELe.splice(elementIndex, 1);
      ele.classList.remove('selected');
    }
    console.log(this.selectedELe);
    // this.selectedELe.push(id);
    // const textArea = document.createElement('textarea');
    // textArea.value = ele.innerHTML;
    // textArea.classList.add('d-none')
    // ele.classList.add('selected')
    // console.log(ele.innerHTML)
    // document.body.appendChild(textArea);
    // textArea.select();
    // document.execCommand('copy');
  }
}
