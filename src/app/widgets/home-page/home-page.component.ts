import { Component, OnInit } from '@angular/core';
import { AppSessionService } from 'src/app/services/app-session.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  constructor(private appSessionService: AppSessionService) {}

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
