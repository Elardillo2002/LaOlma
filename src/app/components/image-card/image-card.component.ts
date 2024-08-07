import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image-card',
    templateUrl: './image-card.component.html',
    styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
    @Input() text: string = '';
    @Input() image: string = '';
    @Input() alterText: string = '';
}
