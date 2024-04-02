import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeadingTitleComponent } from './sub-heading-title.component';

describe('SubHeadingTitleComponent', () => {
  let component: SubHeadingTitleComponent;
  let fixture: ComponentFixture<SubHeadingTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubHeadingTitleComponent]
    });
    fixture = TestBed.createComponent(SubHeadingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
