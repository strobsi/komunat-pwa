(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{ZUSm:function(t,n,e){"use strict";e.r(n);var l=e("CcnG"),i=e("ZZ/e"),r=e("EgnG"),a=(e("yLV6"),e("m4HQ")),o=function(){function t(t,n,e,l,i){this.navCtrl=t,this.route=n,this.platform=e,this.storage=l,this.ga=i,this.lesser=[],this.greater=[],this.comparer=[],this.insertIndex=0,this.decisionCounter=0,this.startedTimeStamp=0,this.vData={values:{},contents:{},metadata:{isCandidate:!1,valueStarted:0,valueFinished:0,contentStarted:0,contentFinished:0,valueDecisions:0,contentDecisions:0}},this.initarr=[[{id:0,name:"Bezahlbaren Wohnraum schaffen",rating:0},{id:1,name:"Preise f\xfcr Bus und Bahn senken",rating:0},{id:2,name:"Alternativen zum Auto f\xf6rdern",rating:0},{id:3,name:"Die Kinderbetreuung ausbauen",rating:0},{id:4,name:"Keine neuen Schulden f\xfcr die Stadt machen",rating:0},{id:5,name:"F\xfcr mehr Sicherheit im \xf6ffentlichen Raum sorgen",rating:0},{id:6,name:"Langfristige Integration und das Zusammenleben in der Stadt f\xf6rdern",rating:0},{id:7,name:"Schulen sanieren",rating:0},{id:8,name:"Subkultur f\xf6rdern",rating:0},{id:9,name:"Soziale und kulturelle Teilhabe trotz kleinem Geldbeutel erm\xf6glichen",rating:0},{id:10,name:"Die regionale Wirtschaft f\xf6rdern",rating:0},{id:11,name:"Eine klimaneutrale Stadt gestalten",rating:0},{id:12,name:"Kommunalpolitik transparenter machen",rating:0}]],this.arr=[[{id:0,name:"Menschenrechte",rating:0},{id:1,name:"Meinungsfreiheit",rating:0},{id:2,name:"Religionsfreiheit",rating:0},{id:3,name:"Solidarit\xe4t",rating:0},{id:4,name:"Gerechtigkeit",rating:0}]]}return t.prototype.ionViewDidLoad=function(){this.ga.trackView("content").then(function(){}).catch(function(t){return console.log(t)})},t.prototype.ngOnInit=function(){var t=this;this.platform.ready().then(function(){if(t.platform.is("ios")){var n=document.querySelector(".upper"),e=document.querySelector(".lower");"X-Xs"==t.iPhoneVersion()?(n.setAttribute("style","height:43%;"),e.setAttribute("style","height:43%;")):"Xmax-Xr"==t.iPhoneVersion()?(n.setAttribute("style","height:45%;"),e.setAttribute("style","height:45%;")):"5"==t.iPhoneVersion()?(n.setAttribute("style","height:40%;"),e.setAttribute("style","height:40%;")):(n.setAttribute("style","height:43%;"),e.setAttribute("style","height:43%;"))}}),this.storage.ready().then(function(){t.storage.get("values").then(function(n){n&&(console.log(JSON.parse(n)),t.vData=JSON.parse(n),t.arr=t.initarr,t.newRound())})})},t.prototype.iPhoneVersion=function(){var t=window.screen.height,n=window.screen.width;return 414===n&&896===t?"Xmax-Xr":375===n&&812===t?"X-Xs":320===n&&480===t?"4":375===n&&667===t?"6":414===n&&736===t?"6+":320===n&&568===t?"5":t<=480?"2-3":"none"},t.prototype.newRound=function(){for(var t=!1,n=0;n<this.arr.length;n++)if(this.arr[n].length>1){this.insertIndex=n,t=!0;break}if(t){var e=this.arr[n],l=this.getRandomIndex(e);this.comparer=e.slice(0),this.arr.splice(this.insertIndex,1),this.sort(l[0])}else{this.calculateValue();var i=document.querySelector(".opt0"),r=document.querySelector(".opt1");i.parentNode.removeChild(i),r.parentNode.removeChild(r),this.showLoading(this.arr),this.btn0Val.name="",this.btn1Val.name="",this.decisionCounter=0}},t.prototype.sort=function(t){if(this.comparer.length>0){var n=this.getRandomIDExcept(t.id,this.comparer);this.btn0Val=t,this.btn1Val=n}else this.completeRound()},t.prototype.selected=function(t){0==this.decisionCounter&&(this.startedTimeStamp=(new Date).getTime()/1e3,this.startedTimeStamp=parseInt(this.startedTimeStamp.toString())),this.decisionCounter++,0==t?(Object(r.a)({targets:document.getElementsByClassName("upper"),scale:1.05,easing:"easeInOutQuad",duration:200,direction:"alternate"}),this.lesser.push(this.btn1Val)):(Object(r.a)({targets:document.getElementsByClassName("lower"),scale:1.05,easing:"easeInOutQuad",duration:200,direction:"alternate"}),this.greater.push(this.btn1Val)),this.removeById(this.btn1Val.id),this.sort(this.btn0Val)},t.prototype.completeRound=function(){this.lesser.length>0&&this.arr.splice(this.insertIndex,0,this.lesser.length>1?this.lesser:this.lesser[0]),this.arr.splice(this.insertIndex,0,this.btn0Val),this.greater.length>0&&this.arr.splice(this.insertIndex,0,this.greater.length>1?this.greater:this.greater[0]),this.lesser=[],this.greater=[],this.newRound()},t.prototype.getRandomIndex=function(t){var n=Math.floor(Math.random()*Math.floor(t.length));return[t[n],n]},t.prototype.getRandomIDExcept=function(t,n){for(var e=0;e<n.length;e++)n[e].id==t&&n.splice(e,1);return n[Math.floor(Math.random()*(n.length-1+1))]},t.prototype.removeById=function(t){for(var n=0;n<this.comparer.length;n++)this.comparer[n].id==t&&this.comparer.splice(n,1)},t.prototype.calculateValue=function(){for(var t=this.arr.length-1,n=0;n<this.arr.length;n++)this.arr[n].rating=t,t--},t.prototype.showLoading=function(t){this.moveOn(t)},t.prototype.moveOn=function(t){var n=this,e=(new Date).getTime()/1e3;e=parseInt(e.toString()),this.vData.metadata.contentStarted=this.startedTimeStamp,this.vData.contents=t,this.vData.metadata.contentDecisions=this.decisionCounter,this.vData.metadata.contentStarted=this.startedTimeStamp,this.vData.metadata.contentFinished=e;var l=JSON.stringify(this.vData);this.storage.ready().then(function(){n.storage.set("matches",l),n.navCtrl.navigateForward(["loading"],{queryParams:{}})})},t}(),s=function(){return function(){}}(),u=e("pMnS"),h=e("oBZk"),c=e("ZYCi"),d=e("iw74"),p=l.nb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:100vh;height:calc(var(--vh,1vh) * 100);margin-top:5vh}ion-col[_ngcontent-%COMP%]{margin-left:10px;margin-top:10px}.buttonSection[_ngcontent-%COMP%]{height:75vh;width:auto}.upper[_ngcontent-%COMP%]{height:50%;margin-top:5px;position:relative;text-align:center}.lower[_ngcontent-%COMP%]{height:50%;position:relative;text-align:center}.beautify[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px;border-top:1px solid;border-bottom:2px solid;position:absolute;text-align:center;margin:0;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}h4[_ngcontent-%COMP%]{height:5vh;font-size:6vw;margin:1em;color:#4c4d4f;text-align:center}.valueImage[_ngcontent-%COMP%]{height:50%;margin:0}h2[_ngcontent-%COMP%]{color:#4c4d4f;text-align:center;font-family:'Source Sans Pro',sans-serif;font-weight:700;font-size:5vw}p[_ngcontent-%COMP%]{font-family:'Source Sans Pro',sans-serif;color:#59bced;margin-bottom:0}.small[_ngcontent-%COMP%]{font-size:3vw}.progressContainer[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.steps[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;width:25vw}.step[_ngcontent-%COMP%]{width:15px;height:15px;background:#fff;border:2px solid var(--komunat-blue);border-radius:50%;transition:background 1s}.step.selected[_ngcontent-%COMP%]{background:var(--komunat-blue)}.step.completed[_ngcontent-%COMP%]{background:#fff}.progress[_ngcontent-%COMP%]{position:absolute;width:100%;height:50%;border-bottom:2px solid var(--komunat-blue);z-index:-1}.percent[_ngcontent-%COMP%]{position:absolute;width:0;height:100%;border-bottom:2px solid #4b81bd;z-index:1;transition:width 1s}"]],data:{}});function g(t){return l.Gb(0,[(t()(),l.pb(0,0,null,null,26,"div",[["class","container"]],null,null,null,null,null)),(t()(),l.pb(1,0,null,null,16,"ion-row",[],null,null,null,h.M,h.q)),l.ob(2,49152,null,0,i.fb,[l.h,l.k],null,null),(t()(),l.pb(3,0,null,0,3,"ion-col",[["size","6"]],null,null,null,h.B,h.f)),l.ob(4,49152,null,0,i.q,[l.h,l.k],{size:[0,"size"]},null),(t()(),l.pb(5,0,null,0,1,"p",[],null,null,null,null,null)),(t()(),l.Eb(-1,null,["Welche Aufgabe ist dir wichtiger?"])),(t()(),l.pb(7,0,null,0,1,"ion-col",[["size","1"]],null,null,null,h.B,h.f)),l.ob(8,49152,null,0,i.q,[l.h,l.k],{size:[0,"size"]},null),(t()(),l.pb(9,0,null,0,8,"ion-col",[["size","3"]],null,null,null,h.B,h.f)),l.ob(10,49152,null,0,i.q,[l.h,l.k],{size:[0,"size"]},null),(t()(),l.pb(11,0,null,0,6,"div",[["class","progressContainer"]],null,null,null,null,null)),(t()(),l.pb(12,0,null,null,1,"div",[["class","progress"]],null,null,null,null,null)),(t()(),l.pb(13,0,null,null,0,"div",[["class","percent"]],null,null,null,null,null)),(t()(),l.pb(14,0,null,null,3,"div",[["class","steps"]],null,null,null,null,null)),(t()(),l.pb(15,0,null,null,0,"div",[["class","step completed"],["id","0"]],null,null,null,null,null)),(t()(),l.pb(16,0,null,null,0,"div",[["class","step selected"],["id","1"]],null,null,null,null,null)),(t()(),l.pb(17,0,null,null,0,"div",[["class","step"],["id","2"]],null,null,null,null,null)),(t()(),l.pb(18,0,null,null,8,"div",[["class","buttonSection"]],null,null,null,null,null)),(t()(),l.pb(19,0,null,null,3,"ion-card",[["class","opt0 upper"]],null,[[null,"click"]],function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.selected(0)&&l),l},h.A,h.e)),l.ob(20,49152,null,0,i.j,[l.h,l.k],null,null),(t()(),l.pb(21,0,null,0,1,"h2",[["class",".opt0 beautify"]],null,null,null,null,null)),(t()(),l.Eb(22,null,["",""])),(t()(),l.pb(23,0,null,null,3,"ion-card",[["class","opt1 lower"]],null,[[null,"click"]],function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.selected(1)&&l),l},h.A,h.e)),l.ob(24,49152,null,0,i.j,[l.h,l.k],null,null),(t()(),l.pb(25,0,null,0,1,"h2",[["class",".opt1 beautify"]],null,null,null,null,null)),(t()(),l.Eb(26,null,["",""]))],function(t,n){t(n,4,0,"6"),t(n,8,0,"1"),t(n,10,0,"3")},function(t,n){var e=n.component;t(n,22,0,e.btn0Val.name),t(n,26,0,e.btn1Val.name)})}function b(t){return l.Gb(0,[(t()(),l.pb(0,0,null,null,1,"app-content",[],null,null,null,g,p)),l.ob(1,114688,null,0,o,[i.Db,c.a,i.Eb,d.b,a.a],null,null)],function(t,n){t(n,1,0)},null)}var m=l.lb("app-content",o,b,{},{},[]),f=e("Ip0R"),v=e("gIcY");e.d(n,"ContentPageModuleNgFactory",function(){return x});var x=l.mb(s,[],function(t){return l.wb([l.xb(512,l.j,l.bb,[[8,[u.a,m]],[3,l.j],l.x]),l.xb(4608,f.k,f.j,[l.u,[2,f.r]]),l.xb(4608,v.c,v.c,[]),l.xb(4608,i.a,i.a,[l.z,l.g]),l.xb(4608,i.Cb,i.Cb,[i.a,l.j,l.q]),l.xb(4608,i.Fb,i.Fb,[i.a,l.j,l.q]),l.xb(5120,d.b,d.d,[d.c]),l.xb(1073742336,f.b,f.b,[]),l.xb(1073742336,v.b,v.b,[]),l.xb(1073742336,v.a,v.a,[]),l.xb(1073742336,i.Ab,i.Ab,[]),l.xb(1073742336,d.a,d.a,[]),l.xb(1073742336,c.o,c.o,[[2,c.u],[2,c.m]]),l.xb(1073742336,s,s,[]),l.xb(256,d.c,null,[]),l.xb(1024,c.k,function(){return[[{path:"",component:o}]]},[])])})}}]);