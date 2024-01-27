import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagExtractorComponent } from './tag-extractor.component';

describe('TagExtractorComponent', () => {
  let component: TagExtractorComponent;
  let fixture: ComponentFixture<TagExtractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagExtractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagExtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
