import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFestivalComponent } from './dynamic-festival.component';

describe('DynamicFestivalComponent', () => {
  let component: DynamicFestivalComponent;
  let fixture: ComponentFixture<DynamicFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
