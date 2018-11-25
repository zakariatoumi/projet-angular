import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingAServiceComponent } from './creating-a-service.component';

describe('CreatingAServiceComponent', () => {
  let component: CreatingAServiceComponent;
  let fixture: ComponentFixture<CreatingAServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingAServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingAServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
