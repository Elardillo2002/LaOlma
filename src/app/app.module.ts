import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StickyPhotoComponent } from './components/sticky-photo/sticky-photo.component';
import { DescriptionComponent } from './components/description/description.component';
import { LastMeetingsComponent } from './components/last-meetings/last-meetings.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LaOlmaComponent } from './components/la-olma/la-olma.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { CollaborateComponent } from './components/collaborate/collaborate.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapsComponent } from './components/maps/maps.component';
import { PartnerCompaniesComponent } from './components/partner-companies/partner-companies.component';
import { HonoraryMemberComponent } from './components/honorary-member/honorary-member.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StickyPhotoComponent,
    DescriptionComponent,
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
    HonoraryMemberComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}