import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPipeComponent } from './default-pipe.component';

describe('DefaultPipeComponent', () => {
  let component: DefaultPipeComponent;
  let fixture: ComponentFixture<DefaultPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
