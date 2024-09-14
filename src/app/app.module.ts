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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './widgets/snackbar/snackbar.component';
import { ModalDialogComponent } from './widgets/modal-dialog/modal-dialog.component';
import { HomePageComponent } from './widgets/home-page/home-page.component';
import { PrayComponent } from "./widgets/pray/pray.component";
import { MeditationComponent } from "./widgets/meditation/meditation.component";
import { GrowthComponent } from "./widgets/growth/growth.component";
import { DailyReflectionsComponent } from './widgets/daily-reflections/daily-reflections.component';
import { PrayerSubmissionComponent } from './widgets/prayer-submission/prayer-submission.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { AppConstants } from './utilities/application.constants';

const dbConfig: DBConfig = {
  name: 'prayerDB',
  version: 1,
  objectStoresMeta: [{
    store: AppConstants.DB_STORE_NAME,
    storeConfig: {keyPath: 'id', autoIncrement: true},
    storeSchema: [
      {name: AppConstants.DB_FIELD_1, keypath: AppConstants.DB_FIELD_1, options: { unique: false }},
      {name: AppConstants.DB_FIELD_2, keypath: AppConstants.DB_FIELD_2, options: { unique: false }},
      {name: AppConstants.DB_FIELD_3, keypath: AppConstants.DB_FIELD_3, options: { unique: false }}
    ]
  }]
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PrayComponent,
    MeditationComponent,
    GrowthComponent,
    DailyReflectionsComponent,
    PrayerSubmissionComponent,
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
    MatDialogModule,
    MatFormFieldModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
