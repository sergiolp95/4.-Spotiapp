import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlSpotify = 'https://api.spotify.com/v1/';
  token = 'BQCv1IJysjeXjL6BtuT_Tm7FXv6aSfLfq9M9IJr2Jmnf6dt4Mo_WIi1lWmMVjmlqIgCoo2xvvAFJa0kpcac';

  constructor(public http: HttpClient) {
    console.log('Servicio de Spotify listo');
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization' : 'Bearer ' + this.token
    });
    return headers;
  }

  getTop(id: string) {
    // const url = this.urlSpotify + 'artists/' + id + '/top-tracks?country=ES';
    const url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;

    const headers = this.getHeaders();

    return this.http.get(url, {headers});
  }

  getArtista(id: string) {
  // const url = this.urlSpotify + 'artists/' + id;
  const url = `${this.urlSpotify}artists/${id}`;

  const headers = this.getHeaders();

  return this.http.get(url, {headers});

  // .map( (respuesta: any) => {
  //   this.artistas = respuesta.artists.items
  //   return this.artistas;
  // });


  }

  getArtistas(termino: string) {

      // no me funciona con badticks y ${{termino}}
    // const url = this.urlSpotify + 'search?query=' + termino + '&type=artist&offset=0&limit=20';
    const url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;

    const headers = this.getHeaders();

    return this.http.get(url, {headers})
    .map( (respuesta: any) => {
      this.artistas = respuesta.artists.items;
      return this.artistas;
    });

  }

}
