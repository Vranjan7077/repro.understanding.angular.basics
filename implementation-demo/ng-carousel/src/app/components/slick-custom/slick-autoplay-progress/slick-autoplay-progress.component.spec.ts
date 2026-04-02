import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SlickAutoplayProgressComponent } from './slick-autoplay-progress.component';

describe('SlickAutoplayProgressComponent', () => {
  let component: SlickAutoplayProgressComponent;
  let fixture: ComponentFixture<SlickAutoplayProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickAutoplayProgressComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlickAutoplayProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
