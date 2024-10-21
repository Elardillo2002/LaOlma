import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AdminEventsComponent } from './components/admin-events/admin-events.component';
import { CollaborateComponent } from './components/collaborate/collaborate.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LaOlmaComponent } from './components/la-olma/la-olma.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' }, // Principal page
  { path: "activities", component: ActivitiesComponent },
  { path: "admin", component: AdminEventsComponent },
  { path: "collaborate", component: CollaborateComponent },
  { path: "contact", component: ContactComponent },
  { path: "home", component: HomeComponent },
  { path: "la_Olma", component: LaOlmaComponent },
  { path: "notFound", component: NotFoundPageComponent },
  { path: "**", component: NotFoundPageComponent } // For not found pages (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
