import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { futureEvent } from 'app/models/futureEvent';
import { pastEvent } from 'app/models/pastEvent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    urlPast: string = "api/eventospasados";
    urlLast: string = "api/eventospasados/ultimos";

    urlFuture: string = "api/eventosfuturos";
    urlUpcoming: string = "api/eventosfuturos/proximos"

    constructor(private httpClient: HttpClient) { }

    /* Past events */
    getPastEvents(): Observable<pastEvent[]> {
        return this.httpClient.get<pastEvent[]>(this.urlPast);
    }

    getPastEventId(id: number): Observable<pastEvent[]> {
        return this.httpClient.get<pastEvent[]>(`${this.urlPast}/${id}`);
    }

    getLastEvents(): Observable<pastEvent[]> {
        return this.httpClient.get<pastEvent[]>(this.urlLast);
    }

    addPastEvent(pastEvent: pastEvent): Observable<pastEvent[]> {
        return this.httpClient.post<pastEvent[]>(this.urlPast, pastEvent);
    }

    deletePastEvent(id: number): Observable<pastEvent[]> {
        return this.httpClient.delete<pastEvent[]>(`${this.urlPast}/${id}`);
    }

    editPastEvent(id: number, pastEvent: pastEvent): Observable<pastEvent[]> {
        return this.httpClient.put<pastEvent[]>(`${this.urlPast}/${id}`, pastEvent);
    }

    /* Future events */
    getFutureEvents(): Observable<futureEvent[]> {
        return this.httpClient.get<futureEvent[]>(this.urlFuture);
    }

    getFutureEventId(id: number): Observable<futureEvent[]> {
        return this.httpClient.get<futureEvent[]>(`${this.urlFuture}/${id}`);
    }

    getUpcomingEvents(): Observable<futureEvent[]> {
        return this.httpClient.get<futureEvent[]>(this.urlUpcoming);
    }

    addFutureEvent(futureEvent: futureEvent): Observable<futureEvent[]> {
        return this.httpClient.post<futureEvent[]>(this.urlFuture, futureEvent);
    }

    deleteFutureEvent(id: number): Observable<futureEvent[]> {
        return this.httpClient.delete<futureEvent[]>(`${this.urlFuture}/${id}`);
    }

    editFutureEvent(id: number, futureEvent: futureEvent): Observable<futureEvent[]> {
        return this.httpClient.put<futureEvent[]>(`${this.urlFuture}/${id}`, futureEvent);
    }


    createImageFromBlob(image: Blob): Observable<string> {
        return new Observable<string>((observer) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                observer.next(reader.result as string);
                observer.complete();
            };

            reader.onerror = (error) => {
                observer.error(error);
            };
            
            if (image) {
                reader.readAsDataURL(image);
            }
        });
    }
}