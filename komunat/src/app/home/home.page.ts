import { Component, ViewChild } from '@angular/core';
import { NavController, Events, IonSlides } from "@ionic/angular";
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

  constructor(public navCtrl: NavController, public storage: Storage, private ga: GoogleAnalytics) {

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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ga.trackView('home')
    .then(() => { 
      this.ga.trackEvent('userflow', 'Entered Komunat')
      .then(() => {
      })
    })
    .catch(e => console.log(e));
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
}
