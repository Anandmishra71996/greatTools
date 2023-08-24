import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @ViewChild('header') headerMenu :any |null;
  @ViewChild('burger') burgerMenu :any |null;
  @ViewChild('menu') navbarMenu :any |null;
  constructor() { }

  ngOnInit(): void {
     // Close Navbar Menu on Click Menu Links
   document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
       this.burgerMenu?.nativeElement.classList.remove("is-active");
       this.navbarMenu?.nativeElement.classList.remove("is-active");
    });
 });
 
 // Change Header Background on Scrolling
 window.addEventListener("scroll", () => {
    if (window.scrollY >= 85) {
       this.headerMenu?.nativeElement.classList.add("on-scroll");
    } else {
       this.headerMenu?.nativeElement.classList.remove("on-scroll");
    }
 });
 
 // Fixed Navbar Menu on Window Resize
 window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
       if (this.navbarMenu?.nativeElement.classList.contains("is-active")) {
          this.navbarMenu?.nativeElement.classList.remove("is-active");
       }
    }
 });
  }
  showBurger(){
    console.log(this.burgerMenu)
          this.burgerMenu?.nativeElement.classList.toggle("is-active");
          this.navbarMenu?.nativeElement.classList.toggle("is-active");
    
   }

}
