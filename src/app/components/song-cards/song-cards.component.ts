import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'song-cards',
  templateUrl: './song-cards.component.html',
  styleUrl: './song-cards.component.css',
})
export class SongCardsComponent implements OnInit {
  @Input() playlist_thumbnail! : string ;
  @Input() title! : string ;
  @Input() description! : string ;
  constructor() {}

  ngOnInit(): void {}
}
