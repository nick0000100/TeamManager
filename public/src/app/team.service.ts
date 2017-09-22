import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';
import { BehaviorSubject } from 'rxjs/RX';

@Injectable()
export class TeamService {

  players = [];
  playerObserver = new BehaviorSubject(this.players);

  constructor(private _http: Http) { }

  createPlayer(player) {
    return this._http.post('/create', player)
    .subscribe(
      (response) => {
        this.players = response.json();
        this.playerObserver.next(this.players);
      },
      (err) => {
        console.log("Error has occured", err);
      }
    )
  }

  getPlayers() {
    return this._http.get('/getPlayers')
    .subscribe(
      (response) => {
        this.players = response.json();
        this.playerObserver.next(this.players);
      },
      (err) => {
        console.log("Error has occured", err);
      }
    )
  }

  deletePlayer(player) {
    return this._http.post('/deletePlayer', player)
    .subscribe(
      (response) => {
        this.players = response.json();
        this.playerObserver.next(this.players);
      },
      (err) => {
        console.log("Error has occured", err);
      }
    )
  }

  playPlayer(player, game) {
    let header = new Headers();
    header.append('Game', game);
    return this._http.post('/changePlay', player, {headers: header})
    .subscribe(
      (response) => {
        // this.players = response.json();
        // this.playerObserver.next(this.players);
      },
      (err) => {
        console.log("Error has occured", err);
      }
    )
  }

  notPlayer(player, game) {
    let header = new Headers();
    header.append('Game', game);
    return this._http.post('/changeNot', player, {headers: header})
    .subscribe(
      (response) => {
        // this.players = response.json();
        // this.playerObserver.next(this.players);
      },
      (err) => {
        console.log("Error has occured", err);
      }
    )
  }

  undecidedPlayer(player, game) {
    let header = new Headers();
    header.append('Game', game);
    return this._http.post('/changeUndecided', player, {headers: header})
    .subscribe(
      (response) => {
        // this.players = response.json();
        // this.playerObserver.next(this.players);
      },
      (err) => {
        console.log("Error has occured", err);
      }
    )
  }

}
