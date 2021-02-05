import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {

  title:string;
  playlists:Array<any>

  constructor() { 
    this.title = "PLAYLIST";
    this.playlists = [
      {nom:'Preferits'},
      {nom:'Punk'},
      {nom: 'Rock alternatiu'}
    ]
  }

  crearPlaylist():void{

  }


}
