import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  imports: [TranslatePipe],
  selector: 'app-doc-block',
  template: `
@switch (block.type) {
  @case ('text') {
    <p>{{ block.content | translate }}</p>
  }
  @case ('image') {
    <figure>
      <img [src]="block.src" width="200px" style="border-radius: 10px;" />
    </figure>
  }
  @case ('heading') {
    <h3>{{ block.content | translate }}</h3>
  }
  @case ('tip') {
    <div class="tip">
      <h4>💡 Tip</h4>
      {{ block.content | translate }}
    </div>
  }
  @case ('warning') {
    <div class="warning">
      <h4>⚠️ Warning</h4>
      {{ block.content | translate }}
    </div>
  }
}
`,
  styles: [`
    .tip {
      background: #e8f5e9;
      padding: 1rem;
      margin: 1rem 0;
      border-left: 4px solid #2e7d32;
    }

    .warning {
      background: #fff3e0;
      padding: 1rem;
      margin: 1rem 0;
      border-left: 4px solid #ef6c00;
    }

    img {
      max-width: 100%;
      margin: 1rem 0;
    }
  `]
})
export class DocBlockComponent {
  @Input() block!: any;
}
