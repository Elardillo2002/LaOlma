import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { futureEvent } from 'app/models/futureEvent';
import { pastEvent } from 'app/models/pastEvent';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
    /** Variable for futureEvent interface */
    futureEvents: futureEvent[] = [];
    /** Variable for pastEvent interface */
    pastEvents: pastEvent[] = [];

    /** Component constructor
     * @param {EventService} eventService Take eventService functions
    */
    constructor (private eventService: EventService) {}
    
    ngOnInit(): void {
        /** Take all futureEvents from database */
        this.eventService.getFutureEvents().subscribe((event: futureEvent[]) => {
            this.futureEvents = event;
        });

        /** Take all pastEvents from database and create an URL for the image */
        this.eventService.getPastEvents().subscribe((events: pastEvent[]) => {
            this.pastEvents = events.map(event => ({
                ...event,
                imagen: this.eventService.createDataUrl(event.imagen)
            }));
        });
    }
}