import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineservicesComponent } from './lineservices.component';

describe('LineservicesComponent', () => {
  let component: LineservicesComponent;
  let fixture: ComponentFixture<LineservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
