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

  constructor(private category: JeuxService) { 
  }

  ngOnInit() {
    this.categories = this.category.getJeux();
    
  }

}
