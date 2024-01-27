import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamMandirComponent } from './ram-mandir.component';

describe('RamMandirComponent', () => {
  let component: RamMandirComponent;
  let fixture: ComponentFixture<RamMandirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamMandirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamMandirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
