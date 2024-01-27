import { Component, Input, OnInit } from '@angular/core';
import { Festival } from 'src/app/models/festivalModal';

@Component({
  selector: 'app-show-festival',
  templateUrl: './show-festival.component.html',
  styleUrls: ['./show-festival.component.scss'],
})
export class ShowFestivalComponent implements OnInit {
  @Input() festival: Festival;

  @Input() name: string;
  imgCount = new Array(14);
  constructor() {}

  ngOnInit(): void {
    console.log(this.festival);
  }
  showActualMessage: boolean;
  showMessage() {
    this.showActualMessage = true;
  }
}
