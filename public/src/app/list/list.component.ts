import { Component, OnInit } from '@angular/core';
import { Player } from './../player';
import { TeamService } from './../team.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players: Array<Player> = [];

  constructor(private _teamService: TeamService) {
    this._teamService.playerObserver.subscribe((players) => {
      this.players = players;
    });

    this.getPlayers();
  }

  
  ngOnInit() {
  }
  
  getPlayers() {
    this._teamService.getPlayers();
  }
  
  delete(player) {
    console.log("kill", player);
    if(confirm(`Are you sure you want to kick ${player.name} from the team?`)) {
      this._teamService.deletePlayer(player);
    }else {
      console.log("bo")
    }
    this.getPlayers();
  }

}
