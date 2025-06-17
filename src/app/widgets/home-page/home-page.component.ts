import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { AppSessionService } from 'src/app/services/app-session.service';


@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    standalone: false
})
export class HomePageComponent implements OnInit, OnDestroy {

  selectedIndex = 0;
  tabIndexListener: any;

  constructor(private appSessionService: AppSessionService, private eventService: EventService) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.tabIndexListener = this.eventService.homePageTabIndex.subscribe((tabIndexVal: number) => {
      this.selectedIndex = tabIndexVal;
    });
    this.selectedIndex = this.appSessionService.tabIndexValue;
  }

  ngOnDestroy(): void {
    this.tabIndexListener.unsubscribe();
  }

}
