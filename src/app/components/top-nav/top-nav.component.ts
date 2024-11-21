import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../../services/searchbar.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit{
  public issearchfieldvisible : boolean = false;
  constructor(private router : Router , private sb :SearchBarService){

  }

  ngOnInit(): void {
    this.sb.isServiceVisible.subscribe(status => {
      this.issearchfieldvisible = status
    })
  }

  onNavigateTologin(){
    this.router.navigate(['/','login'])
  }


}
