import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { futureEvent } from 'app/models/futureEvent';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})

export class UpcomingComponent implements OnInit {
    /** Variable for futureEvent interface */
    upcomingEvents: futureEvent[] = [];

    /** Component constructor
     * @param {EventService} eventService Take eventService functions
    */
    constructor (private eventService: EventService) {}
    
    ngOnInit(): void {
        /** Take the three closest events from database and format the date */
        this.eventService.getUpcomingEvents().subscribe((events: futureEvent[]) => {
            this.upcomingEvents = events.map(event => {
                const date = this.eventService.formatDate(new Date(event.fecha));
                return {
                    ...event,
                    date
                }
            })
        });
    }

    /** Selects the image to be displayed according to the type obtained */
    getType(tipo: string): string {
        switch (tipo) {
            case "Limpieza de residuos":
                return "assets/images/trash.webp";
            case "Charla":
                return "assets/images/speak.webp";
            case "Plantación":
                return "assets/images/plant.webp";
            case "Taller":
                return "assets/images/workshop.webp"
            default:
                return "";
        }
    }
}
