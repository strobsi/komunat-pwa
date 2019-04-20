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

      this.sendResult(r)

    });

  }

// Send the calculated result of the user to the backend
private sendResult(a) {

  console.log("Showing result")
  
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:3000/result";
  var data = JSON.stringify(a);

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  setTimeout(() => 
        {
          this.moveOn(xhr.responseText)            
        },
        5000);
  xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        setTimeout(() => 
        {
          this.moveOn(xhr.responseText)            
        },
        5000);
      }
  };
  xhr.send(data);
}

// Moving on to matches
moveOn(data) {
  console.log("Moving on")
  let navigationExtras: NavigationExtras = {
    queryParams: {
        vData: data
    }
  };
  this.navCtrl.navigateForward(['matches'], navigationExtras);
}

}
