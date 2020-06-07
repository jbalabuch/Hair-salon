import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UslugiComponent } from './uslugi.component';
import { CennikComponent } from './cennik.component';
import { MenuComponent } from './menu.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { ContactComponent } from './contact.component';
import { OnasComponent } from './onas.component';
import { MapsComponent } from './maps.component';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'maps',
    component: MapsComponent,
  },
  {
    path: 'uslugi',
    component: UslugiComponent,
  },
  {
    path: 'cennik',
    component: CennikComponent,
  },
  {
    path: 'o-nas',
    component: OnasComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCRFKw17IU7vmfbHuoLzCvEiY7Aud1TcmI',
    }),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    UslugiComponent,
    CennikComponent,
    ContactComponent,
    OnasComponent,
    MenuComponent,
    PageNotFoundComponent,
    MapsComponent,
  ],
  bootstrap: [AppComponent, MapsComponent],
})
export class AppModule {}
