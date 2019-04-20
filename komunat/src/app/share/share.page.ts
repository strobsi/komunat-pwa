import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  team;
  loader;
  email: string;

  constructor(private route: ActivatedRoute, public navCtrl: NavController) {
    
  }

  ngOnInit() {
    this.loader = document.querySelector(".loader")
    this.loader.style.opacity = 0.0;
    this.route.queryParams.subscribe(params => {
      this.team = JSON.parse(params["team"]);
      console.log(this.team)
     });
  }

  public sendMail() {
    console.log("Sending mail")
    this.loader.style.opacity = 1.0;

    var res = {
      receiver:this.email,
      matches:this.team,
    }

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/result/share";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Successfully stored values, continue with animation

          }
    };
    var data = JSON.stringify(res);
    xhr.send(data);
  }
}
