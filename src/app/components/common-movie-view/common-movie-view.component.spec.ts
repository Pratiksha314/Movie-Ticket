import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMovieViewComponent } from './common-movie-view.component';

describe('CommonMovieViewComponent', () => {
  let component: CommonMovieViewComponent;
  let fixture: ComponentFixture<CommonMovieViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonMovieViewComponent]
    });
    fixture = TestBed.createComponent(CommonMovieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
