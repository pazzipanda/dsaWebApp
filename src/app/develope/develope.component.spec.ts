import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopeComponent } from './develope.component';

describe('DevelopeComponent', () => {
  let component: DevelopeComponent;
  let fixture: ComponentFixture<DevelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
