const e=window.websocialshare.h;class a{async moveSlotOnLoad(e){e&&e.detail&&await this.moveSlot(e.detail)}moveSlot(e){return new Promise(a=>{const i=this.el.querySelector("[slot='"+e+"']"),t=this.el.shadowRoot.querySelector("web-social-share-target.web-social-share-"+e);t&&i&&t.appendChild(i),a()})}hide(){let e=this.el.shadowRoot.querySelector("div.web-social-share");e?(e.classList.add("web-social-share-transition-close"),setTimeout(()=>{this.show=!1,e.classList.remove("web-social-share-transition-close"),this.closed.emit(!0)},200)):(this.show=!1,this.closed.emit(!0))}render(){return e("div",{class:this.show?"web-social-share web-social-share-open":"web-social-share web-social-share-close"},e("div",{class:"web-social-share-backdrop",onClick:()=>this.hide()}),e("div",{class:"web-social-share-action-sheet",onClick:()=>this.hide()},e("div",{class:"web-social-share-action-sheet-container"},e("div",{class:"web-social-share-action-sheet-group"},this.renderTargets()))),e("slot",{name:"facebook"}),e("slot",{name:"twitter"}),e("slot",{name:"email"}),e("slot",{name:"linkedin"}),e("slot",{name:"pinterest"}),e("slot",{name:"reddit"}),e("slot",{name:"whatsapp"}))}renderTargets(){return this.share&&this.share.config?this.share.config.map(a=>e("web-social-share-target",{displayNames:this.share.displayNames,share:a})):e("span",null)}static get is(){return"web-social-share"}static get encapsulation(){return"shadow"}static get properties(){return{el:{elementRef:!0},share:{type:"Any",attr:"share"},show:{type:Boolean,attr:"show",mutable:!0}}}static get events(){return[{name:"closed",method:"closed",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"socialShareLoaded",method:"moveSlotOnLoad"},{name:"selected",method:"hide"}]}static get style(){return"div.web-social-share.sc-web-social-share{visibility:hidden;opacity:0;cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation}div.web-social-share.web-social-share-open.sc-web-social-share{visibility:visible;opacity:1}div.web-social-share.web-social-share-open.sc-web-social-share   div.web-social-share-backdrop.sc-web-social-share{opacity:var(--web-social-share-backdrop-opacity,.25)}div.web-social-share.web-social-share-open.sc-web-social-share   div.web-social-share-action-sheet.sc-web-social-share{opacity:1}div.web-social-share.web-social-share-open.sc-web-social-share   div.web-social-share-action-sheet.sc-web-social-share   div.web-social-share-action-sheet-container.sc-web-social-share   div.web-social-share-action-sheet-group.sc-web-social-share{height:var(--web-social-share-height,80px)}\@media (max-width:540px){div.web-social-share.web-social-share-open.sc-web-social-share   div.web-social-share-action-sheet.sc-web-social-share   div.web-social-share-action-sheet-container.sc-web-social-share   div.web-social-share-action-sheet-group.sc-web-social-share{height:var(--web-social-share-height-small-device,140px)}}div.web-social-share.web-social-share-open.web-social-share-transition-close.sc-web-social-share   div.web-social-share-backdrop.sc-web-social-share{opacity:0}div.web-social-share.web-social-share-open.web-social-share-transition-close.sc-web-social-share   div.web-social-share-action-sheet.sc-web-social-share   div.web-social-share-action-sheet-container.sc-web-social-share   div.web-social-share-action-sheet-group.sc-web-social-share{height:0}div.web-social-share.sc-web-social-share   div.web-social-share-backdrop.sc-web-social-share{opacity:0;-webkit-transition:opacity .1s linear;transition:opacity .1s linear;background-color:var(--web-social-share-backdrop-background,#000);z-index:1000;-webkit-transform:translateZ(2px);transform:translateZ(2px);left:0;top:0;position:fixed;height:100%;width:100%}div.web-social-share.sc-web-social-share   div.web-social-share-action-sheet.sc-web-social-share{left:0;right:0;top:0;bottom:0;margin:auto;position:fixed;z-index:1001;-webkit-transform:translateZ(3px);transform:translateZ(3px);width:100%;max-width:500px}div.web-social-share.sc-web-social-share   div.web-social-share-action-sheet.sc-web-social-share   div.web-social-share-action-sheet-container.sc-web-social-share{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}div.web-social-share.sc-web-social-share   div.web-social-share-action-sheet.sc-web-social-share   div.web-social-share-action-sheet-container.sc-web-social-share   div.web-social-share-action-sheet-group.sc-web-social-share{z-index:1010;-webkit-transform:translateZ(10px);transform:translateZ(10px);background:var(--web-social-share-action-sheet-group-background,#fafafa);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;height:0;-webkit-transition-timing-function:cubic-bezier(.36,.66,.04,1);transition-timing-function:cubic-bezier(.36,.66,.04,1);-webkit-transition:height .2s;transition:height .2s}\@media (max-width:540px){div.web-social-share.sc-web-social-share   div.web-social-share-action-sheet.sc-web-social-share   div.web-social-share-action-sheet-container.sc-web-social-share   div.web-social-share-action-sheet-group.sc-web-social-share{-ms-flex-pack:start;justify-content:flex-start}}.sc-web-social-share-s > [slot=email], .sc-web-social-share-s > [slot=facebook], .sc-web-social-share-s > [slot=linkedin], .sc-web-social-share-s > [slot=pinterest], .sc-web-social-share-s > [slot=reddit], .sc-web-social-share-s > [slot=twitter], .sc-web-social-share-s > [slot=whatsapp]{display:none}"}}class i{static share(e){let a;e.socialShareType&&"feed"===e.socialShareType?(a="https://www.facebook.com/dialog/feed?",e.socialShareVia&&(a+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(a+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(a+="&link="+encodeURIComponent(e.socialShareUrl)),e.socialShareTo&&(a+="&to="+encodeURIComponent(e.socialShareTo)),e.socialShareDisplay&&(a+="&display="+encodeURIComponent(e.socialShareDisplay)),e.socialShareRef&&(a+="&ref="+encodeURIComponent(e.socialShareRef)),e.socialShareFrom&&(a+="&from="+encodeURIComponent(e.socialShareFrom)),e.socialShareSource&&(a+="&source="+encodeURIComponent(e.socialShareSource)),window.open(a,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):e.socialShareType&&"share"===e.socialShareType?(a="https://www.facebook.com/dialog/share?",e.socialShareVia&&(a+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(a+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(a+="&href="+encodeURIComponent(e.socialShareUrl)),e.socialShareQuote&&(a+="&quote="+encodeURIComponent(e.socialShareQuote)),e.socialShareDisplay&&(a+="&display="+encodeURIComponent(e.socialShareDisplay)),e.socialShareMobileiframe&&(a+="&mobile_iframe="+encodeURIComponent(e.socialShareMobileiframe)),e.socialShareHashtags&&(a+="&hashtag="+encodeURIComponent(e.socialShareHashtags)),window.open(a,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):e.socialShareType&&"send"===e.socialShareType?(a="https://www.facebook.com/dialog/send?",e.socialShareVia&&(a+="&app_id="+encodeURIComponent(e.socialShareVia)),e.socialShareRedirectUri&&(a+="&redirect_uri="+encodeURIComponent(e.socialShareRedirectUri)),e.socialShareUrl&&(a+="&link="+encodeURIComponent(e.socialShareUrl)),e.socialShareTo&&(a+="&to="+encodeURIComponent(e.socialShareTo)),e.socialShareDisplay&&(a+="&display="+encodeURIComponent(e.socialShareDisplay)),window.open(a,"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)):window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e.socialShareUrl||window.location.href),"Facebook","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)}}class t{static isMobile(){if(!window)return!1;const e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}static staticOpenNewWindow(e){window.self!==window.top?window.open(e,"_blank"):window.open(e,"_self")}}class o{static share(e){let a="https://www.twitter.com/intent/tweet?";e.socialShareText&&(a+="text="+encodeURIComponent(e.socialShareText)),e.socialShareVia&&(a+="&via="+encodeURIComponent(e.socialShareVia)),e.socialShareHashtags&&(a+="&hashtags="+encodeURIComponent(e.socialShareHashtags)),a+="&url="+encodeURIComponent(e.socialShareUrl||window.location.href),t.isMobile()?t.staticOpenNewWindow(a):window.open(a,"Twitter","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)}}class s{static share(e){let a="mailto:";e.socialShareTo&&(a+=encodeURIComponent(e.socialShareTo)),a+="?",e.socialShareBody&&(a+="body="+encodeURIComponent(e.socialShareBody)),e.socialShareSubject&&(a+="&subject="+encodeURIComponent(e.socialShareSubject)),e.socialShareCc&&(a+="&cc="+encodeURIComponent(e.socialShareCc)),e.socialShareBcc&&(a+="&bcc="+encodeURIComponent(e.socialShareBcc)),t.staticOpenNewWindow(a)}}class r{static share(e){let a="https://www.linkedin.com/shareArticle?mini=true";a+="&url="+encodeURIComponent(e.socialShareUrl||window.location.href),e.socialShareText&&(a+="&title="+encodeURIComponent(e.socialShareText)),e.socialShareDescription&&(a+="&summary="+encodeURIComponent(e.socialShareDescription)),e.socialShareSource&&(a+="&source="+encodeURIComponent(e.socialShareSource)),window.open(a,"Linkedin","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)}}class h{static share(e){window.open("https://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(e.socialShareUrl||window.location.href)+"&media="+encodeURIComponent(e.socialShareMedia)+"&description="+encodeURIComponent(e.socialShareText),"Pinterest","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)}}class n{static share(e){let a="https://www.reddit.com/";a+=e.socialShareSubreddit?"r/"+e.socialShareSubreddit+"/submit?url=":"submit?url=",e.socialSharePopupWidth<900&&(e.socialSharePopupWidth=900),e.socialSharePopupHeight<650&&(e.socialSharePopupHeight=650),window.open(a+encodeURIComponent(e.socialShareUrl||window.location.href)+"&title="+encodeURIComponent(e.socialShareText),"Reddit","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)}}class l{static share(e){const a=t.isMobile();let i=a?"https://api.whatsapp.com/send?text=":"https://web.whatsapp.com/send?text=";e.socialShareText&&(i+=encodeURIComponent(e.socialShareText)+"%0A"),i+=encodeURIComponent(e.socialShareUrl||window.location.href),a?t.staticOpenNewWindow(i):window.open(i,"WhatsApp","toolbar=0,status=0,resizable=yes,width="+e.socialSharePopupWidth+",height="+e.socialSharePopupHeight+",top="+(window.innerHeight-e.socialSharePopupHeight)/2+",left="+(window.innerWidth-e.socialSharePopupWidth)/2)}}class c{constructor(){this.displayNames=!1}async componentDidLoad(){await this.emitSocialShareLoaded()}emitSocialShareLoaded(){return new Promise(e=>{this.share.facebook?this.socialShareLoaded.emit("facebook"):this.share.twitter?this.socialShareLoaded.emit("twitter"):this.share.email?this.socialShareLoaded.emit("email"):this.share.linkedin?this.socialShareLoaded.emit("linkedin"):this.share.pinterest?this.socialShareLoaded.emit("pinterest"):this.share.reddit?this.socialShareLoaded.emit("reddit"):this.share.whatsapp&&this.socialShareLoaded.emit("whatsapp"),e()})}handleFacebookShare(e){e.stopPropagation(),i.share(this.share.facebook),this.selected.emit()}handleTwitterShare(e){e.stopPropagation(),o.share(this.share.twitter),this.selected.emit()}handleEmailShare(e){e.stopPropagation(),s.share(this.share.email),this.selected.emit()}handleLinkedinShare(e){e.stopPropagation(),r.share(this.share.linkedin),this.selected.emit()}handlePinterestShare(e){e.stopPropagation(),h.share(this.share.pinterest),this.selected.emit()}handleRedditShare(e){e.stopPropagation(),n.share(this.share.reddit),this.selected.emit()}handleWhatsappShare(e){e.stopPropagation(),l.share(this.share.whatsapp),this.selected.emit()}render(){return this.share.facebook?e("button",{onClick:e=>this.handleFacebookShare(e),class:"web-social-share-button web-social-share-button-facebook"},this.renderIcon(),this.renderName(this.share.facebook,"Facebook")):this.share.twitter?e("button",{onClick:e=>this.handleTwitterShare(e),class:"web-social-share-button web-social-share-button-twitter"},this.renderIcon(),this.renderName(this.share.twitter,"Twitter")):this.share.email?e("button",{onClick:e=>this.handleEmailShare(e),class:"web-social-share-button web-social-share-button-email"},this.renderIcon(),this.renderName(this.share.email,"Email")):this.share.linkedin?e("button",{onClick:e=>this.handleLinkedinShare(e),class:"web-social-share-button web-social-share-button-linkedin"},this.renderIcon(),this.renderName(this.share.linkedin,"Linkedin")):this.share.pinterest?e("button",{onClick:e=>this.handlePinterestShare(e),class:"web-social-share-button web-social-share-button-pinterest"},this.renderIcon(),this.renderName(this.share.pinterest,"Pinterest")):this.share.reddit?e("button",{onClick:e=>this.handleRedditShare(e),class:"web-social-share-button web-social-share-button-reddit"},this.renderIcon(),this.renderName(this.share.reddit,"Reddit")):this.share.whatsapp?e("button",{onClick:e=>this.handleWhatsappShare(e),class:"web-social-share-button web-social-share-button-whatsapp"},this.renderIcon(),this.renderName(this.share.whatsapp,"WhatsApp")):e("div",null)}renderIcon(){return e("div",{class:"web-social-share-button-icon"},e("slot",{name:"facebook"}),e("slot",{name:"twitter"}),e("slot",{name:"email"}),e("slot",{name:"linkedin"}),e("slot",{name:"pinterest"}),e("slot",{name:"reddit"}),e("slot",{name:"whatsapp"}))}renderName(a,i){return this.displayNames?e("p",null,a&&a.brandName&&""!==a.brandName?a.brandName:i):e("span",null)}hostData(){return{class:{"web-social-share-facebook":this.share.facebook,"web-social-share-twitter":this.share.twitter,"web-social-share-email":this.share.email,"web-social-share-linkedin":this.share.linkedin,"web-social-share-pinterest":this.share.pinterest,"web-social-share-reddit":this.share.reddit,"web-social-share-whatsapp":this.share.whatsapp}}}static get is(){return"web-social-share-target"}static get encapsulation(){return"shadow"}static get properties(){return{displayNames:{type:Boolean,attr:"display-names"},share:{type:"Any",attr:"share"}}}static get events(){return[{name:"selected",method:"selected",bubbles:!0,cancelable:!0,composed:!0},{name:"socialShareLoaded",method:"socialShareLoaded",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-web-social-share-target-h{margin:auto;width:var(--web-social-share-target-width,4rem);height:var(--web-social-share-target-height,3rem);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}button.sc-web-social-share-target{position:relative;cursor:pointer;border:0;background:transparent;width:var(--web-social-share-button-width,100%);height:var(--web-social-share-button-height,100%);font-size:var(--web-social-share-button-font-size)}p.sc-web-social-share-target{bottom:0;color:var(--web-social-share-brand-color,inherit);font-size:var(--web-social-share-brand-font-size,.6rem)}div.web-social-share-button-icon.sc-web-social-share-target, p.sc-web-social-share-target{position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);margin:0}div.web-social-share-button-icon.sc-web-social-share-target{top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:var(--web-social-share-target-icon-container-height,2rem)}"}}export{a as WebSocialShare,c as WebSocialShareTarget};