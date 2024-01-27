import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyDhanterasComponent } from './happy-dhanteras.component';

describe('HappyDhanterasComponent', () => {
  let component: HappyDhanterasComponent;
  let fixture: ComponentFixture<HappyDhanterasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyDhanterasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyDhanterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
