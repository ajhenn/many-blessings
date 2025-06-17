import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppSessionService } from 'src/app/services/app-session.service';
import { ReflectionConstants } from 'src/app/utilities/daily-reflections.constants';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatFormField, MatLabel, MatInput, MatHint, MatSuffix } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-daily-reflections',
    templateUrl: './daily-reflections.component.html',
    styleUrl: './daily-reflections.component.scss',
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('1s ease-out', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate('1s ease-in', style({ opacity: 0 }))
            ])
        ])
    ],
    imports: [MatButton, RouterLink, MatFormField, MatLabel, MatInput, MatDatepickerInput, FormsModule, MatHint, MatDatepickerToggle, MatSuffix, MatDatepicker]
})
export class DailyReflectionsComponent implements OnInit {

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
      this.reflectionData = ReflectionConstants.dailyReflections;
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
      this.reflectionFailure = (this.date === '' && this.title === '' && this.content1 === '' && this.footer === '' && this.content2 === '');
      if (this.reflectionFailure) {
        console.log('Cannot get daily reflection data!');
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
}
