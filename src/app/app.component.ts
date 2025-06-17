import { Component } from '@angular/core';
import { EventService } from './services/event.service';
import { AppSessionService } from './services/app-session.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../app/widgets/snackbar/snackbar.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../app/widgets/modal-dialog/modal-dialog.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [MatToolbar, MatIconButton, MatMenuTrigger, MatIcon, MatMenu, MatMenuItem, RouterLink, RouterOutlet, MatDivider]
})

export class AppComponent {
  title = 'many-blessings';
  snackbarContent = 'Sorry, we\'re having trouble.';
  snackbarDurationInSec = 3;
  dialogContent = {
    title: '',
    body: '',
    showSecondaryBtn: true,
    secondaryBtnTxt: '',
    showPrimaryBtn: true,
    primaryBtnTxt: '',
    secondaryLink: '',
    primaryLink: ''
  };

  constructor(private appSessionService: AppSessionService, private eventService: EventService,
    private snackBar: MatSnackBar, private dialog: MatDialog) {}

  /**
   * Emit value to home pg component
   * Sets value in app session service
   */
  sendValueToHomePg(tabIndex: number) {
    this.appSessionService.tabIndexValue = tabIndex;
    this.eventService.homePageTabIndex.emit(tabIndex);
  }

  /**
   * Opens modal for donate prompt
   */
  donateToDeveloper() {
    this.dialogContent.title = 'Thank You!';
    this.dialogContent.body = 'Like the content you see? Donating can help the developer to explore new things, new ideas and to keep this page growing!<br><br>Click "Donate" if you\'d like to support.';
    this.dialogContent.secondaryBtnTxt = 'Close';
    this.dialogContent.primaryBtnTxt = 'Donate';
    this.dialogContent.primaryLink = 'https://paypal.me/emissionbassmusic?country.x=US&locale.x=en_US';
    this.dialog.open(ModalDialogComponent, {
      data: this.dialogContent
    })
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
