import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedofcarsComponent } from './speedofcars.component';

describe('SpeedofcarsComponent', () => {
  let component: SpeedofcarsComponent;
  let fixture: ComponentFixture<SpeedofcarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeedofcarsComponent]
    });
    fixture = TestBed.createComponent(SpeedofcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
