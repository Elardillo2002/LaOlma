import { SafeUrl } from "@angular/platform-browser";

export interface pastEvent {
    id?: number;
    titulo: string;
    descripcion: string;
    participantes: string;
    lugar: string;
    fecha: string;
    imagen: string;

    date?: {
        day: string;
        monthName: string;
        year: number;
    }
    text?: string;
    seeMore?: boolean;
    imageUrl?: SafeUrl;
}