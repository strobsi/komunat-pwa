import { Component } from '@angular/core';
import { NavController, Events } from "@ionic/angular";

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

  ngAfterViewInit(): void {
    var isiOSSafari = (navigator.userAgent.match(/like Mac OS X/i)) ? true: false;
    console.log("On iOS: " + isiOSSafari)
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
