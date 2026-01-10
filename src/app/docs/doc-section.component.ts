import { Component, Input } from '@angular/core';
import { DocSection } from './docs.models';
import { DocBlockComponent } from './doc-block.component';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  imports: [DocBlockComponent, TranslatePipe],
  selector: 'app-doc-section',
  template: `
    <h1>{{ section.title | translate}}</h1>
    @for (block of section.blocks; track block) {
      <app-doc-block
        [block]="block">
      </app-doc-block>
    }
    `
})
export class DocSectionComponent {
  @Input() section!: DocSection;
}
