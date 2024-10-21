import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { futureEvent } from 'app/models/futureEvent';
import { pastEvent } from 'app/models/pastEvent';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    /** Complete URLs from proxy.conf.json and connect to the database server */
    urlPast: string = "api/eventospasados";
    urlLast: string = "api/eventospasados/ultimos";

    urlFuture: string = "api/eventosfuturos";
    urlUpcoming: string = "api/eventosfuturos/proximos"

    /** Component constructor
     * @param { HttpClient } httpClient for connections to the server
     * @param { TranslateService } translate for translations that will later be exported to the components
    */
    constructor(
        private httpClient: HttpClient, 
        private translate: TranslateService
    ) { }

    /* PAST EVENTS */
    /** Take all past events */
    getPastEvents(): Observable<pastEvent[]> {
        return this.httpClient.get<pastEvent[]>(this.urlPast);
    }

    /** Take all information from one past event selected by its id */
    getPastEventId(id: number): Observable<pastEvent[]> {
        return this.httpClient.get<pastEvent[]>(`${this.urlPast}/${id}`);
    }

    /** Take the last three events */
    getLastEvents(): Observable<pastEvent[]> {
        return this.httpClient.get<pastEvent[]>(this.urlLast);
    }

    /** Create a new past event */
    addPastEvent(formData: FormData): Observable<pastEvent[]> {
        return this.httpClient.post<pastEvent[]>(this.urlPast, formData);
    }

    /** Delete a past event selected by its id */
    deletePastEvent(id: number): Observable<pastEvent[]> {
        return this.httpClient.delete<pastEvent[]>(`${this.urlPast}/${id}`);
    }

    /** Edit the data of a past event by sending all updated information */
    editPastEvent(id: number, pastEvent: pastEvent): Observable<pastEvent[]> {
        return this.httpClient.put<pastEvent[]>(`${this.urlPast}/${id}`, pastEvent);
    }

    /* FUTURE EVENTS */
    /** Take all future events */
    getFutureEvents(): Observable<futureEvent[]> {
        return this.httpClient.get<futureEvent[]>(this.urlFuture);
    }

    /** Take all information from one future event selected by its id */
    getFutureEventId(id: number): Observable<futureEvent[]> {
        return this.httpClient.get<futureEvent[]>(`${this.urlFuture}/${id}`);
    }

    /** Take the three closest events */
    getUpcomingEvents(): Observable<futureEvent[]> {
        return this.httpClient.get<futureEvent[]>(this.urlUpcoming);
    }

    /** Create a new future event */
    addFutureEvent(formData: FormData): Observable<futureEvent[]> {
        return this.httpClient.post<futureEvent[]>(this.urlFuture, formData);
    }

    /** Delete a future event selected by its id */
    deleteFutureEvent(id: number): Observable<futureEvent[]> {
        return this.httpClient.delete<futureEvent[]>(`${this.urlFuture}/${id}`);
    }

    /** Edit the data of a future event by sending all updated information */
    editFutureEvent(id: number, futureEvent: futureEvent): Observable<futureEvent[]> {
        return this.httpClient.put<futureEvent[]>(`${this.urlFuture}/${id}`, futureEvent);
    }


    /** Format a date received 
     * @param formatedDate - The date to be formatted
     * @returns { dayName: string (Monday, Tuesday...), day: string (1, 2... 31), 
     * monthName: string (January, Feb...), year: number (2023, 2024...) }
    */
    formatDate(formatedDate: Date): { dayName: string, day: string, monthName: string, year: number } {
        const daysOfWeek = [
            this.translate.instant('futureEvents.week1'),
            this.translate.instant('futureEvents.week2'),
            this.translate.instant('futureEvents.week3'),
            this.translate.instant('futureEvents.week4'),
            this.translate.instant('futureEvents.week5'),
            this.translate.instant('futureEvents.week6'),
            this.translate.instant('futureEvents.week7')
        ];

        const months = [
            this.translate.instant('futureEvents.month1'),
            this.translate.instant('futureEvents.month2'),
            this.translate.instant('futureEvents.month3'),
            this.translate.instant('futureEvents.month4'),
            this.translate.instant('futureEvents.month5'),
            this.translate.instant('futureEvents.month6'),
            this.translate.instant('futureEvents.month7'),
            this.translate.instant('futureEvents.month8'),
            this.translate.instant('futureEvents.month9'),
            this.translate.instant('futureEvents.month10'),
            this.translate.instant('futureEvents.month11'),
            this.translate.instant('futureEvents.month12')
        ];

        const dayName = daysOfWeek[formatedDate.getDay()];
        const day = formatedDate.getDate().toString();
        const monthName = months[formatedDate.getMonth()];
        const year = formatedDate.getFullYear();
        
        return { dayName, day, monthName, year }
    }

    /** Format a description received. If the sentence exceeds from 20 words, indicates whether there is more content to see
     * @param description
     * @returns { text: string, seeMore: boolean }
    */
    formatDescription(description: string): { text: string, seeMore: boolean } {
        const words = description.split(' ');
        const seeMore = words.length >= 20;
        const text = seeMore ? words.slice(0, 20).join(' ') : description;

        return { text, seeMore };
    }

    /** Attempts to create an image from a Blob object and return 
    * it as a base64 string observable. */
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

    /** Attempts to creates a data URL for an image in base64 format. */
    createDataUrl(base64String: string): string {
        return `data:image/webp;base64,${base64String}`;
    }

    /** Attempt to format an image string by converting it to a Blob 
    * and then creating an object URL for it.*/
    formatImage(image: string) {
        let blob = new Blob([image], { type: 'image/webp' });
        let imageUrl = URL.createObjectURL(blob);
        return imageUrl;
    }
}