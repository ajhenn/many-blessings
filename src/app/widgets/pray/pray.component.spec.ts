import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayComponent } from './pray.component';

describe('PrayComponent', () => {
  let component: PrayComponent;
  let fixture: ComponentFixture<PrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
