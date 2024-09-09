import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyReflectionsComponent } from './daily-reflections.component';

describe('DailyReflectionsComponent', () => {
  let component: DailyReflectionsComponent;
  let fixture: ComponentFixture<DailyReflectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyReflectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyReflectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
