import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchablePaginationComponent } from './searchable-pagination.component';

describe('SearchablePaginationComponent', () => {
  let component: SearchablePaginationComponent;
  let fixture: ComponentFixture<SearchablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchablePaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
