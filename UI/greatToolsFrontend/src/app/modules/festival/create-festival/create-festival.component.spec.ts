import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFestivalComponent } from './create-festival.component';

describe('CreateFestivalComponent', () => {
  let component: CreateFestivalComponent;
  let fixture: ComponentFixture<CreateFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
