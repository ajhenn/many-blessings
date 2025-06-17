import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrl: './modal-dialog.component.scss',
    imports: [MatDialogTitle, CdkScrollable, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class ModalDialogComponent {
  dialogContent = inject(MAT_DIALOG_DATA);

  dialogRef = inject(MatDialogRef);

  /**
   * Opens link in new tab
   * @param link URL string
   */
  openLinkNewTab(link: string) {
    window.open(link, '_blank');
  }
}
