import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('src/app/widgets/home-page/home-page.component').then(m => m.HomePageComponent) },
  { path: 'daily-reflection', loadComponent: () => import('./widgets/daily-reflections/daily-reflections.component').then(m => m.DailyReflectionsComponent) },
  { path: 'submit-a-prayer', loadComponent: () => import('./widgets/prayer-submission/prayer-submission.component').then(m => m.PrayerSubmissionComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
