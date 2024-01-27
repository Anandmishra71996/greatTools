import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiwaliComponent } from './diwali.component';

describe('DiwaliComponent', () => {
  let component: DiwaliComponent;
  let fixture: ComponentFixture<DiwaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiwaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiwaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
