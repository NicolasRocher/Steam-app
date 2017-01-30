import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JeuxService } from '../jeux.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})


export class JeuComponent implements OnInit {
  jeux: any;
  id: any;
  idf: any;
  fiche: any;
  img1: any;
  cover: any;


  constructor(private category: JeuxService, private route: ActivatedRoute) { }

  ngOnInit() {
       
    this.id = this.route.snapshot.params['id'];
    this.jeux = this.category.getJeux();
    this.idf = this.id;
    this.fiche = this.jeux[this.idf];
    this.img1 = this.fiche.screenshots[0].url;
    this.cover = this.fiche.cover.url;
  }

}