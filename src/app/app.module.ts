import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { SnackBarComponent } from './widgets/snackbar/snackbar.component';
import { ModalDialogComponent } from './widgets/modal-dialog/modal-dialog.component';
import { HomePageComponent } from './widgets/home-page/home-page.component';
import { PrayComponent } from "./widgets/pray/pray.component";
import { MeditationComponent } from "./widgets/meditation/meditation.component";
import { GrowthComponent } from "./widgets/growth/growth.component";
import { DailyReflectionsComponent } from './widgets/daily-reflections/daily-reflections.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PrayComponent,
    MeditationComponent,
    GrowthComponent,
    DailyReflectionsComponent,
    SnackBarComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatRippleModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
