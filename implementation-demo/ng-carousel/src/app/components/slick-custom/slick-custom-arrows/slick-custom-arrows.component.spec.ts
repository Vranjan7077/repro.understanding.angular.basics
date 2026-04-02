import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SlickCustomArrowsComponent } from './slick-custom-arrows.component';

describe('SlickCustomArrowsComponent', () => {
  let component: SlickCustomArrowsComponent;
  let fixture: ComponentFixture<SlickCustomArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickCustomArrowsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlickCustomArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
