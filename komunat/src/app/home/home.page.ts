import { Component } from '@angular/core';
import { NavController, Events } from "@ionic/angular";
import { KomunatPage } from '../komunat/komunat.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToKomunat(e): void{
    console.log("Clicked on button ")
    this.navCtrl.navigateForward('/komunat');
  }

}
