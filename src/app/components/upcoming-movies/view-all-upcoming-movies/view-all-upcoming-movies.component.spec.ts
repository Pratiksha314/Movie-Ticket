import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllUpcomingMoviesComponent } from './view-all-upcoming-movies.component';

describe('ViewAllUpcomingMoviesComponent', () => {
  let component: ViewAllUpcomingMoviesComponent;
  let fixture: ComponentFixture<ViewAllUpcomingMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllUpcomingMoviesComponent]
    });
    fixture = TestBed.createComponent(ViewAllUpcomingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
