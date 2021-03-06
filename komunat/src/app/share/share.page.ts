import { Component, OnInit } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { GoogleAnalytics } from "@ionic-native/google-analytics/ngx";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { NavigationExtras } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-share",
  templateUrl: "./share.page.html",
  styleUrls: ["./share.page.scss"],
})
export class SharePage implements OnInit {
  team = [];
  loader;
  email: string;
  matches = [];
  result = { values: [], contents: [] };
  pdfObj = null;
  spinnerVisible = false;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    private ga: GoogleAnalytics,
    public platform: Platform,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      if (this.platform.is("ios")) {
        var container = document.querySelector(".container");
        container.setAttribute("style", "margin-top: 5vh;");
      }

      this.presentAlertConfirm();

      this.ga
        .trackView("share")
        .then(() => {
          this.ga.trackEvent("userflow", "Reached Share").then(() => {});
        })
        .catch((e) => console.log(e));
    });

    this.spinnerVisible = false;
    this.storage.ready().then(() => {
      this.storage.get("result").then((result) => {
        if (!result) {
          console.log("error reading");
        } else {
          this.result = JSON.parse(result);
          this.storage.get("team").then((team) => {
            if (!result) {
              console.log("error reading 2");
            } else {
              this.matches = JSON.parse(team);
            }
          });
        }
      });
    });
  }

  feedback() {
    let navigationExtras: NavigationExtras = {
      queryParams: {},
    };
    this.navCtrl.navigateForward(["feedback"], navigationExtras);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: "Feedback?",
      message:
        "Willst du uns noch ein kurzes Feedback da lassen, damit wir uns für das nächste mal verbessern können?",
      buttons: [
        {
          text: "Nein, kein Feedback",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {},
        },
        {
          text: "Ja, gerne",
          handler: () => {
            this.feedback();
          },
        },
      ],
    });

    await alert.present();
  }

  public download() {
    this.spinnerVisible = true;
    this.generatePdf();
  }

  private generatePdf() {
    /*
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
                ['Ranking', 'Wert',"Inhalt"],
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
            [ ""+this.increase(i), "" ,this.result.contents[i].name],
            )
        } else {
        docDefinition.content[5].table.body.push(
          [ ""+this.increase(i), this.result.values[i].name ,this.result.contents[i].name],
          )
        }
      }

      for(var x = 0; x < 20; x++) {

          this.matches[x].values.sort(function (a, b) {
            a.rating = a.rating
            b.rating = b.rating
            if (a.rating < b.rating) {
              return 1;
            }
            if (a.rating > b.rating) {
              return -1;
            }
            return 0;
          });

          this.matches[x].contents.sort(function (a, b) {
            a.rating = a.rating
            b.rating = b.rating
            if (a.rating < b.rating) {
              return 1;
            }
            if (a.rating > b.rating) {
              return -1;
            }
            return 0;
          });

          var t =  { text: this.matches[x].name+"\n\n", style: 'subheader' }
          var m = { text: this.matches[x].motto+"\n\n" }
          var list = this.getList(parseInt(this.matches[x].list,10));
          var district = this.getDistrict(parseInt(this.matches[x].district,10));
          var d = {
                text: "",
                alignment: 'justify',
                columns: [
                  {
                    text:"Liste: " + list
                  },
                  {
                    text:"Listenplatz: " + this.matches[x].list_number
                  },
                  {
                    text:"Wahlbezirk: " + district +"\n\n"
                  }
                ]
          }

          var ta = {
            table: {
              body: [
                ['Ranking', 'Wert',"Inhalt"],
              ]
            },
            pageBreak: 'after',
          }
          
      
        for(var i = 0; i < this.matches[x].contents.length; i++) {
          if(i >= 12) {
            ta.table.body.push(
              [ ""+this.increase(i), "" ,this.matches[x].contents[i].name],
              )
          } else {
            ta.table.body.push(
            [ ""+this.increase(i), this.matches[x].values[i].name, this.matches[x].contents[i].name],
            )
          }
        }
        docDefinition.content.push(t);
        docDefinition.content.push(m);
        docDefinition.content.push(d);
        docDefinition.content.push(ta);
      }
      this.pdfObj = pdfMake.createPdf(docDefinition).download("Komunat.pdf");
      this.spinnerVisible = false;

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

  public increase(i) {
    var iPlus = i + 1;
    return iPlus;
  }

  public getList(l) {
    switch (l) {
      case 1: {
        return "CDU";
      }
      case 2: {
        return "GRÜNE";
      }
      case 3: {
        return "SPD";
      }
      case 4: {
        return "Freie Wähler";
      }
      case 5: {
        return "FDP";
      }
      case 6: {
        return "SÖS";
      }
      case 7: {
        return "AfD";
      }
      case 8: {
        return "DIE LINKE";
      }
      case 9: {
        return "PIRATEN";
      }
      case 10: {
        return "Stadtisten";
      }
      case 11: {
        return "Junge Liste Stuttgart";
      }
      case 12: {
        return "ÖDP";
      }
      case 13: {
        return "DiB";
      }
      case 14: {
        return "Tierschutzpartei";
      }
      case 15: {
        return "Die PARTEI";
      }
      case 16: {
        return "BIG";
      }
      case 17: {
        return "SchUB";
      }
      case 18: {
        return "BZS23";
      }
      case 19: {
        return "Kein Fahrverbot in Stuttgart";
      }
      case 20: {
        return "FeLi";
      }
    }
  }

  public getDistrict(l) {
    switch (l) {
      case 1: {
        return "Mitte";
      }
      case 2: {
        return "Nord";
      }
      case 3: {
        return "Ost";
      }
      case 4: {
        return "Süd";
      }
      case 5: {
        return "West";
      }
      case 6: {
        return "Bad Cannstatt";
      }
      case 7: {
        return "Birkach";
      }
      case 8: {
        return "Botnang";
      }
      case 9: {
        return "Degerloch";
      }
      case 10: {
        return "Feuerbach";
      }
      case 11: {
        return "Hedelfingen";
      }
      case 12: {
        return "Möhringen";
      }
      case 13: {
        return "Mühlhausen";
      }
      case 14: {
        return "Münster";
      }
      case 15: {
        return "Obertürkheim";
      }
      case 16: {
        return "Plieningen";
      }
      case 17: {
        return "Sillenbuch";
      }
      case 18: {
        return "Stammheim";
      }
      case 19: {
        return "Untertürkheim";
      }
      case 20: {
        return "Vaihingen";
      }
      case 21: {
        return "Wangen";
      }
      case 22: {
        return "Weilimdorf";
      }
      case 23: {
        return "Zuffenhausen";
      }
    }
  }
}
