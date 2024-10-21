import { Component} from '@angular/core';
import { EventService } from 'app/services/event.service';
import { futureEvent } from 'app/models/futureEvent';


@Component({
    selector: 'app-future-events',
    templateUrl: './future-events.component.html',
    styleUrls: ['./future-events.component.scss']
})
export class FutureEventsComponent {
    /** Variable for futureEvent interface */
    futureEvents: futureEvent[] = [];

    /** Component constructor
     * @param {EventService} eventService Take eventService functions
    */
    constructor (private eventService: EventService) {}
    
    ngOnInit(): void {
        /** Take all futureEvents from database and creates a format for the date */
        this.eventService.getFutureEvents().subscribe((events: futureEvent[]) => {
            this.futureEvents = events.map(event => {
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
