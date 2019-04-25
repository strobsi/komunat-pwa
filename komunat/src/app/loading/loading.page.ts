import { Component, OnInit } from '@angular/core';
import { NavController, Events } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(public navCtrl: NavController, private route: ActivatedRoute) {
  }

  spinner;

  ngOnInit() {
      setTimeout(() => 
        {
          this.moveOn()            
        },
        5000);
  }

// Moving on to matches
moveOn() {
  console.log("Moving on")
  let navigationExtras: NavigationExtras = {
    queryParams: {
    }
  };
  this.navCtrl.navigateForward(['matches'],navigationExtras);
}
}
