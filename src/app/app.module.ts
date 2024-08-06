import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitacionComponent } from './invitacion/invitacion.component';
import { BackgroundComponent } from './components/background/background.component';
import { LandingComponent } from './components/landing/landing.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';

@NgModule({
  declarations: [
    AppComponent,
    InvitacionComponent,
    BackgroundComponent,
    LandingComponent,
    AudioPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
