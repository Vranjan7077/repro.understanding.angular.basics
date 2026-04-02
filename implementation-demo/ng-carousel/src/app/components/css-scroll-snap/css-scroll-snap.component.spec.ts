import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CssScrollSnapComponent } from './css-scroll-snap.component';

describe('CssScrollSnapComponent', () => {
  let component: CssScrollSnapComponent;
  let fixture: ComponentFixture<CssScrollSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssScrollSnapComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssScrollSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
