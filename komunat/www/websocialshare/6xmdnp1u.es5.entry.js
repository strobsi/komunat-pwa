var __awaiter=this&&this.__awaiter||function(e,o,t,a){return new(t||(t=Promise))(function(i,n){function r(e){try{c(a.next(e))}catch(e){n(e)}}function s(e){try{c(a.throw(e))}catch(e){n(e)}}function c(e){e.done?i(e.value):new t(function(o){o(e.value)}).then(r,s)}c((a=a.apply(e,o||[])).next())})},__generator=this&&this.__generator||function(e,o){var t,a,i,n,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function s(n){return function(s){return function(n){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,a&&(i=2&n[0]?a.return:n[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,a=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){r=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){r.label=n[1];break}if(6===n[0]&&r.label<i[1]){r.label=i[1],i=n;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(n);break}i[2]&&r.ops.pop(),r.trys.pop();continue}n=o.call(e,r)}catch(e){n=[6,e],a=0}finally{t=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}};websocialshare.loadBundle("6xmdnp1u",["exports"],function(e){var o=window.websocialshare.h,t=function(){function e(){}return e.prototype.moveSlotOnLoad=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(o){switch(o.label){case 0:return e&&e.detail?[4,this.moveSlot(e.detail)]:[2];case 1:return o.sent(),[2]}})})},e.prototype.moveSlot=function(e){var o=this;return new Promise(function(t){var a=o.el.querySelector("[slot='"+e+"']"),i=o.el.shadowRoot.querySelector("web-social-share-target.web-social-share-"+e);i&&a&&i.appendChild(a),t()})},e.prototype.hide=function(){var e=this,o=this.el.shadowRoot.querySelector("div.web-social-share");o?(o.classList.add("web-social-share-transition-close"),setTimeout(function(){e.show=!1,o.classList.remove("web-social-share-transition-close"),e.closed.emit(!0)},200)):(this.show=!1,this.closed.emit(!0))},e.prototype.render=function(){var e=this;return o("div",{class:this.show?"web-social-share web-social-share-open":"web-social-share web-social-share-close"},o("div",{class:"web-social-share-backdrop",onClick:function(){return e.hide()}}),o("div",{class:"web-social-share-action-sheet",onClick:function(){return e.hide()}},o("div",{class:"web-social-share-action-sheet-container"},o("div",{class:"web-social-share-action-sheet-group"},this.renderTargets()))),o("slot",{name:"facebook"}),o("slot",{name:"twitter"}),o("slot",{name:"email"}),o("slot",{name:"linkedin"}),o("slot",{name:"pinterest"}),o("slot",{name:"reddit"}),o("slot",{name:"whatsapp"}))},e.prototype.renderTargets=function(){var e=this;return this.share&&this.share.config?this.share.config.map(function(t){return o("web-social-share-target",{displayNames:e.share.displayNames,share:t})}):o("span",null)},Object.defineProperty(e,"is",{get:function(){return"web-social-share"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},share:{type:"Any",attr:"share"},show:{type:Boolean,attr:"show",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"closed",method:"closed",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"socialShareLoaded",method:"moveSlotOnLoad"},{name:"selected",method:"hide"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"div.web-social-share{visibility:hidden;opacity:0;cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation}div.web-social-share.web-social-share-open{visibility:visible;opacity:1}div.web-social-share.web-social-share-open div.web-social-share-backdrop{opacity:var(--web-social-share-backdrop-opacity,.25)}div.web-social-share.web-social-share-open div.web-social-share-action-sheet{opacity:1}div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height,80px)}\@media (max-width:540px){div.web-social-share.web-social-share-open div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:var(--web-social-share-height-small-device,140px)}}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-backdrop{opacity:0}div.web-social-share.web-social-share-open.web-social-share-transition-close div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{height:0}div.web-social-share div.web-social-share-backdrop{opacity:0;-webkit-transition:opacity .1s linear;transition:opacity .1s linear;background-color:var(--web-social-share-backdrop-background,#000);z-index:1000;-webkit-transform:translateZ(2px);transform:translateZ(2px);left:0;top:0;position:fixed;height:100%;width:100%}div.web-social-share div.web-social-share-action-sheet{left:0;right:0;top:0;bottom:0;margin:auto;position:fixed;z-index:1001;-webkit-transform:translateZ(3px);transform:translateZ(3px);width:100%;max-width:500px}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{z-index:1010;-webkit-transform:translateZ(10px);transform:translateZ(10px);background:var(--web-social-share-action-sheet-group-background,#fafafa);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;height:0;-webkit-transition-timing-function:cubic-bezier(.36,.66,.04,1);transition-timing-function:cubic-bezier(.36,.66,.04,1);-webkit-transition:height .2s;transition:height .2s}\@media (max-width:540px){div.web-social-share div.web-social-share-action-sheet div.web-social-share-action-sheet-container div.web-social-share-action-sheet-group{-ms-flex-pack:start;justify-content:flex-start}}::slotted([slot=email]),::slotted([slot=facebook]),::slotted([slot=linkedin]),::slotted([slot=pinterest]),::slotted([slot=reddit]),::slotted([slot=twitter]),::slotted([slot=whatsapp]){display:none}"},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){}return e.share=function(e){var o;e.socialShareType&&"feed"===e.socialShareType?(o="https://www.facebook.com/dialog/feed?",e.socialShareVia&&(o+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(o+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(o+="&link="+encodeURIComponent(e.socialShareUrl)),e.socialShareTo&&(o+="&to="+encodeURIComponent(e.socialShareTo)),e.socialShareDisplay&&(o+="&display="+encodeURIComponent(e.socialShareDisplay)),e.socialShareRef&&(o+="&ref="+encodeURIComponent(e.socialShareRef)),e.socialShareFrom&&(o+="&from="+encodeURIComponent(e.socialShareFrom)),e.socialShareSource&&(o+="&source="+encodeURIComponent(e.socialShareSource)),window.open(o,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):e.socialShareType&&"share"===e.socialShareType?(o="https://www.facebook.com/dialog/share?",e.socialShareVia&&(o+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(o+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(o+="&href="+encodeURIComponent(e.socialShareUrl)),e.socialShareQuote&&(o+="&quote="+encodeURIComponent(e.socialShareQuote)),e.socialShareDisplay&&(o+="&display="+encodeURIComponent(e.socialShareDisplay)),e.socialShareMobileiframe&&(o+="&mobile_iframe="+encodeURIComponent(e.socialShareMobileiframe)),e.socialShareHashtags&&(o+="&hashtag="+encodeURIComponent(e.socialShareHashtags)),window.open(o,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):e.socialShareType&&"send"===e.socialShareType?(o="https://www.facebook.com/dialog/send?",e.socialShareVia&&(o+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(o+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(o+="&link="+encodeURIComponent(e.socialShareUrl)),e.socialShareTo&&(o+="&to="+encodeURIComponent(e.socialShareTo)),e.socialShareDisplay&&(o+="&display="+encodeURIComponent(e.socialShareDisplay)),window.open(o,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e.socialShareUrl||window.location.href),"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),i=function(){function e(){}return e.isMobile=function(){if(!window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))},e.staticOpenNewWindow=function(e){window.self!==window.top?window.open(e,"_blank"):window.open(e,"_self")},e}(),n=function(){function e(){}return e.share=function(e){var o="https://www.twitter.com/intent/tweet?";e.socialShareText&&(o+="text="+encodeURIComponent(e.socialShareText)),e.socialShareVia&&(o+="&via="+encodeURIComponent(e.socialShareVia)),e.socialShareHashtags&&(o+="&hashtags="+encodeURIComponent(e.socialShareHashtags)),o+="&url="+encodeURIComponent(e.socialShareUrl||window.location.href),i.isMobile()?i.staticOpenNewWindow(o):window.open(o,"Twitter","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),r=function(){function e(){}return e.share=function(e){var o="mailto:";e.socialShareTo&&(o+=encodeURIComponent(e.socialShareTo)),o+="?",e.socialShareBody&&(o+="body="+encodeURIComponent(e.socialShareBody)),e.socialShareSubject&&(o+="&subject="+encodeURIComponent(e.socialShareSubject)),e.socialShareCc&&(o+="&cc="+encodeURIComponent(e.socialShareCc)),e.socialShareBcc&&(o+="&bcc="+encodeURIComponent(e.socialShareBcc)),i.staticOpenNewWindow(o)},e}(),s=function(){function e(){}return e.share=function(e){var o="https://www.linkedin.com/shareArticle?mini=true";o+="&url="+encodeURIComponent(e.socialShareUrl||window.location.href),e.socialShareText&&(o+="&title="+encodeURIComponent(e.socialShareText)),e.socialShareDescription&&(o+="&summary="+encodeURIComponent(e.socialShareDescription)),e.socialShareSource&&(o+="&source="+encodeURIComponent(e.socialShareSource)),window.open(o,"Linkedin","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),c=function(){function e(){}return e.share=function(e){window.open("https://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(e.socialShareUrl||window.location.href)+"&media="+encodeURIComponent(e.socialShareMedia)+"&description="+encodeURIComponent(e.socialShareText),"Pinterest","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),h=function(){function e(){}return e.share=function(e){var o="https://www.reddit.com/";o+=e.socialShareSubreddit?"r/"+e.socialShareSubreddit+"/submit?url=":"submit?url=",e.socialSharePopupWidth<900&&(e.socialSharePopupWidth=900),e.socialSharePopupHeight<650&&(e.socialSharePopupHeight=650),window.open(o+encodeURIComponent(e.socialShareUrl||window.location.href)+"&title="+encodeURIComponent(e.socialShareText),"Reddit","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),l=function(){function e(){}return e.share=function(e){var o=i.isMobile(),t=o?"https://api.whatsapp.com/send?text=":"https://web.whatsapp.com/send?text=";e.socialShareText&&(t+=encodeURIComponent(e.socialShareText)+"%0A"),t+=encodeURIComponent(e.socialShareUrl||window.location.href),o?i.staticOpenNewWindow(t):window.open(t,"WhatsApp","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)},e}(),d=function(){function e(){this.displayNames=!1}return e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.emitSocialShareLoaded()];case 1:return e.sent(),[2]}})})},e.prototype.emitSocialShareLoaded=function(){var e=this;return new Promise(function(o){e.share.facebook?e.socialShareLoaded.emit("facebook"):e.share.twitter?e.socialShareLoaded.emit("twitter"):e.share.email?e.socialShareLoaded.emit("email"):e.share.linkedin?e.socialShareLoaded.emit("linkedin"):e.share.pinterest?e.socialShareLoaded.emit("pinterest"):e.share.reddit?e.socialShareLoaded.emit("reddit"):e.share.whatsapp&&e.socialShareLoaded.emit("whatsapp"),o()})},e.prototype.handleFacebookShare=function(e){e.stopPropagation(),a.share(this.share.facebook),this.selected.emit()},e.prototype.handleTwitterShare=function(e){e.stopPropagation(),n.share(this.share.twitter),this.selected.emit()},e.prototype.handleEmailShare=function(e){e.stopPropagation(),r.share(this.share.email),this.selected.emit()},e.prototype.handleLinkedinShare=function(e){e.stopPropagation(),s.share(this.share.linkedin),this.selected.emit()},e.prototype.handlePinterestShare=function(e){e.stopPropagation(),c.share(this.share.pinterest),this.selected.emit()},e.prototype.handleRedditShare=function(e){e.stopPropagation(),h.share(this.share.reddit),this.selected.emit()},e.prototype.handleWhatsappShare=function(e){e.stopPropagation(),l.share(this.share.whatsapp),this.selected.emit()},e.prototype.render=function(){var e=this;return this.share.facebook?o("button",{onClick:function(o){return e.handleFacebookShare(o)},class:"web-social-share-button web-social-share-button-facebook"},this.renderIcon(),this.renderName(this.share.facebook,"Facebook")):this.share.twitter?o("button",{onClick:function(o){return e.handleTwitterShare(o)},class:"web-social-share-button web-social-share-button-twitter"},this.renderIcon(),this.renderName(this.share.twitter,"Twitter")):this.share.email?o("button",{onClick:function(o){return e.handleEmailShare(o)},class:"web-social-share-button web-social-share-button-email"},this.renderIcon(),this.renderName(this.share.email,"Email")):this.share.linkedin?o("button",{onClick:function(o){return e.handleLinkedinShare(o)},class:"web-social-share-button web-social-share-button-linkedin"},this.renderIcon(),this.renderName(this.share.linkedin,"Linkedin")):this.share.pinterest?o("button",{onClick:function(o){return e.handlePinterestShare(o)},class:"web-social-share-button web-social-share-button-pinterest"},this.renderIcon(),this.renderName(this.share.pinterest,"Pinterest")):this.share.reddit?o("button",{onClick:function(o){return e.handleRedditShare(o)},class:"web-social-share-button web-social-share-button-reddit"},this.renderIcon(),this.renderName(this.share.reddit,"Reddit")):this.share.whatsapp?o("button",{onClick:function(o){return e.handleWhatsappShare(o)},class:"web-social-share-button web-social-share-button-whatsapp"},this.renderIcon(),this.renderName(this.share.whatsapp,"WhatsApp")):o("div",null)},e.prototype.renderIcon=function(){return o("div",{class:"web-social-share-button-icon"},o("slot",{name:"facebook"}),o("slot",{name:"twitter"}),o("slot",{name:"email"}),o("slot",{name:"linkedin"}),o("slot",{name:"pinterest"}),o("slot",{name:"reddit"}),o("slot",{name:"whatsapp"}))},e.prototype.renderName=function(e,t){return this.displayNames?o("p",null,e&&e.brandName&&""!==e.brandName?e.brandName:t):o("span",null)},e.prototype.hostData=function(){return{class:{"web-social-share-facebook":this.share.facebook,"web-social-share-twitter":this.share.twitter,"web-social-share-email":this.share.email,"web-social-share-linkedin":this.share.linkedin,"web-social-share-pinterest":this.share.pinterest,"web-social-share-reddit":this.share.reddit,"web-social-share-whatsapp":this.share.whatsapp}}},Object.defineProperty(e,"is",{get:function(){return"web-social-share-target"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{displayNames:{type:Boolean,attr:"display-names"},share:{type:"Any",attr:"share"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"selected",method:"selected",bubbles:!0,cancelable:!0,composed:!0},{name:"socialShareLoaded",method:"socialShareLoaded",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{margin:auto;width:var(--web-social-share-target-width,4rem);height:var(--web-social-share-target-height,3rem);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}button{position:relative;cursor:pointer;border:0;background:transparent;width:var(--web-social-share-button-width,100%);height:var(--web-social-share-button-height,100%);font-size:var(--web-social-share-button-font-size)}p{bottom:0;color:var(--web-social-share-brand-color,inherit);font-size:var(--web-social-share-brand-font-size,.6rem)}div.web-social-share-button-icon,p{position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);margin:0}div.web-social-share-button-icon{top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:var(--web-social-share-target-icon-container-height,2rem)}"},enumerable:!0,configurable:!0}),e}();e.WebSocialShare=t,e.WebSocialShareTarget=d,Object.defineProperty(e,"__esModule",{value:!0})});