import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import anime from 'animejs';
import 'hammerjs';
import {PSTATE} from '../utils/pstate';  
import { NavController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.page.html',
  styleUrls: ['./matches.page.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('0.6s cubic-bezier(.4, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'translateY(-10in)', opacity: 0, height: '*' }),
        animate('0.4s cubic-bezier(.4, -0.6, 0.2, 0.6)', 
         style({ 
           transform: 'scale(0.5)', opacity: 0, 
           height: '0px', margin: '0px' 
         })) 
      ])
    ])
  ]
})

export class MatchesPage implements OnInit {

  SHOW_STATE;

  matches = [
    { distance: 10.054451150103322,
      uuid: '00ujlsqbdmfxBgI0M0h7',
      candidate:
       { name: 'Steffen Schuldis',
         birthdate: '27.12.1993',
         list: '1',
         list_number: '2',
         district: 'Untertürkheim' } },
         { distance: 10.954451150103322,
          uuid: '00ujlsq5ohzh98lEd0h7',
          candidate:
           { name: 'Simon Strobel',
             birthdate: '27.12.1993',
             list: '1',
             list_number: '2',
             district: 'Untertürkheim' } },
             { distance: 10.954451150103322,
              uuid: '00ujlsq5ohzh98lEd0h7',
              candidate:
               { name: 'Simon Strobel',
                 birthdate: '27.12.1993',
                 list: '1',
                 list_number: '2',
                 district: 'Untertürkheim' } }
    ];
  

  teamLength = 0;
  team = [];
  substitutes = [];
  present_title = "DEIN ERGEBNIS";
  
    // Share options
    share = {
      displayNames: true,
      config: [{
        facebook: {
          socialShareUrl: 'https://fluster.io',
          socialSharePopupWidth: 400,
          socialSharePopupHeight: 400
        }
      },{
        twitter: {
          socialShareUrl: 'https://fluster.io',
          socialSharePopupWidth: 300,
          socialSharePopupHeight: 400
        }
      },{
        linkedin: {
          socialShareUrl: 'https://fluster.io'
        }
      },{
        email: {
          socialShareTo: '',
          socialShareBody: 'https://fluster.io'
        }
      }, {
        whatsapp: {
          socialShareText: 'Mein Komunat Ergebnis',
          socialShareUrl: 'https://fluster.io'
        }
      }]
    };
  constructor(private route: ActivatedRoute, public alertController: AlertController, public navCtrl: NavController) {
    
  }

  swipedRight(e,i) {
    this.accept(i);
  } 

  swipedLeft(e,i) {
    this.reject(i);
  } 

  backToMatches(t,i) {
    if (t == 0) {
      // Coming from subs
      this.matches.push(this.substitutes[i])
      this.substitutes.splice(i,1)
    }
    else {
        // Coming from Team
        this.matches.push(this.team[i])
        this.team.splice(i,1)
        this.teamLength = this.teamLength-5;
        this.updateUI()
    }
  }
  

  ngOnInit() {
    this.setState(PSTATE.MATCHES);
    this.route.queryParams.subscribe(params => {
     this.matches = JSON.parse(params["matches"]);
     console.log(this.matches)
    });

    document.querySelector('.progress').setAttribute("style","width:"+this.teamLength+"%;");
    this.sortMatches();
    
    const elem = document.getElementsByTagName('web-social-share');
    if (elem && elem.length > 0) {
      //elem[0].share = this.share;
    }
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

  public reject(i) {
    console.log("Remove from team")
    const element =  document.querySelector('.match_'+i);
    this.swipeOutLeft(element,i)
  }

  public accept(i) {
    console.log("Add to team")
    const element =  document.querySelector('.match_'+i);
    this.swipeOutRight(element,i)
    if (this.teamLength >= 95) {
      this.teamLength = 100;
      this.updateUI();
      this.presentAlert();
    }
    else {
      this.teamLength = this.teamLength + 5;
      this.updateUI();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Glückwunsch',
      subHeader: 'Dein Team ist komplett',
      message: 'Willst du dein Team nochmal bearbeiten oder weiter?',
      buttons: [
        {
          text: 'Ja, bearbeiten',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Nein, weiter',
          handler: () => {
            console.log('Confirm Okay');
            let navigationExtras: NavigationExtras = {
              queryParams: {
              }
            };
            this.navCtrl.navigateForward(['share'], navigationExtras);
          }
        }
      ]
    });

    await alert.present();
  }
  private swipeOutLeft(elem,i) {
    this.pulseSubstitute();
    anime({
      targets: elem,
      translateX: "-150vw",
      rotate: -40,
      easing: 'easeInOutQuad',
      duration: 400
    });
    var m = this.matches;
    var s = this.substitutes;
    setTimeout((function() {
      s.push(m[i])
      m.splice(i,1)
    }),220);
}

