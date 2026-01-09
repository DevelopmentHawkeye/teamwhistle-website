import { Component, Input } from '@angular/core';
import { DocBlock } from './docs.models';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-doc-block',
  template: `
    <ng-container [ngSwitch]="block.type">

      <p *ngSwitchCase="'text'">{{ block .content }}</p>

      <figure *ngSwitchCase="'image'">
        <img [src]="block.src" width="200px" style="border-radius: 10px;" />
      </figure>

      <h3 *ngSwitchCase="'heading'">{{ block.content }}</h3>

      <div class="tip" *ngSwitchCase="'tip'">
        <h4>Tip</h4>
        {{ block.content }}
      </div>

      <div class="warning" *ngSwitchCase="'warning'">
        <h4>Warning</h4>
        {{ block.content }}
      </div>

    </ng-container>
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
