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
    /** Variable for pastEvent interface */
    lastEvents: pastEvent[] = [];

    /** Variable for formatDescription sentences */
    seeMore = true;

    /** Component constructor
     * @param {EventService} eventService Take eventService functions
    */
    constructor (
        private eventService: EventService
    ) {}
  
    ngOnInit(): void {
        /** Take last three pastEvents from database and format the description, the date and create an URL for the image */
        this.eventService.getLastEvents().subscribe((events: pastEvent[]) => {
            this.lastEvents = events.map(event => {

                const { text, seeMore } = this.eventService.formatDescription(event.descripcion);
                const date = this.eventService.formatDate(new Date(event.fecha));
                const imageUrl = this.eventService.formatImage(event.imagen);
                
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
}