import { Component, OnInit } from '@angular/core';
import { JeuxService } from '../jeux.service';

@Component({
  moduleId : "moduleId",
  selector: 'app-jeu-details',
  templateUrl: './jeu-details.component.html',
  styleUrls: ['./jeu-details.component.css']
})

export class JeuDetailsComponent implements OnInit {
  categories: any;
  jeux: any;

  constructor(private category: JeuxService, private games: JeuxService) { 
  }

  ngOnInit() {
    this.categories = this.category.getGenre();
    this.jeux = this.games.getJeux();
    
  }

}
