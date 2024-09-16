import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { futureEvent } from 'app/models/futureEvent';
import { pastEvent } from 'app/models/pastEvent';

@Component({
    selector: 'app-past-events',
    templateUrl: './past-events.component.html',
    styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent implements OnInit {
    pastEvents: pastEvent[] = [];

    constructor (private eventService: EventService) {}
    
    ngOnInit(): void {
        this.eventService.getPastEvents().subscribe((events: pastEvent[]) => {
            this.pastEvents = events.map(event => ({
                ...event,
                imagen: this.createDataUrl(event.imagen)
            }));
        });
    }
    
    // TODO: Move that to eventService
    createDataUrl(base64String: string): string {
        return `data:image/webp;base64,${base64String}`;
    }
}
