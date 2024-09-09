import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { AppSessionService } from 'src/app/services/app-session.service';
import { AppConstants } from 'src/app/utilities/daily-reflections.constants';

@Component({
  selector: 'app-daily-reflections',
  standalone: true,
  imports: [FormsModule, MatNativeDateModule, MatDatepickerModule, MatButtonModule,
    MatInputModule],
  templateUrl: './daily-reflections.component.html',
  styleUrl: './daily-reflections.component.scss'
})
export class DailyReflectionsComponent implements OnInit {

  isLoading = true;
  today = new Date();
  dateSelection = new Date();
  reflectionData: any;
  date = '';
  title = '';
  content1 = '';
  footer = '';
  content2 = '';
  reflectionFailure = false;
  dataInStorage = false;

  constructor(private appSessionService: AppSessionService) {}

  ngOnInit(): void {
    window.scroll(0,0);
    this.dataInStorage = this.appSessionService.getReflectionData() !== null && this.appSessionService.getReflectionData() !== undefined;
    if (this.dataInStorage) {
      this.reflectionData = this.appSessionService.getReflectionData();
      this.getDailyReflection(this.today);
    } else {
      this.reflectionData = AppConstants.dailyReflections;
      this.getDailyReflection(this.today);
    }
  }

  /**
   * Get daily reflection content for page
   * @param currentDate
   */
  getDailyReflection(currentDate: any) {
    currentDate = currentDate.getMonth().toString() + '/' + currentDate.getDate().toString();
    const promise = new Promise((resolve, reject) => {
      this.isLoading = true;
      if (!this.dataInStorage) {
        this.appSessionService.setReflectionData(this.reflectionData);
      }
      this.clearReflection();
      this.reflectionData.forEach((reflection: any) => {
        if (currentDate === reflection.date) {
          this.date = reflection.reflection.day;
          this.title = reflection.reflection.title;
          this.content1 = reflection.reflection.content1;
          this.footer = reflection.reflection.footer;
          this.content2 = reflection.reflection.content2;
        }
      })
      resolve(true);
    })
    promise.then(() => {
      this.isLoading = false;
      this.reflectionFailure = (this.date === '' && this.title === '' && this.content1 === '' && this.footer === '' && this.content2 === '');
      if (this.reflectionFailure) {
        this.goHome();
      }
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 200)
    });
  }

  /**
   * Clear reflection content
   */
  clearReflection() {
    this.date = '';
    this.title = '';
    this.content1 = '';
    this.footer = '';
    this.content2 = ''
  }

  /**
   * Go to main landing page
   */
  goHome() {
    if (this.reflectionFailure) {
      this.appSessionService.reflectionFailure = true;
    }
    this.appSessionService.appPage = 'home';
  }

}
