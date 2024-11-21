import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCardsComponent } from './song-cards.component';

describe('SongCardsComponent', () => {
  let component: SongCardsComponent;
  let fixture: ComponentFixture<SongCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
