import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
// Move a lot of these to app component to handle common header

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatTabsModule, MatMenuModule, MatIconModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  /**
   * Method to navigate to daily reflection component
   */
  goToReflection() {
    // Not need if using router link
  }

}
