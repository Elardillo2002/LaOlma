import { Component, ViewChildren } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'app-collaborate',
    templateUrl: './collaborate.component.html',
    styleUrls: ['./collaborate.component.scss']
})
export class CollaborateComponent {
    copied: boolean = false;

    constructor(private clipboard: Clipboard) {}

    copyText(text: string, tooltip: MatTooltip): void {
        this.clipboard.copy(text);

        tooltip.disabled = false;
        tooltip.show()

        setTimeout(() => {
            tooltip.disabled = true;
          }, 1000);
    }
}
