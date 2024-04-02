import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTitleHeaderComponent } from './common-title-header.component';

describe('CommonTitleHeaderComponent', () => {
  let component: CommonTitleHeaderComponent;
  let fixture: ComponentFixture<CommonTitleHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonTitleHeaderComponent]
    });
    fixture = TestBed.createComponent(CommonTitleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
