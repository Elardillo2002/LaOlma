export interface futureEvent {
    id?: number;
    titulo: string;
    lugar: string;
    fecha: string;
    tipo: string;
    
    date?: {
        dayName: string;
        day: string;
        monthName: string;
    }
}