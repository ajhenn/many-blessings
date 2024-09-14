import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerSubmissionComponent } from './prayer-submission.component';

describe('PrayerSubmissionComponent', () => {
  let component: PrayerSubmissionComponent;
  let fixture: ComponentFixture<PrayerSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayerSubmissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayerSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
