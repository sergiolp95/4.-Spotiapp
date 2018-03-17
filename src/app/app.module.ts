import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Servicios
import { SpotifyService } from './services/spotify.service';

// Pipes
import { NoImgPipe } from './pipes/no-img.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { DomseguroPipe2 } from './pipes/domseguro.pipe2';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NoImgPipe,
    ArtistComponent,
    DomseguroPipe,
    DomseguroPipe2,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
