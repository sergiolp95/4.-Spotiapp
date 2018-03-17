import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlSpotify = 'https://api.spotify.com/v1/';
  token = 'BQDqcAj4P42jZ0nJ7lqFKarTIHVVo6RH5bl5v-31pVC0DEMD0eUoRrbDgrHPK3hlHqOln7rwEAjSc9fwAEs';

  clientId = '86cfb2752b314f598dee31303b8b1a7a';
  clientSecret = 'b52ccac1ce314b8b8ec5607adaab6d08';


  constructor(public http: HttpClient) {
    console.log('Servicio de Spotify listo');
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'authorization' : 'Bearer ' + this.token
    });
    return headers;
  }



  login() {
    // let authorizationTokenUrl = `https://accounts.spotify.com/api/token`;
    const authorizationTokenUrl = `/api/token`;

    const header = new Headers();
    header.append('Authorization', 'Basic  ' + btoa(this.clientId + ':' + this.clientSecret));
    header.append('Content-Type', 'application/x-www-form-urlencoded;');

    const options = new RequestOptions({ headers: header });
    const body = 'grant_type=client_credentials';


    return this.http.post(authorizationTokenUrl, body, options)
      .map(data => data.json())
      .do(token => {
        this.token = token.access_token;
        this.tokenType = token.token_type;
      }, error => console.log(error));
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
