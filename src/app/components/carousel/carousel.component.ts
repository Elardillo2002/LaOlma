import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent{
    /** Component constructor
     * @param {TranslateService} translate Take eventService functions
     * @param { TranslateService } translate for translations that will be used in the HTML
    */
    constructor(private translate: TranslateService) {}

    /** Variable for the content of the carousel */
    articles: any[] = [
        {
            title: this.translate.instant('carousel.title1'),
            text: this.translate.instant('carousel.text1'),
            link: "/la_Olma",
            linkWord: this.translate.instant('carousel.link1'),
            imageSrc: "/assets/images/Fuente del sol.webp",
            imageAlt: this.translate.instant('carousel.alterText')
        },
        {
            title: this.translate.instant('carousel.title2'),
            text: this.translate.instant('carousel.text2'),
            link: "/activities",
            linkWord: this.translate.instant('carousel.link2'),
            imageSrc: "/assets/images/Contiendas.webp",
            imageAlt: this.translate.instant('carousel.alterText')
        },
        {
            title: this.translate.instant('carousel.title3'),
            text: this.translate.instant('carousel.text3'),
            link: "#",
            linkWord: this.translate.instant('carousel.link3'),
            imageSrc: "/assets/images/Desembocadura del Esgueva 2.webp",
            imageAlt: this.translate.instant('carousel.alterText')
        }
    ];
}
