import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingPropertiesWithEventsComponent } from './changing-properties-with-events.component';

describe('ChangingPropertiesWithEventsComponent', () => {
  let component: ChangingPropertiesWithEventsComponent;
  let fixture: ComponentFixture<ChangingPropertiesWithEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangingPropertiesWithEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangingPropertiesWithEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
