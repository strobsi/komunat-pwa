import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, IonSlides } from "@ionic/angular";
import { Storage } from '@ionic/storage';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonSlides) slides: IonSlides;

  local = null;
  resultLength = 0;

  constructor(public navCtrl: NavController, public storage: Storage, private ga: GoogleAnalytics, public platform: Platform) {

    this.storage.ready().then(() => {
      this.storage.clear();
    });
  }
  goToKomunat(e): void{
    console.log("Clicked on button ")
    this.navCtrl.navigateForward('/komunat');
  }

  slideToNext(): void {
      this.slides.slideNext();
  }

  private loadResultLength() {  
    var xhr = new XMLHttpRequest();
    var url = "https://komunat.de/api/results";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          var data = JSON.parse(xhr.responseText);
          this.resultLength = data.count;
        }
    };
    xhr.send();
 }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.platform.ready().then((readySource) => {
      this.ga.trackView('home')
      .then(() => { 
        this.ga.trackEvent('userflow', 'Entered Komunat')
        .then(() => {
        })
      })
      .catch(e => console.log(e));
      if (this.platform.is('ios')) {
       if(this.iPhoneVersion() == "5") {
        var heads = document.querySelectorAll("#headline");
        var texts = document.querySelectorAll("#text");
        for(var i = 0; i < heads.length; i++) {
          heads[i].setAttribute("style", "font-size:14px;");
        }
        for(var i = 0; i < texts.length; i++) {
          texts[i].setAttribute("style", "font-size:11px;");
        }
      }
      }
    });
    //this.loadResultLength();
  }

  ngAfterViewInit(): void {
    var isiOSSafari = (navigator.userAgent.match(/like Mac OS X/i)) ? true: false;
    console.log("On iOS: " + isiOSSafari)
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }


  private iPhoneVersion() {
    var iHeight = window.screen.height;
    var iWidth = window.screen.width;
  
    if (iWidth === 414 && iHeight === 896) {
      return "Xmax-Xr";
    }
    else if (iWidth === 375 && iHeight === 812) {
      return "X-Xs";
    }
    else if (iWidth === 320 && iHeight === 480) {
      return "4";
    }
    else if (iWidth === 375 && iHeight === 667) {
      return "6";
    }
    else if (iWidth === 414 && iHeight === 736) {
      return "6+";
    }
    else if (iWidth === 320 && iHeight === 568) {
      return "5";
    }
    else if (iHeight <= 480) {
      return "2-3";
    }
    return 'none';
  }
}
