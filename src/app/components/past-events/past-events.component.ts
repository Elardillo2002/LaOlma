import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { pastEvent } from 'app/models/pastEvent';

@Component({
    selector: 'app-past-events',
    templateUrl: './past-events.component.html',
    styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent implements OnInit {
    /** Variable for pastEvent interface */
    pastEvents: pastEvent[] = [];

    /** Component constructor
     * @param {EventService} eventService Take eventService functions
    */
    constructor (private eventService: EventService) {}
    
    ngOnInit(): void {
        /** Take all pastEvents from database and format the date and create an URL for the image */
        this.eventService.getPastEvents().subscribe((events: pastEvent[]) => {
            this.pastEvents = events.map(event => {

                const date = this.eventService.formatDate(new Date(event.fecha));
                const imageUrl = this.eventService.formatImage(event.imagen);
                
                return {
                    ...event,
                    date,
                    imageUrl
                }
            })
        });
    }
}