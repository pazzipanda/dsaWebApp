import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevTextWindowComponent } from './dev-text-window.component';

describe('DevTextWindowComponent', () => {
  let component: DevTextWindowComponent;
  let fixture: ComponentFixture<DevTextWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevTextWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevTextWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
