import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-open-multiple',
  templateUrl: './open-multiple.component.html',
  styleUrls: ['./open-multiple.component.scss']
})
export class OpenMultipleComponent implements OnInit {
  no_of_screens: number=3;
  videoUrl: string ='';
  openIframe: any;
  videos:Array<SafeResourceUrl>=[];
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }
  openMultipleWindow(){
   
	  var urlvid, fields, vid, vid1, list;
	  	 urlvid = this.videoUrl;
		if(urlvid.includes("youtu.be")){
		 vid = list = urlvid.split("/")[3];
		}
		else if(urlvid.includes("&list=")){
		 fields = urlvid.split('?v=')[1];
		 vid = fields.split('&')[0];
		 list = fields.split('&list=')[1].split('&')[0];
		} else {
		 fields = urlvid.split('?v=')[1];
		 vid = fields.split('&')[0];
		 list = vid;
		}
    if(vid!=''){
      urlvid = "https://www.youtube.com/embed/"+vid;
    
    for(let i=0; i<this.no_of_screens;i++){
      this.videos.push(this.sanitizer.bypassSecurityTrustResourceUrl(urlvid));
    }
    console.log(this.videos)
   this.openIframe=true;
  }else{
   
  }
  }
  
}
