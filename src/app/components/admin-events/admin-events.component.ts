import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { pastEvent } from 'app/models/pastEvent';
import { futureEvent } from 'app/models/futureEvent';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrl: './admin-events.component.scss'
})
export class AdminEventsComponent implements OnInit {
    // TODO: Crear formulario de inicio de sesión y ReCaptcha
    /** Variable for futureEvent interface */
    futureEvents: futureEvent[] = [];
    /** Variable for pastEvent interface */
    pastEvents: pastEvent[] = [];
    /** Variable for new futureEvent form */
    futureForm: boolean = false;
    /** Variable for new pastEvent form */
    pastForm: boolean = true;

    /** Variable of default values of inputs */
    eventData = {
        title: '',
        place: '',
        participants: '',
        date: '',
        image: '',
        typeEvent: '--',
        description: ''
    }

    /** Component constructor
     * @param {EventService} eventService Take eventService functions
    */
    constructor (private eventService: EventService) {}
    
    ngOnInit(): void {
        /** Take all futureEvents from database */
        this.eventService.getFutureEvents().subscribe(events => {
            this.futureEvents = events;
        });

        /** Take all pastEvents from database */
        this.eventService.getPastEvents().subscribe(events => {
            this.pastEvents = events;
        });
    }

    /** Switches between past and future forms */
    selectTypeEvent(type: string) {
        if (type === "past") {
            this.pastForm = true;
            this.futureForm = false;
        } else {
            this.pastForm = false;
            this.futureForm = true;
        }
    }

    /** Reset input values */
    reset() {
        this.eventData = {
            title: '',
            place: '',
            participants: '',
            date: '',
            image: '',
            typeEvent: '--',
            description: ''
        }
    }

    // TODO: Arreglar titulo de futureEvents
    // TODO: Conseguir que funcione
    /** Takes all the information from the inputs, differentiating between future and past and creates a new event. */
    createEvent() {
        const formData = new FormData();

        if (this.pastForm === true) {
            formData.append('titulo', this.eventData.title);
            formData.append('descripcion', this.eventData.description);
            formData.append('participantes', this.eventData.participants);
            formData.append('lugar', this.eventData.place);
            formData.append('fecha', this.eventData.date);
            formData.append('imagen', this.eventData.image);

            console.log(formData);
            this.eventService.addPastEvent(formData).subscribe();
        } else {
            formData.append('titulo', this.eventData.title);
            formData.append('lugar', this.eventData.place);
            formData.append('fecha', this.eventData.date);
            formData.append('tipo', this.eventData.typeEvent);
    
            console.log('Datos futuros:', formData);
            this.eventService.addFutureEvent(formData).subscribe();
        }
    }

    // TODO: Crear editor de eventos
}