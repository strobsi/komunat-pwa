import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cdetail',
  templateUrl: './cdetail.page.html',
  styleUrls: ['./cdetail.page.scss'],
})
export class CdetailPage implements OnInit {

  candidate = {
    motto:"",
    name:"",
    birthdate:"",
    values:[],
    contents:[],
    events:[],
    uuid:""
  };

  events: [];

  constructor(private route: ActivatedRoute, public navCtrl: NavController) {
    
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
     this.candidate = JSON.parse(params["candidate"]);
     this.candidate.values.sort(function (a, b) {
      a.rating = Math.round(a.rating)
      b.rating = Math.round(b.rating)
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });
    this.candidate.contents.sort(function (a, b) {
      a.rating = Math.round(a.rating)
      b.rating = Math.round(b.rating)
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });
     console.log(this.candidate)
    });
  }

  public back() {
    console.log("Clicked back")
    this.navCtrl.pop();
  }
}
