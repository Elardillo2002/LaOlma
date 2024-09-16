import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { futureEvent } from 'app/models/futureEvent';
import { pastEvent } from 'app/models/pastEvent';

@Component({
    selector: 'app-future-events',
    templateUrl: './future-events.component.html',
    styleUrls: ['./future-events.component.scss']
})
export class FutureEventsComponent {
    futureEvents: futureEvent[] = [];

    constructor (private eventService: EventService) {}
    
    ngOnInit(): void {
        this.eventService.getFutureEvents().subscribe((events: futureEvent[]) => {
            this.futureEvents = events.map(event => {
                const date = this.formatDate(new Date(event.fecha));
                return {
                    ...event,
                    date
                }
            })
        });
    }


    // TODO: Move that to eventService
    formatDate(formatedDate: Date): { dayName: string, day: string, monthName: string } {
        const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        const dayName = daysOfWeek[formatedDate.getDay()];
        const day = formatedDate.getDate().toString();
        const monthName = months[formatedDate.getMonth()];
        
        return { dayName, day, monthName }
    }

    getImage(tipo: string): string {
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
