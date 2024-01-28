import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoreService } from '../../core/services/core.service';

@Component({
  selector: 'app-create-festival',
  templateUrl: './create-festival.component.html',
  styleUrls: ['./create-festival.component.scss'],
})
export class CreateFestivalComponent implements OnInit {
  festivalForm: FormGroup;

  constructor(private fb: FormBuilder, private coreService: CoreService) {
    this.createFestivalForm();
  }

  ngOnInit(): void {}
  createFestivalForm() {
    this.festivalForm = this.fb.group({
      fileType:['Image',Validators.required],
      festName: ['', Validators.required],
      mainImg: ['Choose image', Validators.required],
      movingImgSide: ['Choose image', Validators.required],
      leftParda: ['Choose image', Validators.required],
      rightParda: ['Choose image', Validators.required],
      touchToShowImg: ['Choose image', Validators.required],
      backgroundColor: ['', Validators.required],
      shayari: [[]], // Assuming shayari is an array of strings
      movingMessage: [''],
      extraImg1: [''],
      extraImg2: [''],
      extraImg3: [''],
    });
  }
  uploadFile(event, formControlName) {
    let file = event.target.files[0];
    if (!file) {
      return;
    }
    this.coreService.uploadFile(file).subscribe((res) => {
      this.festivalForm.get(formControlName).setValue(res.data.url);
      console.log(this.festivalForm.value);
    });
  }
  onSubmit() {
    this.coreService
      .createNewFestival(this.festivalForm.value)
      .subscribe((res) => {});
  }
}
