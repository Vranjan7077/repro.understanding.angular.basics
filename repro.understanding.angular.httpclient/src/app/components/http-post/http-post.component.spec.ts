import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostComponent } from './http-post.component';

describe('HttpPostComponent', () => {
  let component: HttpPostComponent;
  let fixture: ComponentFixture<HttpPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
