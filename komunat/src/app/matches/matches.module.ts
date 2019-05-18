import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MatchesPage } from './matches.page';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { IonicImageLoader } from 'ionic-image-loader';

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
    HttpClientModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    IonicImageLoader,
    RouterModule.forChild(routes)
  ],
  declarations: [MatchesPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MatchesPageModule {}
