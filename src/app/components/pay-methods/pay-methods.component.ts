import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'app-pay-methods',
    templateUrl: './pay-methods.component.html',
    styleUrls: ['./pay-methods.component.scss']
})
export class PayMethodsComponent {
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
