(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{L6id:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),a=u("Ip0R"),c=u("m4HQ"),b=function(){function n(n,l,u){var t=this;this.navCtrl=n,this.storage=l,this.ga=u,this.local=null,this.resultLength=0,this.storage.ready().then(function(){t.storage.clear()})}return n.prototype.goToKomunat=function(n){console.log("Clicked on button "),this.navCtrl.navigateForward("/komunat")},n.prototype.slideToNext=function(){this.slides.slideNext()},n.prototype.loadResultLength=function(){var n=this,l=new XMLHttpRequest;l.open("GET","https://komunat.de/api/results",!0),l.setRequestHeader("Content-Type","application/json"),l.onreadystatechange=function(){if(4===l.readyState){var u=JSON.parse(l.responseText);n.resultLength=u.count}},l.send()},n.prototype.ngOnInit=function(){var n=this;this.ga.trackView("home").then(function(){n.ga.trackEvent("userflow","Entered Komunat").then(function(){})}).catch(function(n){return console.log(n)}),this.loadResultLength()},n.prototype.ngAfterViewInit=function(){var n=!!navigator.userAgent.match(/like Mac OS X/i);console.log("On iOS: "+n);var l=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",l+"px")},n}(),s=u("iw74"),p=t.nb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:80vh;max-height:80vh;width:100%;display:inline-block;margin-top:10vh}.goBtn[_ngcontent-%COMP%]{bottom:10vh;height:8vh;margin:25px}.instruction[_ngcontent-%COMP%]{height:30vh;width:auto}h2[_ngcontent-%COMP%]{font-family:'Source Sans Pro',sans-serif;font-weight:700}p[_ngcontent-%COMP%]{font-family:'Source Sans Pro',sans-serif;margin-bottom:10vh;margin-right:2vw;margin-left:2vw}"]],data:{}});function h(n){return t.Gb(0,[(n()(),t.pb(0,0,null,null,4,"span",[],null,null,null,null,null)),(n()(),t.Eb(-1,null,["Schon "])),(n()(),t.pb(2,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.Eb(3,null,["",""])),(n()(),t.Eb(-1,null,[" haben mitgemacht."]))],null,function(n,l){n(l,3,0,l.component.resultLength)})}function d(n){return t.Gb(0,[t.Cb(402653184,1,{slides:0}),(n()(),t.pb(1,0,null,null,27,"div",[["class","container"]],null,null,null,null,null)),(n()(),t.pb(2,0,null,null,26,"ion-slides",[["pager","true"],["zoom","false"]],null,null,null,i.O,i.s)),t.ob(3,49152,[[1,4]],0,r.nb,[t.h,t.k],{pager:[0,"pager"]},null),(n()(),t.pb(4,0,null,0,13,"ion-slide",[],null,null,null,i.N,i.r)),t.ob(5,49152,null,0,r.mb,[t.h,t.k],null,null),(n()(),t.pb(6,0,null,0,11,"div",[["class","swiper"]],null,null,null,null,null)),(n()(),t.pb(7,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Eb(-1,null,["Dein Team f\xfcr den Stuttgarter Gemeinderat!"])),(n()(),t.pb(9,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,h)),t.ob(11,16384,null,0,a.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.Eb(-1,null,[" Finde auch du mit dem KOMUNAT heraus, wer deine TOP-KandidatInnen f\xfcr die Gemeinderatswahl in Stuttgart am 26. Mai 2019 sind. "])),(n()(),t.pb(13,0,null,null,2,"ion-button",[["class","goBtn"],["color","primary"],["expand","block"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.slideToNext()&&t),t},i.y,i.c)),t.ob(14,49152,null,0,r.h,[t.h,t.k],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t.Eb(-1,0,["Weiter"])),(n()(),t.pb(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.pb(18,0,null,0,10,"ion-slide",[],null,null,null,i.N,i.r)),t.ob(19,49152,null,0,r.mb,[t.h,t.k],null,null),(n()(),t.pb(20,0,null,0,8,"div",[["class","swiper"]],null,null,null,null,null)),(n()(),t.pb(21,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Eb(-1,null,["Jetzt geht\xb4s los!"])),(n()(),t.pb(23,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Eb(-1,null,[" Vergleiche die Werte und kommunalpolitischen Aufgaben, die dir wichtig sind, mit den Antworten der KandidatInnen. "])),(n()(),t.pb(25,0,null,null,2,"ion-button",[["class","goBtn"],["color","primary"],["expand","block"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.goToKomunat(u)&&t),t},i.y,i.c)),t.ob(26,49152,null,0,r.h,[t.h,t.k],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t.Eb(-1,0,["Los geht's"])),(n()(),t.pb(28,0,null,null,0,"br",[],null,null,null,null,null))],function(n,l){var u=l.component;n(l,3,0,"true"),n(l,11,0,u.resultLength>0),n(l,14,0,"primary","block"),n(l,26,0,"primary","block")},null)}function g(n){return t.Gb(0,[(n()(),t.pb(0,0,null,null,1,"app-home",[],null,null,null,d,p)),t.ob(1,4308992,null,0,b,[r.Db,s.b,c.a],null,null)],function(n,l){n(l,1,0)},null)}var m=t.lb("app-home",b,g,{},{},[]),f=u("gIcY"),v=u("ZYCi");u.d(l,"HomePageModuleNgFactory",function(){return x});var x=t.mb(e,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[o.a,m]],[3,t.j],t.x]),t.xb(4608,a.k,a.j,[t.u,[2,a.r]]),t.xb(4608,f.c,f.c,[]),t.xb(4608,r.a,r.a,[t.z,t.g]),t.xb(4608,r.Cb,r.Cb,[r.a,t.j,t.q]),t.xb(4608,r.Fb,r.Fb,[r.a,t.j,t.q]),t.xb(5120,s.b,s.d,[s.c]),t.xb(1073742336,a.b,a.b,[]),t.xb(1073742336,f.b,f.b,[]),t.xb(1073742336,f.a,f.a,[]),t.xb(1073742336,s.a,s.a,[]),t.xb(1073742336,r.Ab,r.Ab,[]),t.xb(1073742336,v.o,v.o,[[2,v.u],[2,v.m]]),t.xb(1073742336,e,e,[]),t.xb(256,s.c,null,[]),t.xb(1024,v.k,function(){return[[{path:"",component:b}]]},[])])})}}]);