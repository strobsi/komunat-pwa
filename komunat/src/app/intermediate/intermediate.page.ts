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
    this.route.queryParams.subscribe(params => {
      this.vData = JSON.parse(params["vData"]);
      console.log(this.vData)
     });
  }

  public toContent() {
    console.log("To the content");
    let navigationExtras: NavigationExtras = {
      queryParams: {
          vData: JSON.stringify(this.vData),
      }
    };
    this.navCtrl.navigateForward(['content'], navigationExtras);
  }
}
