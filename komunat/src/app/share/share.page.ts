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

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/result";
    //var data = JSON.stringify(a);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
              this.loader.style.opacity = 0.0;
        }
    };
    //xhr.send(data);
  }
}
