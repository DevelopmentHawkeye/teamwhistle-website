import { Component } from '@angular/core';
import { DOCS } from './docs.data';
import { DocSection } from './docs.models';

import { DocSectionComponent } from './doc-section.component';

@Component({
  imports: [DocSectionComponent],
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent {
  docs = DOCS;
  activeSection: DocSection = this.docs[0];

  selectSection(section: DocSection) {
    window.scrollTo(0, 0);
    this.activeSection = section;
  }
}
