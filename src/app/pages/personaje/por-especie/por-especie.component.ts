import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/interfaces/ubicacion';
import { RymService } from 'src/app/services/rickandmorty/rym.service';

@Component({
  selector: 'app-por-especie',
  templateUrl: './por-especie.component.html',
  styleUrls: ['./por-especie.component.scss']
})
export class PorEspecieComponent implements OnInit {

  constructor(private pService: RymService) { }
  ubicaciones: Ubicacion[] = [];
  rutas:string[] = [
    `nombre`, `especie`
  ]

  displayedColumns = ['id','name','type','dimension'];
  ngOnInit(): void {
    this.pService.allUbicaciones().subscribe(resp =>{
      this.ubicaciones =resp.results;
      console.log(this.ubicaciones);
    });
  }

}
