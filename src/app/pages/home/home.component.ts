import { Component, OnInit } from '@angular/core';
import { Episodio } from 'src/app/interfaces/episodio';

import { RymService } from 'src/app/services/rickandmorty/rym.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private pService: RymService ) {

  }
  episodios: Episodio[] = [];
  rutas:string[] = [
    `home`,`nombre`, `especie`
  ]


  ngOnInit(): void {

    this.pService.allEpisodios().subscribe(resp =>{
      this.episodios =resp.results;
      console.log(this.episodios);
    });

  }

}
