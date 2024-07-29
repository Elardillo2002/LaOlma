import { Component, Input } from '@angular/core';

interface carouselImage {
    title: string;
    text: string;
    link: string;
    linkWord: string;
    imageSrc: string;
    imageAlt: string;
}
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})

export class DescriptionComponent {
    @Input() articles: carouselImage[] = [];

    selectedIndex = 0;

    selectArticle(index: number): void {
        this.selectedIndex = index;
    }

    onPrevClick(): void {
        console.log("entre");
        if (this.selectedIndex === 0) {
            this.selectedIndex = this.articles.length - 1;
        } else {
            this.selectedIndex--;
        }
    }

    onNextClick(): void {
        console.log("entre2");
        if (this.selectedIndex === this.articles.length - 1) {
            this.selectedIndex = 0;
        } else {
            this.selectedIndex++;
        }
    }
}
