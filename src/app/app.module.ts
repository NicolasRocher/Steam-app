import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JeuDetailsComponent } from './jeu-details/jeu-details.component';
import { FooterComponent } from './footer/footer.component';
import { JeuxService } from './jeux.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JeuDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JeuxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
