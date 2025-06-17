import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { AppConstants } from 'src/app/utilities/application.constants';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel, MatInput, MatHint } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFabButton } from '@angular/material/button';

@Component({
    selector: 'app-prayer-submission',
    templateUrl: './prayer-submission.component.html',
    styleUrl: './prayer-submission.component.scss',
    imports: [MatIcon, MatFormField, MatLabel, MatInput, FormsModule, MatHint, MatFabButton]
})
export class PrayerSubmissionComponent implements OnInit {
  private dbService = inject(NgxIndexedDBService);
  private route = inject(ActivatedRoute);


  prayerContent = '';
  authorContent = '';
  approved = 0;

  adminPrayerContent = '';
  adminAuthorContent = '';
  adminApproved = 0; // change to 1 for approval
  approvedId = 0; // change to id of record for update

  dbContent: any;
  showEditMode = false;

  ngOnInit(): void {
    const editMode = this.route.snapshot.queryParamMap.get('modify');
    if (editMode === 'true') {
      this.showEditMode = true;
      this.getDbContent();
    } else {
      this.showEditMode = false;
    }
  }

  /**
   * Method to add record to DB form form
   */
  submitPrayer() {
    const prayer = { prayer: this.prayerContent, author: this.authorContent, approved: this.approved };
    this.dbService.add(AppConstants.DB_STORE_NAME, prayer).subscribe(() => {
      this.prayerContent = '';
      this.authorContent = '';
      this.getDbContent();
    });
  }

  /**
   * Method to get entire DB content
   */
  getDbContent() {
    this.dbService.getAll(AppConstants.DB_STORE_NAME).subscribe((result: any) => {
      this.dbContent = result;
    });
  }

  /**
   * Gets record content on ID change
   */
  getRecordContent(recordId: number) {
    const hasVal = (recordId !== null && recordId !== undefined && typeof recordId === 'number');
    if (hasVal) {
      this.dbService.getByKey(AppConstants.DB_STORE_NAME, recordId).subscribe((result: any) => {
        console.log('result of record search = ', result);
        if (result) {
          this.adminPrayerContent = result.prayer;
          this.adminAuthorContent = result.author;
          this.adminApproved = result.approved;
          this.approvedId = result.id;
        } else {
          console.log('Record not found!');
          this.adminPrayerContent = '';
          this.adminAuthorContent = '';
          this.adminApproved = 0;
        }
      });
    } else {
      console.log('Invalid recordId!');
      // Throw field level error.
    }
  }

  /**
   * Method to update record and approve specific prayer
   */
  approvePrayer() {
    const updateObject = this.updateContent();
    this.dbService.update(AppConstants.DB_STORE_NAME, updateObject).subscribe(() => {
      this.adminPrayerContent = '';
      this.adminAuthorContent = '';
      this.adminApproved = 0;
      this.approvedId = 0;
      this.getDbContent();
    });
  }

  /**
   * Method to return proper DB object based on values changed
   * @returns object
   */
  updateContent() {
    let prayerToUpdate: any = { approved: this.adminApproved, id: this.approvedId };
    if (this.adminPrayerContent && !this.adminAuthorContent) {
      prayerToUpdate = { prayer: this.adminPrayerContent, approved: this.adminApproved, id: this.approvedId }
    } else if (!this.adminPrayerContent && this.adminAuthorContent) {
      prayerToUpdate = { author: this.adminAuthorContent, approved: this.adminApproved, id: this.approvedId };
    } else if (this.adminPrayerContent && this.adminAuthorContent) {
      prayerToUpdate = { prayer: this.adminPrayerContent, author: this.adminAuthorContent, approved: this.adminApproved, id: this.approvedId };
    }
    return prayerToUpdate;
  }

  /**
   * Method to clear entire DB
   */
  clearDatabase() {
    this.dbService.clear(AppConstants.DB_STORE_NAME).subscribe((deleted) => {
      console.log('Database cleared success? ', deleted);
    })
  }

}
