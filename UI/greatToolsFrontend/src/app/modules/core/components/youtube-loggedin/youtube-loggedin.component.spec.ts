import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeLoggedinComponent } from './youtube-loggedin.component';

describe('YoutubeLoggedinComponent', () => {
  let component: YoutubeLoggedinComponent;
  let fixture: ComponentFixture<YoutubeLoggedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeLoggedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeLoggedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
