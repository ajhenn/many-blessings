import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { AppConstants } from './app/utilities/application.constants';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

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




bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, RouterLink, FormsModule, MatToolbarModule, MatButtonModule, MatTabsModule, MatMenuModule, MatCardModule, MatIconModule, MatDividerModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatRippleModule, MatSnackBarModule, MatDialogModule, MatFormFieldModule, NgxIndexedDBModule.forRoot(dbConfig)),
        provideAnimationsAsync(),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
