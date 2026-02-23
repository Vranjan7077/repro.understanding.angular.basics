import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAsyncPipeComponent } from './http-async-pipe.component';

describe('HttpAsyncPipeComponent', () => {
  let component: HttpAsyncPipeComponent;
  let fixture: ComponentFixture<HttpAsyncPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpAsyncPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
