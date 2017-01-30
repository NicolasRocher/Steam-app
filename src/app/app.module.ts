import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JeuDetailsComponent } from './jeu-details/jeu-details.component';
import { FooterComponent } from './footer/footer.component';
import { JeuxService } from './jeux.service';
import { AccueilComponent } from './accueil/accueil.component';
import { JeuComponent } from './jeu/jeu.component';

const appRoutes: Routes = [
  {path: 'boutique', component: JeuDetailsComponent},
  {path: 'boutique/:id', component: JeuComponent },
  {path: '', component: AccueilComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JeuDetailsComponent,
    AccueilComponent,
    JeuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JeuxService],
  bootstrap: [AppComponent]
})
export class AppModule { }




