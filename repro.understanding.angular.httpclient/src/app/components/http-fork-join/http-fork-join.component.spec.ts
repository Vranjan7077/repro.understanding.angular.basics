import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpForkJoinComponent } from './http-fork-join.component';

describe('HttpForkJoinComponent', () => {
  let component: HttpForkJoinComponent;
  let fixture: ComponentFixture<HttpForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpForkJoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
