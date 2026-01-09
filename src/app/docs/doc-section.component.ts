import { Component, Input } from '@angular/core';
import { DocSection } from './docs.models';
import { DocBlockComponent } from './doc-block.component';
import { CommonModule } from '@angular/common';

@Component({
  imports: [DocBlockComponent, CommonModule],
  selector: 'app-doc-section',
  template: `
    <h1>{{ section.title }}</h1>
    <app-doc-block
      *ngFor="let block of section.blocks"
      [block]="block">
    </app-doc-block>
  `
})
export class DocSectionComponent {
  @Input() section!: DocSection;
}
