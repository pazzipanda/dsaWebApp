import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevDetailWindowComponent } from './dev-detail-window.component';

describe('DevDetailWindowComponent', () => {
  let component: DevDetailWindowComponent;
  let fixture: ComponentFixture<DevDetailWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevDetailWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevDetailWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
