import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMultipleComponent } from './open-multiple.component';

describe('OpenMultipleComponent', () => {
  let component: OpenMultipleComponent;
  let fixture: ComponentFixture<OpenMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
