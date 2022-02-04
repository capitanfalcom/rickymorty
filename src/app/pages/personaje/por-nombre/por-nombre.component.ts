import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje';
import { RymService } from 'src/app/services/rickandmorty/rym.service';

@Component({
  selector: 'app-por-nombre',
  templateUrl: './por-nombre.component.html',
  styleUrls: ['./por-nombre.component.scss']
})
export class PorNombreComponent implements OnInit {

  constructor(private pService: RymService) { }
  personajes: Personaje[] = [];
  rutas:string[] = [
    `nombre`, `especie`
  ]

  ngOnInit(): void {
    this.pService.allPersonaje().subscribe(resp =>{
      this.personajes =resp.results;
      console.log(this.personajes);
    });
  }

}
