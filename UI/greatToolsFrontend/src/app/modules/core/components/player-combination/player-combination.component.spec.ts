import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCombinationComponent } from './player-combination.component';

describe('PlayerCombinationComponent', () => {
  let component: PlayerCombinationComponent;
  let fixture: ComponentFixture<PlayerCombinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCombinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
