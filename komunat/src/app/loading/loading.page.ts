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

    this.route.queryParams.subscribe(params => {
      var r = JSON.parse(params["result"]);
      this.spinner = document.querySelector(".spinner")
      this.spinner.style.opacity = "1.0"
      // Send result 

      setTimeout(() => 
        {
          this.moveOn(JSON.stringify(r))            
        },
        5000);

    });
  }

// Moving on to matches
moveOn(data) {
  console.log("Moving on")
  let navigationExtras: NavigationExtras = {
    queryParams: {
        matches: data
    }
  };
  this.navCtrl.navigateForward(['matches'],navigationExtras)
        .catch(err => {
            // Handle here
            console.log("Error here")
        });
}
}
