import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RymService {

  private apirURL: string = 'https://rickandmortyapi.com/api';

  constructor(
    private http: HttpClient
    ) { }


    allPersonaje( ): Observable<any> {
      const url = `${ this.apirURL }/character`;
      return this.http.get(url);
    }

    allUbicaciones( ): Observable<any> {
      const url = `${ this.apirURL }/location`;
      return this.http.get(url);
    }

    allEpisodios( ): Observable<any> {
      const url = `${ this.apirURL }/episode`;
      return this.http.get(url);
    }
}
