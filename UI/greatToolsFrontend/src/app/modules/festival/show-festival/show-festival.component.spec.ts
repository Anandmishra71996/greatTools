import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFestivalComponent } from './show-festival.component';

describe('ShowFestivalComponent', () => {
  let component: ShowFestivalComponent;
  let fixture: ComponentFixture<ShowFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
