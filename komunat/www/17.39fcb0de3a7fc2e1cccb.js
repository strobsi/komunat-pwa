(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{TZcR:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=u("ZZ/e"),o=function(){function l(l,n){this.route=l,this.navCtrl=n,this.candidate={motto:"",name:"",birthdate:"",values:[],contents:[],events:[],uuid:""}}return l.prototype.ngOnInit=function(){var l=this;this.route.queryParams.subscribe(function(n){l.candidate=JSON.parse(n.candidate),l.candidate.values.sort(function(l,n){return l.rating=Math.round(l.rating),n.rating=Math.round(n.rating),l.rating<n.rating?1:l.rating>n.rating?-1:0}),l.candidate.contents.sort(function(l,n){return l.rating=Math.round(l.rating),n.rating=Math.round(n.rating),l.rating<n.rating?1:l.rating>n.rating?-1:0}),console.log(l.candidate)})},l.prototype.back=function(){console.log("Clicked back"),this.navCtrl.pop()},l}(),e=function(){return function(){}}(),a=u("pMnS"),b=u("oBZk"),c=u("Ip0R"),s=u("ZYCi"),r=t.nb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:100vh;height:calc(var(--vh,1vh) * 100);margin-top:5vh}.titleBar[_ngcontent-%COMP%]{margin-left:10px;font-size:7vw}.fullHeight[_ngcontent-%COMP%]{height:100%}.cCardLeft[_ngcontent-%COMP%]{width:100%;height:100%;vertical-align:middle;text-align:center}ion-avatar[_ngcontent-%COMP%]{width:35vw;height:35vw;-o-object-fit:cover;object-fit:cover;display:block;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%}ion-slide[_ngcontent-%COMP%]{text-align:left}.candidateCard[_ngcontent-%COMP%]{height:160px}.imageCol[_ngcontent-%COMP%]{margin:0;padding:0}.quoteCol[_ngcontent-%COMP%]{margin:0;padding:0;width:100%;height:100%}.quoteAuthor[_ngcontent-%COMP%]{position:absolute;bottom:30px;right:20px}.vertical-center[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:flex!important;align-content:center!important;align-items:center!important}h2[_ngcontent-%COMP%]{color:#4c4d4f;font-size:8vw;text-align:center;font-family:'Source Sans Pro',sans-serif;font-weight:700}h4[_ngcontent-%COMP%]{font-size:6vw;color:var(--komunat-gray-dark);margin:15px;font-family:'Source Sans Pro',sans-serif;font-weight:700}p[_ngcontent-%COMP%]{font-family:'Source Sans Pro',sans-serif;color:var(--komunat-blue);margin-bottom:0}.black[_ngcontent-%COMP%]{color:var(--komunat-gray-dark)}.bold[_ngcontent-%COMP%]{font-weight:700}.small[_ngcontent-%COMP%]{font-size:3vw}.slim[_ngcontent-%COMP%]{font-weight:lighter}.eventTitle[_ngcontent-%COMP%]{margin-left:5px}.eventWrapper[_ngcontent-%COMP%]{border-top:1px solid var(--komunat-gray-light);border-bottom:1px solid var(--komunat-gray-light)}.eventList[_ngcontent-%COMP%]{margin-top:20px;width:100%}.event[_ngcontent-%COMP%]{margin:-20px 15px 15px}"]],data:{}});function p(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,12,"div",[["class","eventWrapper"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,11,"div",[["class","event"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,9,"ion-row",[["class","eventTitle bold"]],null,null,null,b.P,b.r)),t.ob(4,49152,null,0,i.gb,[t.h,t.k],null,null),(l()(),t.pb(5,0,null,0,3,"ion-col",[["size","2"]],null,null,null,b.D,b.f)),t.ob(6,49152,null,0,i.r,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(7,0,null,0,1,"p",[["class","slim black"]],null,null,null,null,null)),(l()(),t.Fb(8,null,["",""])),(l()(),t.pb(9,0,null,0,3,"ion-col",[["size","8"]],null,null,null,b.D,b.f)),t.ob(10,49152,null,0,i.r,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(12,null,["",""]))],function(l,n){l(n,6,0,"2"),l(n,10,0,"8")},function(l,n){l(n,8,0,n.context.index+1),l(n,12,0,n.context.$implicit.name)})}function g(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,12,"div",[["class","eventWrapper"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,11,"div",[["class","event"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,9,"ion-row",[["class","eventTitle bold"]],null,null,null,b.P,b.r)),t.ob(4,49152,null,0,i.gb,[t.h,t.k],null,null),(l()(),t.pb(5,0,null,0,3,"ion-col",[["size","2"]],null,null,null,b.D,b.f)),t.ob(6,49152,null,0,i.r,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(7,0,null,0,1,"p",[["class","slim black"]],null,null,null,null,null)),(l()(),t.Fb(8,null,["",""])),(l()(),t.pb(9,0,null,0,3,"ion-col",[["size","8"]],null,null,null,b.D,b.f)),t.ob(10,49152,null,0,i.r,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(12,null,["",""]))],function(l,n){l(n,6,0,"2"),l(n,10,0,"8")},function(l,n){l(n,8,0,n.context.index+1),l(n,12,0,n.context.$implicit.name)})}function d(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,27,"div",[["class","eventWrapper"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,26,"div",[["class","event"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,3,"ion-row",[["class","eventTitle bold"]],null,null,null,b.P,b.r)),t.ob(4,49152,null,0,i.gb,[t.h,t.k],null,null),(l()(),t.pb(5,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(6,null,["",""])),(l()(),t.pb(7,0,null,null,20,"ion-row",[["class","eventContent"]],null,null,null,b.P,b.r)),t.ob(8,49152,null,0,i.gb,[t.h,t.k],null,null),(l()(),t.pb(9,0,null,0,11,"ion-col",[["size","5"]],null,null,null,b.D,b.f)),t.ob(10,49152,null,0,i.r,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(11,0,null,0,4,"p",[["class","black"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,1,"span",[["class","slim"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Datum: "])),(l()(),t.pb(14,0,null,null,1,"span",[["class","bold"]],null,null,null,null,null)),(l()(),t.Fb(15,null,["",""])),(l()(),t.pb(16,0,null,0,4,"p",[["class","black"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,1,"span",[["class","slim"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Uhrzeit: "])),(l()(),t.pb(19,0,null,null,1,"span",[["class","bold"]],null,null,null,null,null)),(l()(),t.Fb(20,null,["",""])),(l()(),t.pb(21,0,null,0,6,"ion-col",[["size","7"]],null,null,null,b.D,b.f)),t.ob(22,49152,null,0,i.r,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(23,0,null,0,4,"p",[["class","black"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,1,"span",[["class","slim"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Addresse: "])),(l()(),t.pb(26,0,null,null,1,"span",[["class","bold"]],null,null,null,null,null)),(l()(),t.Fb(27,null,["",""]))],function(l,n){l(n,10,0,"5"),l(n,22,0,"7")},function(l,n){l(n,6,0,n.context.$implicit.title),l(n,15,0,n.context.$implicit.date),l(n,20,0,n.context.$implicit.time),l(n,27,0,n.context.$implicit.location)})}function h(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,51,"ion-content",[],null,null,null,b.E,b.g)),t.ob(1,49152,null,0,i.s,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,49,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,7,"ion-row",[["class","titleBar"]],null,null,null,b.P,b.r)),t.ob(4,49152,null,0,i.gb,[t.h,t.k],null,null),(l()(),t.pb(5,0,null,0,5,"ion-col",[["size","10"]],null,null,null,b.D,b.f)),t.ob(6,49152,null,0,i.r,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(7,0,null,0,1,"p",[["class","mainLbl"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.back()&&t),t},null,null)),(l()(),t.Fb(-1,null,["< DEIN TEAM"])),(l()(),t.pb(9,0,null,0,1,"p",[["class","backBtn"],["hidden",""],["name","filing"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.back()&&t),t},null,null)),(l()(),t.Fb(-1,null,["< DEIN TEAM"])),(l()(),t.pb(11,0,null,null,14,"div",[["class","candidateCard"],["ng-model","candidate"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,13,"ion-row",[["class","fullHeight"]],null,null,null,b.P,b.r)),t.ob(13,49152,null,0,i.gb,[t.h,t.k],null,null),(l()(),t.pb(14,0,null,0,5,"ion-col",[["class","imageCol"],["size","5"]],null,null,null,b.D,b.f)),t.ob(15,49152,null,0,i.r,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(16,0,null,0,3,"div",[["class","cCardLeft"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,2,"ion-avatar",[],null,null,null,b.z,b.b)),t.ob(18,49152,null,0,i.e,[t.h,t.k],null,null),(l()(),t.pb(19,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(20,0,null,0,5,"ion-col",[["class","quoteCol"],["size","7"]],null,null,null,b.D,b.f)),t.ob(21,49152,null,0,i.r,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.pb(22,0,null,0,3,"div",[["class",""]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,2,"p",[["class","black cursiv vertical-center"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t.Fb(25,null,['"','"'])),(l()(),t.pb(26,0,null,null,25,"ion-slides",[["zoom","false"]],null,null,null,b.R,b.t)),t.ob(27,49152,null,0,i.ob,[t.h,t.k],null,null),(l()(),t.pb(28,0,null,0,7,"ion-slide",[],null,null,null,b.Q,b.s)),t.ob(29,49152,null,0,i.nb,[t.h,t.k],null,null),(l()(),t.pb(30,0,null,0,5,"div",[["class","eventList"]],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["MEINE WERTE"])),(l()(),t.pb(33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,p)),t.ob(35,278528,null,0,c.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(36,0,null,0,7,"ion-slide",[],null,null,null,b.Q,b.s)),t.ob(37,49152,null,0,i.nb,[t.h,t.k],null,null),(l()(),t.pb(38,0,null,0,5,"div",[["class","eventList"]],null,null,null,null,null)),(l()(),t.pb(39,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["MEINE AUFGABEN"])),(l()(),t.pb(41,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,g)),t.ob(43,278528,null,0,c.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(44,0,null,0,7,"ion-slide",[],null,null,null,b.Q,b.s)),t.ob(45,49152,null,0,i.nb,[t.h,t.k],null,null),(l()(),t.pb(46,0,null,0,5,"div",[["class","eventList"]],null,null,null,null,null)),(l()(),t.pb(47,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["KOMM VORBEI & TRIFF MICH HIER PERS\xd6NLICH"])),(l()(),t.pb(49,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,d)),t.ob(51,278528,null,0,c.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,6,0,"10"),l(n,15,0,"5"),l(n,21,0,"7"),l(n,35,0,u.candidate.values),l(n,43,0,u.candidate.contents),l(n,51,0,u.events)},function(l,n){var u=n.component;l(n,19,0,t.rb(1,"https://komunat.de/uploads/",u.candidate.uuid,".png")),l(n,25,0,u.candidate.motto)})}function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-cdetail",[],null,null,null,h,r)),t.ob(1,114688,null,0,o,[s.a,i.Eb],null,null)],function(l,n){l(n,1,0)},null)}var v=t.lb("app-cdetail",o,f,{},{},[]),m=u("gIcY");u.d(n,"CdetailPageModuleNgFactory",function(){return k});var k=t.mb(e,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[a.a,v]],[3,t.j],t.x]),t.xb(4608,c.k,c.j,[t.u,[2,c.r]]),t.xb(4608,m.m,m.m,[]),t.xb(4608,i.b,i.b,[t.z,t.g]),t.xb(4608,i.Db,i.Db,[i.b,t.j,t.q]),t.xb(4608,i.Gb,i.Gb,[i.b,t.j,t.q]),t.xb(1073742336,c.b,c.b,[]),t.xb(1073742336,m.k,m.k,[]),t.xb(1073742336,m.b,m.b,[]),t.xb(1073742336,i.Bb,i.Bb,[]),t.xb(1073742336,s.o,s.o,[[2,s.u],[2,s.m]]),t.xb(1073742336,e,e,[]),t.xb(1024,s.k,function(){return[[{path:"",component:o}]]},[])])})}}]);