import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulatoryComponent } from './congratulatory.component';

describe('CongratulatoryComponent', () => {
  let component: CongratulatoryComponent;
  let fixture: ComponentFixture<CongratulatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratulatoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratulatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
