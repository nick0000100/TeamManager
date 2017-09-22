import { Component, OnInit } from '@angular/core';
import { Player } from './../player';
import { TeamService } from './../team.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  player = new Player();

  constructor(private _teamService: TeamService, private _router: Router) { }

  ngOnInit() {
  }

  addPlayer() {
    this._teamService.createPlayer(this.player);
    this._router.navigate(['players', 'list']);
  }

}