import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  team = [];
  loader;
  email: string;
  result = {};

  constructor(private route: ActivatedRoute, public navCtrl: NavController, public storage: Storage) {
    
  }

  ngOnInit() {
    this.loader = document.querySelector(".loader")
    this.loader.style.opacity = 0.0;
    this.storage.ready().then(() => {
      this.storage.get("result").then( result => {
        if (!result) {
            
        } else {
          this.result = JSON.parse(result);
          this.storage.get("team").then( team => {
            if (!result) {
                
            } else {
                this.team = JSON.parse(team);
                console.log(this.team.length)
            }
        })
        }
    })
    });
  }

  public sendMail() {
    console.log("Sending mail")
    this.loader.style.opacity = 1.0;

    var res = {
      receiver:this.email,
      team:this.team,
      result: this.result,
    }

    console.log(res);

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
