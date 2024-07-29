import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    articles = [
        {
            title: "Conoce nuestro trabajo",
            text: "Nos enfocamos en el estudio, conservación del medio ambiente, protegiendo la flora y fauna autóctona, el paisaje, las aguas superficiales y el resto de los recursos naturales, además de promover la educación ambiental y la divulgación del patrimonio natural, histórico y arqueológico a través de diversas metodologías y expresiones.",
            link: "/la_Olma",
            linkWord: "La Olma",
            imageSrc: "/assets/images/FOTO1.webp",
            imageAlt: "foto1"
        },
        {
            title: "Nuestras localizaciones",
            text: "El ámbito territorial en el que vamos a realizar principalmente nuestras actividades es la ciudad de Valladolid y provincia, pudiendo extenderse a toda Castilla y León.",
            link: "/activities",
            linkWord: "Actividades",
            imageSrc: "/assets/images/FOTO2.webp",
            imageAlt: "foto2"
        },
        {
            title: "Nuestro objetivo",
            text: "Queremos ser un punto de encuentro para todas aquellas personas motivadas por la protección del medio ambiente, proponiendo acciones medioambientales que sensibilicen a la población sobre la importancia de preservar nuestro entorno natural y educando a jóvenes y adultos en el cuidado y respeto por el medio ambiente.",
            link: "#",
            linkWord: "Únete",
            imageSrc: "/assets/images/FOTO3.webp",
            imageAlt: "foto3"
        },
    ]
}
