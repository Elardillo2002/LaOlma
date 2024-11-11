import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ActivitiesComponent } from './components/activities/activities.component';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';
import { CollaborateComponent } from './components/collaborate/collaborate.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { FutureEventsComponent } from './components/future-events/future-events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HonoraryMemberComponent } from './components/honorary-member/honorary-member.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LaOlmaComponent } from './components/la-olma/la-olma.component';
import { LastMeetingsComponent } from './components/last-meetings/last-meetings.component';
import { MapsComponent } from './components/maps/maps.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PartnerCompaniesComponent } from './components/partner-companies/partner-companies.component';
import { PastEventsComponent } from './components/past-events/past-events.component';
import { PayMethodsComponent } from './components/pay-methods/pay-methods.component';
import { StickyPhotoComponent } from './components/sticky-photo/sticky-photo.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminEventsComponent,
    HomeComponent,
    NavbarComponent,
    StickyPhotoComponent,
    CarouselComponent,
    LastMeetingsComponent,
    UpcomingComponent,
    FooterComponent,
    NotFoundPageComponent,
    LanguagesComponent,
    LaOlmaComponent,
    ActivitiesComponent,
    CollaborateComponent,
    ImageCardComponent,
    ContactComponent,
    MapsComponent,
    PartnerCompaniesComponent,
    HonoraryMemberComponent,
    FutureEventsComponent,
    PastEventsComponent,
    PayMethodsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}