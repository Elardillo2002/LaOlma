import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LaOlmaComponent } from './components/la-olma/la-olma.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { CollaborateComponent } from './components/collaborate/collaborate.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' }, // Principal page
  { path: "home", component: HomeComponent },
  { path: "la_Olma", component: LaOlmaComponent },
  { path: "activities", component: ActivitiesComponent },
  { path: "collaborate", component: CollaborateComponent },
  { path: "contact", component: ContactComponent },
  { path: "notFound", component: NotFoundPageComponent },
  { path: "**", component: NotFoundPageComponent } // For not found pages (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
