export interface futureEvent {
    id?: number;
    fecha: string;
    descripcion: string;
    tipo: string;
    date?: {
        dayName: string;
        day: string;
        monthName: string;
    }
}