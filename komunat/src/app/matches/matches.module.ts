import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatchesPage } from './matches.page';
import {ProgressBarModule} from "angular-progress-bar"

const routes: Routes = [
  {
    path: '',
    component: MatchesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MatchesPage]
})
export class MatchesPageModule {}
