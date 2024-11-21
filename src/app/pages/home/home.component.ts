import { Component } from '@angular/core';
import { SearchBarService } from '../../services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public songCards = [
    {
      song_id: 1,
      thumbnail:
        'https://yt3.googleusercontent.com/A294yzaaCREGqWQx-Kmi12OJY3o15aYAjVcbjcc8VOT6Sg3HnTWititImc-VaR6WyJzEPfkA=s160-c-k-c0x00ffffff-no-rj',
      title: 'Romantic Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: 'assets/dangerous.mp3',
    },
    {
      song_id: 2,
      thumbnail:
        'https://yt3.googleusercontent.com/A294yzaaCREGqWQx-Kmi12OJY3o15aYAjVcbjcc8VOT6Sg3HnTWititImc-VaR6WyJzEPfkA=s160-c-k-c0x00ffffff-no-rj',
      title: 'Peaceful Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 3,
      thumbnail:
        'https://yt3.googleusercontent.com/A294yzaaCREGqWQx-Kmi12OJY3o15aYAjVcbjcc8VOT6Sg3HnTWititImc-VaR6WyJzEPfkA=s160-c-k-c0x00ffffff-no-rj',
      title: 'DJ Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 4,
      thumbnail:
        'https://yt3.googleusercontent.com/A294yzaaCREGqWQx-Kmi12OJY3o15aYAjVcbjcc8VOT6Sg3HnTWititImc-VaR6WyJzEPfkA=s160-c-k-c0x00ffffff-no-rj',
      title: 'Party Mashup Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 5,
      thumbnail:
        'https://yt3.googleusercontent.com/A294yzaaCREGqWQx-Kmi12OJY3o15aYAjVcbjcc8VOT6Sg3HnTWititImc-VaR6WyJzEPfkA=s160-c-k-c0x00ffffff-no-rj',
      title: 'HeartBreak Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: 'assets/Bezubaan.mp3',
    },
    {
      song_id: 6,
      thumbnail:
        'https://yt3.googleusercontent.com/A294yzaaCREGqWQx-Kmi12OJY3o15aYAjVcbjcc8VOT6Sg3HnTWititImc-VaR6WyJzEPfkA=s160-c-k-c0x00ffffff-no-rj',
      title: 'Spiritual Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 7,
      thumbnail:
        'https://yt3.googleusercontent.com/A294yzaaCREGqWQx-Kmi12OJY3o15aYAjVcbjcc8VOT6Sg3HnTWititImc-VaR6WyJzEPfkA=s160-c-k-c0x00ffffff-no-rj',
      title: 'Religional Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 8,
      thumbnail:
        'https://yt3.googleusercontent.com/A294yzaaCREGqWQx-Kmi12OJY3o15aYAjVcbjcc8VOT6Sg3HnTWititImc-VaR6WyJzEPfkA=s160-c-k-c0x00ffffff-no-rj',
      title: 'English Mashups',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
    {
      song_id: 9,
      thumbnail:
        'https://yt3.googleusercontent.com/A294yzaaCREGqWQx-Kmi12OJY3o15aYAjVcbjcc8VOT6Sg3HnTWititImc-VaR6WyJzEPfkA=s160-c-k-c0x00ffffff-no-rj',
      title: 'Motivational Songs',
      description: 'Relax and indulge with beautiful piano pieces',
      song_link: '',
    },
  ];
  constructor(private sb : SearchBarService){}

  onNavigatetoSearch(pageName : string){
    if (pageName=== 'search') {
      this.sb.isServiceVisible.next(true);  
    } else {
      this.sb.isServiceVisible.next(false);
    }
  }
}
