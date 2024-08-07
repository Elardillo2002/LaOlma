import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { futureEvent } from 'app/models/futureEvent';
import { pastEvent } from 'app/models/pastEvent';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    urlPast: string = "http://localhost:8081/api/eventospasados";
    urlLast: string = "http://localhost:8081/api/eventospasados/ultimos";

    urlFuture: string = "http://localhost:8081/api/eventosfuturos";
    urlUpcoming: string = "http://localhost:8081/api/eventosfuturos/proximos"

    constructor(private httpClient: HttpClient) { }

    /* Past events */
    getPastEvents(): Observable<any> {
        return this.httpClient.get<any>(this.urlPast);
    }

    getPastEventId(id: number): Observable<any> {
        return this.httpClient.get<any>(`${this.urlPast}/${id}`);
    }

    getLastEvents(): Observable<any> {
        return this.httpClient.get<any>(this.urlLast);
    }

    addPastEvent(pastEvent: pastEvent): Observable<any> {
        return this.httpClient.post<any>(this.urlPast, pastEvent);
    }

    deletePastEvent(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.urlPast}/${id}`);
    }

    editPastEvent(id: number, pastEvent: pastEvent): Observable<any> {
        return this.httpClient.put<any>(`${this.urlPast}/${id}`, pastEvent);
    }

    /* Future events */
    getFutureEvents(): Observable<any> {
        return this.httpClient.get<any>(this.urlFuture);
    }

    getFutureEventId(id: number): Observable<any> {
        return this.httpClient.get<any>(`${this.urlFuture}/${id}`);
    }

    getUpcomingEvents(): Observable<any> {
        return this.httpClient.get<any>(this.urlUpcoming);
    }

    addFutureEvent(futureEvent: futureEvent): Observable<any> {
        return this.httpClient.post<any>(this.urlFuture, futureEvent);
    }

    deleteFutureEvent(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.urlFuture}/${id}`);
    }

    editFutureEvent(id: number, futureEvent: futureEvent): Observable<any> {
        return this.httpClient.put<any>(`${this.urlFuture}/${id}`, futureEvent);
    }
}