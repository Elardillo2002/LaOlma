import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
    title: string;
    text: string;
    link: string;
    linkWord: string;
    imageSrc: string;
    imageAlt: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
    @Input() articles: carouselImage[] = [];
    selectedIndex = 0;

    ngOnInit(): void {
        setInterval(() => this.onNextClick(), 100000);
    }

    selectArticle(index: number): void {
        this.selectedIndex = index;
    }

    onPrevClick(): void {
        if (this.selectedIndex === 0) {
            this.selectedIndex = this.articles.length - 1;
        } else {
            this.selectedIndex--;
        }
    }

    onNextClick(): void {
        if (this.selectedIndex === this.articles.length - 1) {
            this.selectedIndex = 0;
        } else {
            this.selectedIndex++;
        }
    }
}