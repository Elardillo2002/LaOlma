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
    futureEvents: futureEvent[] = [];
    pastEvents: pastEvent[] = [];

    constructor (private eventService: EventService) {}
    
    ngOnInit(): void {
        this.eventService.getFutureEvents().subscribe((event: futureEvent[]) => {
            this.futureEvents = event;
        });

        this.eventService.getPastEvents().subscribe((events: pastEvent[]) => {
            this.pastEvents = events.map(event => ({
                ...event,
                imagen: this.createDataUrl(event.imagen)
            }));
        });
    }

    createDataUrl(base64String: string): string {
        return `data:image/webp;base64,${base64String}`;
    }
}