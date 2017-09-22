import { Component, OnInit } from '@angular/core';
import { Player } from './../player';
import { TeamService } from './../team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  players: Array<Player> = [];
  game: string;

  constructor(private _teamService: TeamService, private _route: ActivatedRoute) {
    this._teamService.playerObserver.subscribe((players) => {
      this.players = players;
    });

    this._route.paramMap.subscribe( params => {
      this.game = params.get('game');
    });

    this.getPlayers();
  }

  ngOnInit() {
  }


  getPlayers() {
    this._teamService.getPlayers();
  }

  //Change the status to play
  play(player) {
    this._teamService.playPlayer(player, this.game);
    this.getPlayers();
  }

  not(player) {
    this._teamService.notPlayer(player, this.game);
    this.getPlayers();
  }

  undecide(player) {
    this._teamService.undecidedPlayer(player, this.game);
    this.getPlayers();
  }

}
