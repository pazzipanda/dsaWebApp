import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevButtonsBarComponent } from './dev-buttons-bar.component';

describe('DevButtonsBarComponent', () => {
  let component: DevButtonsBarComponent;
  let fixture: ComponentFixture<DevButtonsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevButtonsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevButtonsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
