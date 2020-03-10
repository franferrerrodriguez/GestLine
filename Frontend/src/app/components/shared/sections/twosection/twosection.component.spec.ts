import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwosectionComponent } from './twosection.component';

describe('TwosectionComponent', () => {
  let component: TwosectionComponent;
  let fixture: ComponentFixture<TwosectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwosectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
