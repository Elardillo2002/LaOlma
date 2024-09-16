import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { pastEvent } from 'app/models/pastEvent';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-last-meetings',
    templateUrl: './last-meetings.component.html',
    styleUrls: ['./last-meetings.component.scss']
})
export class LastMeetingsComponent implements OnInit {
    seeMore = true;
    lastEvents: pastEvent[] = [];

    constructor (
        private eventService: EventService,
        private sanitizer: DomSanitizer
    ) {}
  
    ngOnInit(): void {
        this.eventService.getLastEvents().subscribe((events: pastEvent[]) => {
            this.lastEvents = events.map(event => {

                const { text, seeMore } = this.formatDescription(event.descripcion);
                const date = this.formatDate(new Date(event.fecha));
                const imageUrl = this.formatImage(event.imagen);

                console.log(event.imagen.length);
                
                return {
                    ...event,
                    text,
                    seeMore,
                    date,
                    imageUrl
                }
            })
        });
    }

    // TODO: Move that to eventService
    formatDescription(description: string): { text: string, seeMore: boolean } {
        const words = description.split(' ');
        const seeMore = words.length >= 20;
        const text = seeMore ? words.slice(0, 20).join(' ') : description;

        return { text, seeMore };
    }

    formatDate(date: Date): string {
        const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

        const day = date.getDate().toString();
        const monthName = months[date.getMonth()];
        
        return `${day} de ${monthName} de ${date.getFullYear()}`;
    }

    formatImage(image: string) {
        let blob = new Blob([image], { type: 'image/webp' });
        let imageUrl = URL.createObjectURL(blob);
        return imageUrl;
    }
}