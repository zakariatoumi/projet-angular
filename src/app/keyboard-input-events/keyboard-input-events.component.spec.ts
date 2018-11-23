import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardInputEventsComponent } from './keyboard-input-events.component';

describe('KeyboardInputEventsComponent', () => {
  let component: KeyboardInputEventsComponent;
  let fixture: ComponentFixture<KeyboardInputEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardInputEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardInputEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
