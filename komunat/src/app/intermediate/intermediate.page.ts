import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-intermediate',
  templateUrl: './intermediate.page.html',
  styleUrls: ['./intermediate.page.scss'],
})
export class IntermediatePage implements OnInit {

  vData = {

  }

  constructor(private route: ActivatedRoute, public navCtrl: NavController) {

  }

  ngOnInit() {

  }
  
  public toContent() {
    console.log("To the content");
    let navigationExtras: NavigationExtras = {
      queryParams: {
      }
    };
    this.navCtrl.navigateForward(['content'], navigationExtras);
  }
}
