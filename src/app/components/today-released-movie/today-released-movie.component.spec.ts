import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayReleasedMovieComponent } from './today-released-movie.component';

describe('TodayReleasedMovieComponent', () => {
  let component: TodayReleasedMovieComponent;
  let fixture: ComponentFixture<TodayReleasedMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayReleasedMovieComponent]
    });
    fixture = TestBed.createComponent(TodayReleasedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
