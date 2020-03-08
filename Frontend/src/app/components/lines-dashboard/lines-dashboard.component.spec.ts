import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesDashboardComponent } from './lines-dashboard.component';

describe('LinesDashboardComponent', () => {
  let component: LinesDashboardComponent;
  let fixture: ComponentFixture<LinesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
