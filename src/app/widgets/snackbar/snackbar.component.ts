import { Component, inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, MatSnackBarLabel } from '@angular/material/snack-bar';

@Component({
    selector: ' app-snackbar',
    template: `<span class="snackbar" matSnackBarLabel>
                {{snackbarContent}}
             </span>
             `,
    styles: [
        `
    :host {
      display: flex;
      justify-content: center;
    }

    .snackbar {
      display: flex;
      justify-content: center;
      color: white;
    }
  `,
    ],
    imports: [MatSnackBarLabel]
})

export class SnackBarComponent {
  snackbarContent = inject(MAT_SNACK_BAR_DATA);

  snackBarRef = inject(MatSnackBarRef);
}
