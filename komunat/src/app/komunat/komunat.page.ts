import { Component, OnInit } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";
import { NavigationExtras } from "@angular/router";
import anime from "animejs";
import "hammerjs";
import { Storage } from "@ionic/storage";
import { GoogleAnalytics } from "@ionic-native/google-analytics/ngx";

@Component({
  selector: "app-komunat",
  templateUrl: "./komunat.page.html",
  styleUrls: ["./komunat.page.scss"],
})
export class KomunatPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public storage: Storage,
    private ga: GoogleAnalytics
  ) {}
  ngOnInit() {
    this.platform.ready().then(() => {
      var version = this.detectIE();
      var top = document.querySelector(".top");

      if (version === false) {
        console.log("<s>IE/Edge</s>");
      } else if (version >= 12) {
        top.setAttribute("style", "margin-top: 60px;");
        console.log("<s>Edge " + version);
      } else {
        top.setAttribute("style", "margin-top: 60px;");
        console.log("<s>IE " + version);
      }
      this.ga
        .trackView("values")
        .then(() => {
          this.ga.trackEvent("userflow", "Started Komunat").then(() => {});
        })
        .catch((e) => console.log(e));
      if (this.platform.is("ios")) {
        var upper = document.querySelector(".upper");
        var lower = document.querySelector(".lower");
        if (this.iPhoneVersion() == "X-Xs") {
          upper.setAttribute("style", "height:43%;");
          lower.setAttribute("style", "height:43%;");
        } else if (this.iPhoneVersion() == "Xmax-Xr") {
          upper.setAttribute("style", "height:45%;");
          lower.setAttribute("style", "height:45%;");
        } else if (this.iPhoneVersion() == "5") {
          upper.setAttribute("style", "height:40%;");
          lower.setAttribute("style", "height:40%;");
        } else {
          upper.setAttribute("style", "height:43%;");
          lower.setAttribute("style", "height:43%;");
        }
      }
    });
    this.arr = this.initarr;
    this.newRound();
  }

  btn0Val;
  btn1Val;

  lesser = [];
  greater = [];
  comparer = [];
  insertIndex = 0;
  decisionCounter = 0;
  startedTimeStamp = 0;

  initarr = [
    [
      {
        id: 0,
        name: "Macht",
        rating: 0,
      },
      {
        id: 1,
        name: "Leistung",
        rating: 0,
      },
      {
        id: 2,
        name: "Genuss",
        rating: 0,
      },
      {
        id: 3,
        name: "Anregung",
        rating: 0,
      },
      {
        id: 4,
        name: "Selbstbestimmung",
        rating: 0,
      },
      {
        id: 5,
        name: "Sozial-ökologischer Weitblick",
        rating: 0,
      },
      {
        id: 6,
        name: "Soziale Beziehungen",
        rating: 0,
      },
      {
        id: 7,
        name: "Tradition",
        rating: 0,
      },
      {
        id: 8,
        name: "Pflichttreue",
        rating: 0,
      },
      {
        id: 9,
        name: "Sicherheit",
        rating: 0,
      },
    ],
  ];

  arr = [
    [
      {
        id: 0,
        name: "Macht",
        rating: 0,
      },
      {
        id: 1,
        name: "Leistung",
        rating: 0,
      },
      {
        id: 2,
        name: "Genuss",
        rating: 0,
      },
      {
        id: 3,
        name: "Anregung",
        rating: 0,
      },
      {
        id: 4,
        name: "Selbstbestimmung",
        rating: 0,
      },
      {
        id: 5,
        name: "sozial-ökologischer Weitblick",
        rating: 0,
      },
      {
        id: 6,
        name: "Soziale Beziehungen",
        rating: 0,
      },
      {
        id: 7,
        name: "Tradition",
        rating: 0,
      },
      {
        id: 8,
        name: "Pflichttreue",
        rating: 0,
      },
      {
        id: 9,
        name: "Sicherheit",
        rating: 0,
      },
    ],
  ];

  private iPhoneVersion() {
    var iHeight = window.screen.height;
    var iWidth = window.screen.width;

    if (iWidth === 414 && iHeight === 896) {
      return "Xmax-Xr";
    } else if (iWidth === 375 && iHeight === 812) {
      return "X-Xs";
    } else if (iWidth === 320 && iHeight === 480) {
      return "4";
    } else if (iWidth === 375 && iHeight === 667) {
      return "6";
    } else if (iWidth === 414 && iHeight === 736) {
      return "6+";
    } else if (iWidth === 320 && iHeight === 568) {
      return "5";
    } else if (iHeight <= 480) {
      return "2-3";
    }
    return "none";
  }
  private newRound(): void {
    var needsToBeSorted = false;
    // We iterate over the whole array and check if we have to sort sth.
    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].length > 1) {
        this.insertIndex = i;
        needsToBeSorted = true;
        break;
      }
    }
    if (needsToBeSorted) {
      // Let's get started to sort.
      var sortArray = this.arr[i];
      var v0 = this.getRandomIndex(sortArray);
      this.comparer = sortArray.slice(0);
      this.arr.splice(this.insertIndex, 1);
      this.sort(v0[0]);
    } else {
      // Finished overall sorting, since nothing has to be sorted anymore.
      this.calculateValue();
      const btn0 = document.querySelector(".opt0");
      const btn1 = document.querySelector(".opt1");
      btn0.parentNode.removeChild(btn0);
      btn1.parentNode.removeChild(btn1);
      //this.collapseAndRotate()
      this.sendResult(this.arr);
      this.btn1Val.name = "";
      this.btn0Val.name = "";
      this.decisionCounter = 0;
    }
  }

  // Sort will be called after triggering a new round adn after each decision
  private sort(fixed) {
    if (this.comparer.length > 0) {
      var v1 = this.getRandomIDExcept(fixed.id, this.comparer);
      this.btn0Val = fixed;
      this.btn1Val = v1;
    } else {
      this.completeRound();
    }
  }

  // onClick event of the buttons
  public selected(index) {
    if (this.decisionCounter == 0) {
      this.startedTimeStamp = new Date().getTime() / 1000;
      this.startedTimeStamp = parseInt(this.startedTimeStamp.toString());
    }
    this.decisionCounter++;
    if (index == 0) {
      anime({
        targets: document.getElementsByClassName("upper"),
        scale: 1.05,
        easing: "easeInOutQuad",
        duration: 200,
        direction: "alternate",
      });
      // Push the value to the lesser array
      this.lesser.push(this.btn1Val);
      //this.transition(0)
    } else {
      anime({
        targets: document.getElementsByClassName("lower"),
        scale: 1.05,
        easing: "easeInOutQuad",
        duration: 200,
        direction: "alternate",
      });
      // Push the value to the greater array
      this.greater.push(this.btn1Val);
      //this.transition(1)
    }
    // Finally, remove the value from the comparer array and sort again
    this.removeById(this.btn1Val.id);
    this.sort(this.btn0Val);
  }

  // When finishing comparing one value, we "finish" the round and sort in the related arrays
  private completeRound() {
    // Add the lesser array
    if (this.lesser.length > 0) {
      if (this.lesser.length > 1) {
        this.arr.splice(this.insertIndex, 0, this.lesser);
      } else {
        this.arr.splice(this.insertIndex, 0, this.lesser[0]);
      }
    }
    // Add the comparer value between the lesser and greater
    this.arr.splice(this.insertIndex, 0, this.btn0Val);

    // Add the greater array after the comparer
    if (this.greater.length > 0) {
      if (this.greater.length > 1) {
        this.arr.splice(this.insertIndex, 0, this.greater);
      } else {
        this.arr.splice(this.insertIndex, 0, this.greater[0]);
      }
    }
    // Clean up values again and start a new round
    this.lesser = [];
    this.greater = [];
    //deepLog(arr,"TopArray")
    this.newRound();
  }
  /*
// Helper function to monitor the array
function deepLog(arr,name) {
  
  console.log("--------"+name+"-------------")
  console.log("--------"+arr.length+"-------------")
  for (var i = 0; i < arr.length; i++) {
      console.log(arr[i])
  }
  console.log("-------------------------------")
}
*/
  // Get random object out of itm as touple with index
  private getRandomIndex(itm) {
    var rand = Math.floor(Math.random() * Math.floor(itm.length));
    return [itm[rand], rand];
  }
  // Used to get a random object except an specified one. ( for getting unused values )
  private getRandomIDExcept(except, arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id == except) {
        arr.splice(i, 1);
      }
    }
    var num = Math.floor(Math.random() * (arr.length - 1 + 1));
    return arr[num];
  }
  // Remove the value from the comparer array, whenever it is already compared
  private removeById(id) {
    for (var i = 0; i < this.comparer.length; i++) {
      if (this.comparer[i].id == id) {
        this.comparer.splice(i, 1);
      }
    }
  }

  // Calculating the final result
  private calculateValue() {
    var rank = this.arr.length - 1;
    for (var i = 0; i < this.arr.length; i++) {
      this.arr[i]["rating"] = rank;
      rank--;
    }
  }

  // Send the calculated result of the user to the backend
  private sendResult(a) {
    var res = {
      metadata: {},
      values: {},
      contents: {},
    };
    // Setup some metadata format
    var finished = new Date().getTime() / 1000;
    finished = parseInt(finished.toString());
    res.metadata = {
      isCandidate: false,
      valueStarted: this.startedTimeStamp,
      valueFinished: finished,
      contentStarted: 0,
      contentFinished: 0,
      valueDecisions: this.decisionCounter,
      contentDecisions: 0,
    };

    // Append the values
    res.values = a;
    var data = JSON.stringify(res);
    this.moveOn(data);
  }

  moveOn(data) {
    this.storage.ready().then(() => {
      this.storage.set("values", data);
      let navigationExtras: NavigationExtras = {
        queryParams: {},
      };
      this.navCtrl.navigateForward(["intermediate"], navigationExtras);
    });
  }

  detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }

    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf("rv:");
      return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }

    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
    }

    // other browser
    return false;
  }
}
