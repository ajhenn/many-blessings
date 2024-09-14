import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/app/widgets/home-page/home-page.component';
import { DailyReflectionsComponent } from './widgets/daily-reflections/daily-reflections.component';
import { PrayerSubmissionComponent } from './widgets/prayer-submission/prayer-submission.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'daily-reflection', component: DailyReflectionsComponent },
  { path: 'submit-a-prayer', component: PrayerSubmissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
