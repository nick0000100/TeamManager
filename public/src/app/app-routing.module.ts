import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { StatusComponent } from './status/status.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/players/list'},
  {path: 'players/list', pathMatch: 'full', component: ListComponent},
  {path: 'status/game/:game', pathMatch: 'full', component: StatusComponent},
  {path: 'players/addplayer', pathMatch: 'full', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }