import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-heading-title',
  templateUrl: './sub-heading-title.component.html',
  styleUrls: ['./sub-heading-title.component.scss']
})
export class SubHeadingTitleComponent {
  @Input() subHeading: string = '';

  constructor(private router: Router) { }

  viewAll() {
    if (this.subHeading === 'Now Showing') {
      this.router.navigate(['home/now-showing-view-all']);
    }
    else {
      this.router.navigate(['home/upcoming-movies-view-all']);
    }
  }
}