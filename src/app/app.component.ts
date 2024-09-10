import { Component } from '@angular/core';
import { EventService } from './services/event.service';
import { AppSessionService } from './services/app-session.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../app/widgets/snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'many-blessings';
  snackbarContent = 'Sorry, we\'re having trouble.';
  snackbarDurationInSec = 3;

  constructor(private appSessionService: AppSessionService, private eventService: EventService,
    private snackBar: MatSnackBar) {}

  /**
   * Emit value to home pg component
   * Sets value in app session service
   */
  sendValueToHomePg(tabIndex: number) {
    this.appSessionService.tabIndexValue = tabIndex;
    this.eventService.homePageTabIndex.emit(tabIndex);
  }

  /**
   * Share website link
   * Open snackbar widget
   */
  shareWebsite(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.snackbarContent = 'Website link copied. Please share!';
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.snackbarDurationInSec * 1000,
      data: this.snackbarContent
    });
  }

}
