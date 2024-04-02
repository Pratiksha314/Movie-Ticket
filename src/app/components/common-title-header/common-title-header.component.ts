import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-title-header',
  templateUrl: './common-title-header.component.html',
  styleUrls: ['./common-title-header.component.scss']
})
export class CommonTitleHeaderComponent {
  @Input() headingTitle: string = '';

}
