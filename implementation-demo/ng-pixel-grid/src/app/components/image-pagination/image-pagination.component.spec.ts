import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePaginationComponent } from './image-pagination.component';

describe('ImagePaginationComponent', () => {
  let component: ImagePaginationComponent;
  let fixture: ComponentFixture<ImagePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
