import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { timeout } from 'q';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
})
export class MatchesPage implements OnInit{

  teamLength = 0;
  
  matches = [
    { distance: 10.954451150103322,
      uuid: '00ujg0oq19HkhvpW40h7',
      candidate:
       { name: 'Steffen Schuldis',
         birthdate: '27.12.1993',
         list: '1',
         list_number: '2',
         district: 'Untertürkheim' } },
         { distance: 10.954451150103322,
          uuid: '00ujg0oq19HkhvpW40h7',
          candidate:
           { name: 'Simon Strobel',
             birthdate: '27.12.1993',
             list: '1',
             list_number: '2',
             district: 'Untertürkheim' } }
    ];

  //constructor(private navParams: NavParams, public alertController: AlertController) {}
  constructor(public alertController: AlertController) {}
 
  ngOnInit() {
    //this.matches = this.navParams.get("matches");
    document.querySelector('.progress').setAttribute("style","width:"+this.teamLength+"%;");
    this.matches.sort(function (a, b) {
      a.distance = Math.round(a.distance)
      b.distance = Math.round(b.distance)
      if (a.distance > b.distance) {
        return 1;
      }
      if (a.distance < b.distance) {
        return -1;
      }
      return 0;
    });
  }

  private updateUI() {
    if (this.teamLength != 0) {
      var count = this.teamLength / 5;
      var html = count + " / 20";
      document.querySelector('.indicatorTxt').innerHTML = html
    }
    else {
      document.querySelector('.indicatorTxt').innerHTML = "0 / 20"
    }
    document.querySelector('.progress').setAttribute("style","width:"+this.teamLength+"%;");

  }

  public toggleTeam(match,i) {
    console.log("Toggling team")
    const element =  document.querySelector('.match_'+i);
    element.classList.remove('animated','fadeInRight','delay-'+i+'s');
    if (match.isChecked) {
      element.classList.remove('animated','pulse','faster');
      this.teamLength = this.teamLength -5;
      this.updateUI();
    }
    else {                                                    
      element.classList.add('animated', 'pulse','faster');
      if (this.teamLength >= 95) {
        this.teamLength = 100;
        this.presentAlert();
      }
      else {
        this.teamLength = this.teamLength + 5;
        this.updateUI();
      }
    }
    match.isChecked = !match.isChecked;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Glückwunsch',
      subHeader: 'Team erstellt',
      message: 'Team behalten?',
      buttons: [
        {
          text: 'Nein, bearbeiten',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ja',
          handler: () => {
            console.log('Confirm Okay');

          }
        }
      ]
    });

    await alert.present();
  }
}
