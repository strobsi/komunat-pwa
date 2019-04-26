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
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

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
  result = {values:[],contents:[]};
  page = 1;
  LAST = false;
  pdfObj = null;
  

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
  constructor(private route: ActivatedRoute, public alertController: AlertController, public navCtrl: NavController, public storage: Storage, private file: File, private fileopener: FileOpener) {
    
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
      const element =  document.querySelector('.match_'+i);
      this.matches.push(this.substitutes[i])
      this.substitutes.splice(i,1)
      this.pulseTeam();
      anime({
        targets: element,
        translateX: "150vw",
        rotate: 40,
        easing: 'easeInOutQuad',
        duration: 400
      });
    }
  }

  private loadResults(a) {
  
     var xhr = new XMLHttpRequest();
     var url = "https://komunat.de/result";
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
    this.setState(PSTATE.MATCHES);

    this.storage.get("matches").then( result => {
      if (!result) {
      } else {
        var a = JSON.parse(result);
       this.NO_TUTORIAL = false;
       this.result = a;
       this.page = 1;
       this.loadResults(a);
      }
  })
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
      if (a.distance > b.distance) {
        return 1;
      }
      if (a.distance < b.distance) {
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

  private generatePdf(){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    var docDefinition = {
        content: [
          { text: 'KOMUNAT - Ergebnis', style: 'header' },
          { text: new Date().toJSON().slice(0,10).replace(/-/g,'-') , alignment: 'right' },
   
          { text: 'Deine Ergebnisse', style: 'subheader' },
          { text: "Hier werden deine Ergebnisse, sowie die deines Teams (Top 20 KandidatInnen) angezeigt" },
   
          { text: 'Werte', style: 'subheader' },  
          {
            table: {
              body: [
                ['Platz', 'Wert',"Inhalt"],
              ]
            },
            pageBreak: 'after',
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
          },
          subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 15, 0, 0]
          }
        }
      }
      
    

      for(var i = 0; i < this.result.contents.length; i++) {
        if(i >= 12) {
          docDefinition.content[5].table.body.push(
            [ ""+i, "" ,this.result.contents[i].name],
            )
        } else {
        docDefinition.content[5].table.body.push(
          [ ""+i, this.result.values[i].name ,this.result.contents[i].name],
          )
        }
      }

      for(var x = 0; x < 20; x++) {

          var t =  { text: this.matches[x].name, style: 'subheader' }
          var m = { text: this.matches[x].motto }
          var d = {
                text: "",
                alignment: 'justify',
                columns: [
                  {
                    text:"Liste: " + this.getList(this.matches[x].list)
                  },
                  {
                    text:"Listenplatz: " +this.matches[x].list_number
                  },
                  {
                    text:"Wahlbezirk: " +this.getDistrict(this.matches[x].district)
                  }
                ]
          }

          var ta = {
            table: {
              body: [
                ['Platz', 'Wert',"Inhalt"],
              ]
            },
            pageBreak: 'after',
          }
        
        for(var i = 0; i < this.matches[x].contents.length; i++) {
          if(i >= 12) {
            ta.table.body.push(
              [ ""+i, "" ,this.matches[x].contents[i].name],
              )
          } else {
            ta.table.body.push(
            [ ""+i, this.matches[x].values[i].name, this.matches[x].contents[i].name],
            )
          }
        }
        docDefinition.content.push(t);
        docDefinition.content.push(m);
        docDefinition.content.push(d);
        docDefinition.content.push(ta);
      }
      this.pdfObj = pdfMake.createPdf(docDefinition).download("Komunat.pdf");

/*
    const div = document.getElementById("teamList");
    const options = {background:"white",height :div.clientHeight , width : div.clientWidth  };
    html2canvas(div,options).then((canvas)=>{
      console.log("Finished rendering")
      var data = canvas.toDataURL();
      var docDefinition = {
          content: [{
              image: data,
              width: div.clientWidth,
          }]
      };
      pdfMake.createPdf(docDefinition).download();    
    });
    */
  }

  private getList(l) {
    switch(l) { 
      case 1: { return "CDU"; } 
      case 2: { return "GRÜNE"; } 
      case 3: { return "SPD"; } 
      case 4: { return "Freie Wähler"; } 
      case 5: { return "FDP"; } 
      case 6: { return "SÖS"; } 
      case 7: { return "AfD"; } 
      case 8: { return "DIE LINKE"; } 
      case 9: { return "PIRATEN"; } 
      case 10: { return "Stadtisten"; } 
      case 11: { return "Junge Liste Stuttgart"; } 
      case 12: { return "ÖDP"; } 
      case 13: { return "DiB"; } 
      case 14: { return "Tierschutzpartei"; } 
      case 15: { return "Die PARTEI"; } 
      case 16: { return "BIG"; } 
      case 17: { return "SchUB"; } 
      case 18: { return "BZS23"; } 
      case 19: { return "Kein Fahrverbot in Stuttgart"; } 
      case 20: { return "FeLi"; }  
   } 
  }

  private getDistrict(l) {
    switch(l) { 
      case 1: { return "Mitte"; } 
      case 2: { return "Nord"; } 
      case 3: { return "Ost"; } 
      case 4: { return "Süd"; } 
      case 5: { return "West"; } 
      case 6: { return "Bad Cannstatt"; } 
      case 7: { return "Birkach"; } 
      case 8: { return "Botnang"; } 
      case 9: { return "Degerloch"; } 
      case 10: { return "Feuerbach"; } 
      case 11: { return "Hedelfingen"; } 
      case 12: { return "Möhringen"; } 
      case 13: { return "Mühlhausen"; } 
      case 14: { return "Münster"; } 
      case 15: { return "Obertürkheim"; } 
      case 16: { return "Plieningen"; } 
      case 17: { return "Sillenbuch"; } 
      case 18: { return "Stammheim"; } 
      case 19: { return "Untertürkheim"; } 
      case 20: { return "Vaihingen"; }  
      case 21: { return "Wangen"; }  
      case 22: { return "Weilimdorf"; }  
      case 23: { return "Zuffenhausen"; }  
   } 
  }

  public showEmailSend() {
    this.generatePdf();
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