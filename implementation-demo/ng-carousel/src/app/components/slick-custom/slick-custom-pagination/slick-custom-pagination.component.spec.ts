import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SlickCustomPaginationComponent } from './slick-custom-pagination.component';

describe('SlickCustomPaginationComponent', () => {
  let component: SlickCustomPaginationComponent;
  let fixture: ComponentFixture<SlickCustomPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlickCustomPaginationComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlickCustomPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
