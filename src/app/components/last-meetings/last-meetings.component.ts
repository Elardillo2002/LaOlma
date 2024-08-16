import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/services/event.service';
import { pastEvent } from 'app/models/pastEvent';

@Component({
  selector: 'app-last-meetings',
  templateUrl: './last-meetings.component.html',
  styleUrls: ['./last-meetings.component.scss']
})
export class LastMeetingsComponent implements OnInit {
  lastEvents: pastEvent[] = [];

  constructor (private eventService: EventService) {}
  
  ngOnInit(): void {
      this.eventService.getPastEvents().subscribe((events: pastEvent[]) => {
          this.lastEvents = events;
          this.lastEvents = events.map(event => {
            const date = this.formatDate(new Date(event.fecha));
            return {
                ...event,
                date
            }
        })
      });
  }

  formatDate(formatedDate: Date): string {
      const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

      const day = formatedDate.getDate().toString();
      const monthName = months[formatedDate.getMonth()];
      
      return `${day} de ${monthName} de ${formatedDate.getFullYear()}`;
  }
}