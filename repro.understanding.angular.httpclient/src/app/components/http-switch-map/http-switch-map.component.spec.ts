import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpSwitchMapComponent } from './http-switch-map.component';

describe('HttpSwitchMapComponent', () => {
  let component: HttpSwitchMapComponent;
  let fixture: ComponentFixture<HttpSwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpSwitchMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
