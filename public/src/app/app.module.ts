import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlayerNavComponent } from './player-nav/player-nav.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { StatusComponent } from './status/status.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TeamService } from './team.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlayerNavComponent,
    AddComponent,
    ListComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
		HttpModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
