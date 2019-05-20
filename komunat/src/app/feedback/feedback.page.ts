import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  fAge = ""
  fZip = ""
  fMail = ""
  fComment = ""
  fGender = ""

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  public submitFeedback() {
    console.log("Feedback")
    var xhr = new XMLHttpRequest();
    var url = "https://komunat.de/api/feedback";

    var f = {
      age:this.fAge,
      zip:this.fZip,
      gender: this.fGender,
      comment: this.fComment
    }
    var data = JSON.stringify(f);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert("Vielen Dank für dein Feedback!");
        } else {
          alert("Ups, da ging was schief")
        }
    };
    xhr.send(data);
  }

  public submitNewsletter() {
    var xhr = new XMLHttpRequest();
    var url = "https://komunat.de/api/newsletter";
    var f = {
      mail:this.fMail
    }
    var data = JSON.stringify(f);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert("Vielen Dank, du wurdest unserem Newsletter hinzugefügt");
        } 
    };
    xhr.send(data); 
  }
}
