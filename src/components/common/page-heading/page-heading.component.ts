import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  imports: [],
  templateUrl: './page-heading.component.html',
  styleUrl: './page-heading.component.scss'
})
export class PageHeadingComponent {
  @Input() title!: string; // Required
  @Input() className?: string; // Optional additional classes
}