  private swipeOutRight(elem,i) {
      this.pulseTeam();
      anime({
        targets: elem,
        translateX: "150vw",
        rotate: 40,
        easing: 'easeInOutQuad',
        duration: 400
      });
      var t = this.team;
      var m = this.matches;
      setTimeout((function() {
        t.push(m[i]);
        m.splice(i,1)
      }),220);
  }

  backClicked() {
    this.setState(PSTATE.MATCHES)
    var subs = document.querySelector(".substitutesBtn");
    var lbl = document.querySelector(".mainLbl");
    anime({
      targets: [subs],
      opacity: 1,
      easing: 'easeInOutQuad',
      duration: 200,
      complete: function(){
        var back = document.querySelector(".backBtn");
        var subs = document.querySelector(".substitutesBtn");
        lbl.removeAttribute("hidden");
        subs.removeAttribute("hidden");
        back.setAttribute("hidden","false");
      }
    });
    // TODO hide subs and show matches
    console.log("Substitute Length: " + this.team.length)
  }

  showSubstitutes() {
    this.setState(PSTATE.SUBS)
    var subs = document.querySelector(".substitutesBtn");
    var lbl = document.querySelector(".mainLbl");
    anime({
      targets: [subs],
      opacity: 0,
      easing: 'easeInOutQuad',
      duration: 200,
      complete: function(){
        var back = document.querySelector(".backBtn");
        var subs = document.querySelector(".substitutesBtn");
        subs.setAttribute("hidden","true");
        lbl.setAttribute("hidden","true");
        back.removeAttribute("hidden");
      }
    });
    // TODO: show subs and hide matches
  }

  showTeam() {
    this.setState(PSTATE.TEAM)
    var subs = document.querySelector(".substitutesBtn");
    var team = document.querySelector(".teamBtn");
    anime({
      targets: [subs,team],
      opacity: 0,
      easing: 'easeInOutQuad',
      duration: 200,
      complete: function(){
        var back = document.querySelector(".backBtn");
        var subs = document.querySelector(".substitutesBtn");
        subs.setAttribute("hidden","true");
        back.removeAttribute("hidden");
      }
    });
    // TODO: show subs and hide matches
  }

  public pulseTeam() {
    var elem = document.querySelector(".teamBtn")
    anime({
      targets: elem,
      scale: 1.1,
      color: "#59BCED",
      easing: 'easeInOutQuad',
      translateY: "-1vh",
      duration: 200,
      direction: 'alternate',
    });
  }

  public pulseSubstitute() {
    var elem = document.querySelector(".substitutesBtn")
    anime({
      targets: elem,
      scale: 1.1,
      color: "#59BCED",
      translateY: "-1vh",
      easing: 'easeInOutQuad',
      duration: 200,
      direction: 'alternate',
    });
  }

  private setState(s) {
    this.SHOW_STATE = s;
    if (s == PSTATE.MATCHES) {
      this.present_title = "DEIN ERGEBNIS"
      this.sortMatches();
    }
    else if (s == PSTATE.SUBS) {
      this.present_title = "DEINE ERSATZBANK"
    }
    else {
      this.present_title = "DEIN TEAM"
    }
  }

  private sortMatches() {
    this.matches.sort(function (a, b) {
      a.distance = Math.round(a.distance)
      b.distance = Math.round(b.distance)
      if (a.distance < b.distance) {
        return 1;
      }
      if (a.distance > b.distance) {
        return -1;
      }
      return 0;
    });
  }
}
