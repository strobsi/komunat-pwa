import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { AlertController, IonSlides } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";
import anime from 'animejs';
import 'hammerjs';
import {PSTATE} from '../utils/pstate';  
import { NavController } from "@ionic/angular";
import { NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
  NO_TUTORIAL;
  @ViewChild(IonSlides) slides: IonSlides;


  matches = [];
  result = {};
  page = 1;
  LAST = false;
  

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
  constructor(private route: ActivatedRoute, public alertController: AlertController, public navCtrl: NavController, public storage: Storage) {
    
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
  }

  private loadResults(a) {
  
     var xhr = new XMLHttpRequest();
     var url = "https://komunat.de/api/result";
     a.page = this.page;
     var data = JSON.stringify(a);
     xhr.open("POST", url, true);
     xhr.setRequestHeader("Content-Type", "application/json");
     xhr.onreadystatechange = () => {
         if (xhr.readyState === 4 && xhr.status === 200) {
           var data = JSON.parse(xhr.responseText);
            if (this.page == 1) {
              this.matches = data
            }
            else {
              if(data.length < 30) {
                this.LAST = true;
              }
              for (var i = 0; i < data.length; i++) {
                console.log("Appending to existing")
                this.matches.push(data[i]);
              }
            }
            this.sortMatches();
         }
     };
     xhr.send(data);
  }

  ngOnInit() {    
    this.storage.ready().then(() => {
      this.storage.get("tutorial_matches").then( result => {
        if (!result) {
            this.storage.set("tutorial_matches", true);
            this.NO_TUTORIAL = false;
            // Show tutorial!
        } else {
             this.NO_TUTORIAL = true;
            //
        }
    })
    });
    
    this.setState(PSTATE.MATCHES);
    this.route.queryParams.subscribe(params => {
      var a = JSON.parse(params["matches"]);
      this.result = a;
      this.page = 1;
      this.loadResults(a);
    });
  }


  public reject(i) {
    const element =  document.querySelector('.match_'+i);
    this.swipeOutLeft(element,i)
  }

  public accept(i) {
    const element =  document.querySelector('.match_'+i);
    this.swipeOutRight(element,i)
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
      var m = this.matches;
      setTimeout((function() {
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

  public showDetails(i) {
    // Show details of selected candidate
    var c;
    if (this.SHOW_STATE == 1) {
      c = this.matches[i];      
    } else if (this.SHOW_STATE == 2) {
      c = this.substitutes[i];
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
          candidate: JSON.stringify(c)
      }
    };
    this.navCtrl.navigateForward(['cdetail'], navigationExtras);
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
      a.distance = a.distance
      b.distance = b.distance
      if (a.distance < b.distance) {
        return 1;
      }
      if (a.distance > b.distance) {
        return -1;
      }
      return 0;
    });
  }

  public tutorialBtnClicked(i) {
    if (i == 0 ) {
      this.slides.slideNext();
    }
    else {
      this.NO_TUTORIAL = true;
    }
  }

  public loadMore() {
      this.page = this.page+1;
      this.loadResults(this.result);
  }

  public showEmailSend() {
    var team = this.matches.slice(0, 20);

    this.storage.ready().then(() => {
        this.storage.set("team", JSON.stringify(team));
        this.storage.set("result",JSON.stringify(this.result));
    });
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
          //team: JSON.stringify(team)
      }
    };
    this.navCtrl.navigateForward(['share'], navigationExtras);
  }
}