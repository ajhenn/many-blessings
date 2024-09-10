import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
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
    DailyReflectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule
],
  exports: [
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
