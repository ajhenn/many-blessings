import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-modal-dialog',
    templateUrl: './modal-dialog.component.html',
    styleUrl: './modal-dialog.component.scss',
    standalone: false
})
export class ModalDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogContent: any) {}
  dialogRef = inject(MatDialogRef);

  /**
   * Opens link in new tab
   * @param link URL string
   */
  openLinkNewTab(link: string) {
    window.open(link, '_blank');
  }
}
