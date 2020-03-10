import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesectionComponent } from './onesection.component';

describe('OnesectionComponent', () => {
  let component: OnesectionComponent;
  let fixture: ComponentFixture<OnesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
