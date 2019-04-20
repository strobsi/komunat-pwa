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
     console.log(this.candidate)
    });
  }

  public back() {
    console.log("Clicked back")
    this.navCtrl.pop();
  }
}
