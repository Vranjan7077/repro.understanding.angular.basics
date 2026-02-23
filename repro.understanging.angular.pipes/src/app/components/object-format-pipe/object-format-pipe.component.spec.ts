import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectFormatPipeComponent } from './object-format-pipe.component';

describe('ObjectFormatPipeComponent', () => {
  let component: ObjectFormatPipeComponent;
  let fixture: ComponentFixture<ObjectFormatPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectFormatPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectFormatPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
