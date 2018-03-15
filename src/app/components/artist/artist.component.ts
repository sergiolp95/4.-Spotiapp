import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any;
  pistas: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    public _spotify: SpotifyService) {

      this.artista = {};
      this.pistas = [];
     }

  ngOnInit() {
    this.activatedRoute.params
    .map(params => params['id_artist'])
    .subscribe(id_artist => {
      console.log(id_artist);


      this._spotify.getArtista(id_artist)
      .subscribe(artista => {
        console.log(artista);
        this.artista = artista;

        this._spotify.getTop(id_artist)
        .map((resp: any) => resp.tracks)
        .subscribe(pistas => {
          console.log(pistas);
          this.pistas = pistas;
        });
      });
    });
  }
}
