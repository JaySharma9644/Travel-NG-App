import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router,NavigationEnd} from '@angular/router';
import {NavigationService} from '../navigation.service'
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  home= true;

  constructor( private router: Router,
    private navigation :NavigationService,
    ) { 
      router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          if(e.url=='/dashboard'){
           this.home =true
          }else{
            this.home =false;
          }
          
        }
      });
  }

  ngOnInit(): void {
  }
  backClicked() {
    this.navigation.back();
  }

}
