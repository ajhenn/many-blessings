import { Component, OnInit, inject } from '@angular/core';
import { AppSessionService } from 'src/app/services/app-session.service';
import { PrayerConstants } from 'src/app/utilities/prayer.constants';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardFooter } from '@angular/material/card';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-pray',
    templateUrl: './pray.component.html',
    styleUrl: './pray.component.scss',
    imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardFooter, MatFabButton, MatIcon]
})
export class PrayComponent implements OnInit {
  private appSessionService = inject(AppSessionService);


  prayerContent: any;
  dataInStorage = false;

  ngOnInit(): void {
    window.scroll(0,0);
    this.dataInStorage = this.appSessionService.getPrayerData() !== null && this.appSessionService.getPrayerData() !== undefined;
    this.getRandomPrayer();
  }

  /**
   * Method to get random prayer from array
   */
  getRandomPrayer() {
    if (this.dataInStorage) {
      this.prayerContent = this.appSessionService.getPrayerData();
    } else {
      this.prayerContent = PrayerConstants.dailyPrayers;
      this.appSessionService.setPrayerData(PrayerConstants.dailyPrayers);
    }
    this.prayerContent = this.prayerContent[Math.floor(Math.random() * this.prayerContent.length)];
  }

}
