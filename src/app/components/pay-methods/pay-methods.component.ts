import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'app-pay-methods',
    templateUrl: './pay-methods.component.html',
    styleUrls: ['./pay-methods.component.scss']
})
export class PayMethodsComponent {
    /** Variable for copying to the clipboard when activated */
    copied: boolean = false;

    /** Component constructor
     * @param {Clipboard} clipboard Used for copying to the clipboard
    */
    constructor(private clipboard: Clipboard) {}

    /** function to copy on clipboard the received text */
    copyText(text: string, tooltip: MatTooltip): void {
        this.clipboard.copy(text);

        tooltip.disabled = false;
        tooltip.show()

        setTimeout(() => {
            tooltip.disabled = true;
          }, 1000);
    }
}
