
(function($) {
  Drupal.behaviors.CToolsJumpMenu = {
    attach: function(context) {
      $('.ctools-jump-menu-hide')
        .once('ctools-jump-menu')
        .hide();

      $('.ctools-jump-menu-change')
        .once('ctools-jump-menu')
        .change(function() {
          var loc = $(this).val();
          var urlArray = loc.split('::');
          if (urlArray[1]) {
            location.href = urlArray[1];
          }
          else {
            location.href = loc;
          }
          return false;
        });

      $('.ctools-jump-menu-button')
        .once('ctools-jump-menu')
        .click(function() {
          // Instead of submitting the form, just perform the redirect.

          // Find our sibling value.
          var $select = $(this).parents('form').find('.ctools-jump-menu-select');
          var loc = $select.val();
          var urlArray = loc.split('::');
          if (urlArray[1]) {
            location.href = urlArray[1];
          }
          else {
            location.href = loc;
          }
          return false;
        });
    }
  }
})(jQuery);
;
/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2009 M. Alsup
 * Version: 2.73 (04-NOV-2009)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6 or later
 *
 * Originally based on the work of:
 *	1) Matt Oakes
 *	2) Torsten Baldes (http://medienfreunde.com/lab/innerfade/)
 *	3) Benjamin Sterling (http://www.benjaminsterling.com/experiments/jqShuffle/)
 */
(function(i){var l="2.73";if(i.support==undefined){i.support={opacity:!(i.browser.msie)}}function a(q){if(i.fn.cycle.debug){f(q)}}function f(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "))}}i.fn.cycle=function(r,q){var s={s:this.selector,c:this.context};if(this.length===0&&r!="stop"){if(!i.isReady&&s.s){f("DOM not ready, queuing slideshow");i(function(){i(s.s,s.c).cycle(r,q)});return this}f("terminating; zero elements found by selector"+(i.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var w=m(this,r,q);if(w===false){return}if(this.cycleTimeout){clearTimeout(this.cycleTimeout)}this.cycleTimeout=this.cyclePause=0;var x=i(this);var y=w.slideExpr?i(w.slideExpr,this):x.children();var u=y.get();if(u.length<2){f("terminating; too few slides: "+u.length);return}var t=k(x,y,u,w,s);if(t===false){return}var v=t.continuous?10:h(t.currSlide,t.nextSlide,t,!t.rev);if(v){v+=(t.delay||0);if(v<10){v=10}a("first timeout: "+v);this.cycleTimeout=setTimeout(function(){e(u,t,0,!t.rev)},v)}})};function m(q,t,r){if(q.cycleStop==undefined){q.cycleStop=0}if(t===undefined||t===null){t={}}if(t.constructor==String){switch(t){case"stop":q.cycleStop++;if(q.cycleTimeout){clearTimeout(q.cycleTimeout)}q.cycleTimeout=0;i(q).removeData("cycle.opts");return false;case"pause":q.cyclePause=1;return false;case"resume":q.cyclePause=0;if(r===true){t=i(q).data("cycle.opts");if(!t){f("options not found, can not resume");return false}if(q.cycleTimeout){clearTimeout(q.cycleTimeout);q.cycleTimeout=0}e(t.elements,t,1,1)}return false;case"prev":case"next":var u=i(q).data("cycle.opts");if(!u){f('options not found, "prev/next" ignored');return false}i.fn.cycle[t](u);return false;default:t={fx:t}}return t}else{if(t.constructor==Number){var s=t;t=i(q).data("cycle.opts");if(!t){f("options not found, can not advance slide");return false}if(s<0||s>=t.elements.length){f("invalid slide index: "+s);return false}t.nextSlide=s;if(q.cycleTimeout){clearTimeout(q.cycleTimeout);q.cycleTimeout=0}if(typeof r=="string"){t.oneTimeFx=r}e(t.elements,t,1,s>=t.currSlide);return false}}return t}function b(q,r){if(!i.support.opacity&&r.cleartype&&q.style.filter){try{q.style.removeAttribute("filter")}catch(s){}}}function k(y,J,u,t,E){var C=i.extend({},i.fn.cycle.defaults,t||{},i.metadata?y.metadata():i.meta?y.data():{});if(C.autostop){C.countdown=C.autostopCount||u.length}var r=y[0];y.data("cycle.opts",C);C.$cont=y;C.stopCount=r.cycleStop;C.elements=u;C.before=C.before?[C.before]:[];C.after=C.after?[C.after]:[];C.after.unshift(function(){C.busy=0});if(!i.support.opacity&&C.cleartype){C.after.push(function(){b(this,C)})}if(C.continuous){C.after.push(function(){e(u,C,0,!C.rev)})}n(C);if(!i.support.opacity&&C.cleartype&&!C.cleartypeNoBg){g(J)}if(y.css("position")=="static"){y.css("position","relative")}if(C.width){y.width(C.width)}if(C.height&&C.height!="auto"){y.height(C.height)}if(C.startingSlide){C.startingSlide=parseInt(C.startingSlide)}if(C.random){C.randomMap=[];for(var H=0;H<u.length;H++){C.randomMap.push(H)}C.randomMap.sort(function(L,w){return Math.random()-0.5});C.randomIndex=0;C.startingSlide=C.randomMap[0]}else{if(C.startingSlide>=u.length){C.startingSlide=0}}C.currSlide=C.startingSlide=C.startingSlide||0;var x=C.startingSlide;J.css({position:"absolute",top:0,left:0}).hide().each(function(w){var L=x?w>=x?u.length-(w-x):x-w:u.length-w;i(this).css("z-index",L)});i(u[x]).css("opacity",1).show();b(u[x],C);if(C.fit&&C.width){J.width(C.width)}if(C.fit&&C.height&&C.height!="auto"){J.height(C.height)}var D=C.containerResize&&!y.innerHeight();if(D){var v=0,B=0;for(var F=0;F<u.length;F++){var q=i(u[F]),K=q[0],A=q.outerWidth(),I=q.outerHeight();if(!A){A=K.offsetWidth}if(!I){I=K.offsetHeight}v=A>v?A:v;B=I>B?I:B}if(v>0&&B>0){y.css({width:v+"px",height:B+"px"})}}if(C.pause){y.hover(function(){this.cyclePause++},function(){this.cyclePause--})}if(c(C)===false){return false}var s=false;t.requeueAttempts=t.requeueAttempts||0;J.each(function(){var N=i(this);this.cycleH=(C.fit&&C.height)?C.height:N.height();this.cycleW=(C.fit&&C.width)?C.width:N.width();if(N.is("img")){var L=(i.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var O=(i.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var M=(i.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var w=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(L||O||M||w){if(E.s&&C.requeueOnImageNotLoaded&&++t.requeueAttempts<100){f(t.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){i(E.s,E.c).cycle(t)},C.requeueTimeout);s=true;return false}else{f("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}}return true});if(s){return false}C.cssBefore=C.cssBefore||{};C.animIn=C.animIn||{};C.animOut=C.animOut||{};J.not(":eq("+x+")").css(C.cssBefore);if(C.cssFirst){i(J[x]).css(C.cssFirst)}if(C.timeout){C.timeout=parseInt(C.timeout);if(C.speed.constructor==String){C.speed=i.fx.speeds[C.speed]||parseInt(C.speed)}if(!C.sync){C.speed=C.speed/2}while((C.timeout-C.speed)<250){C.timeout+=C.speed}}if(C.easing){C.easeIn=C.easeOut=C.easing}if(!C.speedIn){C.speedIn=C.speed}if(!C.speedOut){C.speedOut=C.speed}C.slideCount=u.length;C.currSlide=C.lastSlide=x;if(C.random){C.nextSlide=C.currSlide;if(++C.randomIndex==u.length){C.randomIndex=0}C.nextSlide=C.randomMap[C.randomIndex]}else{C.nextSlide=C.startingSlide>=(u.length-1)?0:C.startingSlide+1}if(!C.multiFx){var G=i.fn.cycle.transitions[C.fx];if(i.isFunction(G)){G(y,J,C)}else{if(C.fx!="custom"&&!C.multiFx){f("unknown transition: "+C.fx,"; slideshow terminating");return false}}}var z=J[x];if(C.before.length){C.before[0].apply(z,[z,z,C,true])}if(C.after.length>1){C.after[1].apply(z,[z,z,C,true])}if(C.next){i(C.next).bind(C.prevNextEvent,function(){return o(C,C.rev?-1:1)})}if(C.prev){i(C.prev).bind(C.prevNextEvent,function(){return o(C,C.rev?1:-1)})}if(C.pager){d(u,C)}j(C,u);return C}function n(q){q.original={before:[],after:[]};q.original.cssBefore=i.extend({},q.cssBefore);q.original.cssAfter=i.extend({},q.cssAfter);q.original.animIn=i.extend({},q.animIn);q.original.animOut=i.extend({},q.animOut);i.each(q.before,function(){q.original.before.push(this)});i.each(q.after,function(){q.original.after.push(this)})}function c(w){var u,s,r=i.fn.cycle.transitions;if(w.fx.indexOf(",")>0){w.multiFx=true;w.fxs=w.fx.replace(/\s*/g,"").split(",");for(u=0;u<w.fxs.length;u++){var v=w.fxs[u];s=r[v];if(!s||!r.hasOwnProperty(v)||!i.isFunction(s)){f("discarding unknown transition: ",v);w.fxs.splice(u,1);u--}}if(!w.fxs.length){f("No valid transitions named; slideshow terminating.");return false}}else{if(w.fx=="all"){w.multiFx=true;w.fxs=[];for(p in r){s=r[p];if(r.hasOwnProperty(p)&&i.isFunction(s)){w.fxs.push(p)}}}}if(w.multiFx&&w.randomizeEffects){var t=Math.floor(Math.random()*20)+30;for(u=0;u<t;u++){var q=Math.floor(Math.random()*w.fxs.length);w.fxs.push(w.fxs.splice(q,1)[0])}a("randomized fx sequence: ",w.fxs)}return true}function j(r,q){r.addSlide=function(u,v){var t=i(u),w=t[0];if(!r.autostopCount){r.countdown++}q[v?"unshift":"push"](w);if(r.els){r.els[v?"unshift":"push"](w)}r.slideCount=q.length;t.css("position","absolute");t[v?"prependTo":"appendTo"](r.$cont);if(v){r.currSlide++;r.nextSlide++}if(!i.support.opacity&&r.cleartype&&!r.cleartypeNoBg){g(t)}if(r.fit&&r.width){t.width(r.width)}if(r.fit&&r.height&&r.height!="auto"){$slides.height(r.height)}w.cycleH=(r.fit&&r.height)?r.height:t.height();w.cycleW=(r.fit&&r.width)?r.width:t.width();t.css(r.cssBefore);if(r.pager){i.fn.cycle.createPagerAnchor(q.length-1,w,i(r.pager),q,r)}if(i.isFunction(r.onAddSlide)){r.onAddSlide(t)}else{t.hide()}}}i.fn.cycle.resetState=function(r,q){q=q||r.fx;r.before=[];r.after=[];r.cssBefore=i.extend({},r.original.cssBefore);r.cssAfter=i.extend({},r.original.cssAfter);r.animIn=i.extend({},r.original.animIn);r.animOut=i.extend({},r.original.animOut);r.fxFn=null;i.each(r.original.before,function(){r.before.push(this)});i.each(r.original.after,function(){r.after.push(this)});var s=i.fn.cycle.transitions[q];if(i.isFunction(s)){s(r.$cont,i(r.elements),r)}};function e(x,q,w,y){if(w&&q.busy&&q.manualTrump){i(x).stop(true,true);q.busy=false}if(q.busy){return}var u=q.$cont[0],A=x[q.currSlide],z=x[q.nextSlide];if(u.cycleStop!=q.stopCount||u.cycleTimeout===0&&!w){return}if(!w&&!u.cyclePause&&((q.autostop&&(--q.countdown<=0))||(q.nowrap&&!q.random&&q.nextSlide<q.currSlide))){if(q.end){q.end(q)}return}if(w||!u.cyclePause){var v=q.fx;A.cycleH=A.cycleH||i(A).height();A.cycleW=A.cycleW||i(A).width();z.cycleH=z.cycleH||i(z).height();z.cycleW=z.cycleW||i(z).width();if(q.multiFx){if(q.lastFx==undefined||++q.lastFx>=q.fxs.length){q.lastFx=0}v=q.fxs[q.lastFx];q.currFx=v}if(q.oneTimeFx){v=q.oneTimeFx;q.oneTimeFx=null}i.fn.cycle.resetState(q,v);if(q.before.length){i.each(q.before,function(B,C){if(u.cycleStop!=q.stopCount){return}C.apply(z,[A,z,q,y])})}var s=function(){i.each(q.after,function(B,C){if(u.cycleStop!=q.stopCount){return}C.apply(z,[A,z,q,y])})};if(q.nextSlide!=q.currSlide){q.busy=1;if(q.fxFn){q.fxFn(A,z,q,s,y)}else{if(i.isFunction(i.fn.cycle[q.fx])){i.fn.cycle[q.fx](A,z,q,s)}else{i.fn.cycle.custom(A,z,q,s,w&&q.fastOnEvent)}}}q.lastSlide=q.currSlide;if(q.random){q.currSlide=q.nextSlide;if(++q.randomIndex==x.length){q.randomIndex=0}q.nextSlide=q.randomMap[q.randomIndex]}else{var t=(q.nextSlide+1)==x.length;q.nextSlide=t?0:q.nextSlide+1;q.currSlide=t?x.length-1:q.nextSlide-1}if(q.pager){i.fn.cycle.updateActivePagerLink(q.pager,q.currSlide)}}var r=0;if(q.timeout&&!q.continuous){r=h(A,z,q,y)}else{if(q.continuous&&u.cyclePause){r=10}}if(r>0){u.cycleTimeout=setTimeout(function(){e(x,q,0,!q.rev)},r)}}i.fn.cycle.updateActivePagerLink=function(q,r){i(q).each(function(){i(this).find("a").removeClass("activeSlide").filter("a:eq("+r+")").addClass("activeSlide")})};function h(v,s,u,r){if(u.timeoutFn){var q=u.timeoutFn(v,s,u,r);while((q-u.speed)<250){q+=u.speed}a("calculated timeout: "+q+"; speed: "+u.speed);if(q!==false){return q}}return u.timeout}i.fn.cycle.next=function(q){o(q,q.rev?-1:1)};i.fn.cycle.prev=function(q){o(q,q.rev?1:-1)};function o(r,u){var q=r.elements;var t=r.$cont[0],s=t.cycleTimeout;if(s){clearTimeout(s);t.cycleTimeout=0}if(r.random&&u<0){r.randomIndex--;if(--r.randomIndex==-2){r.randomIndex=q.length-2}else{if(r.randomIndex==-1){r.randomIndex=q.length-1}}r.nextSlide=r.randomMap[r.randomIndex]}else{if(r.random){if(++r.randomIndex==q.length){r.randomIndex=0}r.nextSlide=r.randomMap[r.randomIndex]}else{r.nextSlide=r.currSlide+u;if(r.nextSlide<0){if(r.nowrap){return false}r.nextSlide=q.length-1}else{if(r.nextSlide>=q.length){if(r.nowrap){return false}r.nextSlide=0}}}}if(i.isFunction(r.prevNextClick)){r.prevNextClick(u>0,r.nextSlide,q[r.nextSlide])}e(q,r,1,u>=0);return false}function d(r,s){var q=i(s.pager);i.each(r,function(t,u){i.fn.cycle.createPagerAnchor(t,u,q,r,s)});i.fn.cycle.updateActivePagerLink(s.pager,s.startingSlide)}i.fn.cycle.createPagerAnchor=function(u,v,s,t,w){var r;if(i.isFunction(w.pagerAnchorBuilder)){r=w.pagerAnchorBuilder(u,v)}else{r='<a href="#">'+(u+1)+"</a>"}if(!r){return}var x=i(r);if(x.parents("body").length===0){var q=[];if(s.length>1){s.each(function(){var y=x.clone(true);i(this).append(y);q.push(y[0])});x=i(q)}else{x.appendTo(s)}}x.bind(w.pagerEvent,function(A){A.preventDefault();w.nextSlide=u;var z=w.$cont[0],y=z.cycleTimeout;if(y){clearTimeout(y);z.cycleTimeout=0}if(i.isFunction(w.pagerClick)){w.pagerClick(w.nextSlide,t[w.nextSlide])}e(t,w,1,w.currSlide<u);return false});if(w.pagerEvent!="click"){x.click(function(){return false})}if(w.pauseOnPagerHover){x.hover(function(){w.$cont[0].cyclePause++},function(){w.$cont[0].cyclePause--})}};i.fn.cycle.hopsFromLast=function(t,s){var r,q=t.lastSlide,u=t.currSlide;if(s){r=u>q?u-q:t.slideCount-q}else{r=u<q?q-u:q+t.slideCount-u}return r};function g(s){function r(t){t=parseInt(t).toString(16);return t.length<2?"0"+t:t}function q(w){for(;w&&w.nodeName.toLowerCase()!="html";w=w.parentNode){var t=i.css(w,"background-color");if(t.indexOf("rgb")>=0){var u=t.match(/\d+/g);return"#"+r(u[0])+r(u[1])+r(u[2])}if(t&&t!="transparent"){return t}}return"#ffffff"}s.each(function(){i(this).css("background-color",q(this))})}i.fn.cycle.commonReset=function(v,t,u,r,s,q){i(u.elements).not(v).hide();u.cssBefore.opacity=1;u.cssBefore.display="block";if(r!==false&&t.cycleW>0){u.cssBefore.width=t.cycleW}if(s!==false&&t.cycleH>0){u.cssBefore.height=t.cycleH}u.cssAfter=u.cssAfter||{};u.cssAfter.display="none";i(v).css("zIndex",u.slideCount+(q===true?1:0));i(t).css("zIndex",u.slideCount+(q===true?0:1))};i.fn.cycle.custom=function(B,v,q,s,r){var A=i(B),w=i(v);var t=q.speedIn,z=q.speedOut,u=q.easeIn,y=q.easeOut;w.css(q.cssBefore);if(r){if(typeof r=="number"){t=z=r}else{t=z=1}u=y=null}var x=function(){w.animate(q.animIn,t,u,s)};A.animate(q.animOut,z,y,function(){if(q.cssAfter){A.css(q.cssAfter)}if(!q.sync){x()}});if(q.sync){x()}};i.fn.cycle.transitions={fade:function(r,s,q){s.not(":eq("+q.currSlide+")").css("opacity",0);q.before.push(function(v,t,u){i.fn.cycle.commonReset(v,t,u);u.cssBefore.opacity=0});q.animIn={opacity:1};q.animOut={opacity:0};q.cssBefore={top:0,left:0}}};i.fn.cycle.ver=function(){return l};i.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,prevNextClick:null,prevNextEvent:"click",pager:null,pagerClick:null,pagerEvent:"click",pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!i.support.opacity,cleartypeNoBg:false,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250}})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2008 M. Alsup
 * Version:	 2.72
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function(a){a.fn.cycle.transitions.none=function(c,d,b){b.fxFn=function(g,e,f,h){a(e).show();a(g).hide();h()}};a.fn.cycle.transitions.scrollUp=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.height();c.cssBefore={top:b,left:0};c.cssFirst={top:0};c.animIn={top:0};c.animOut={top:-b}};a.fn.cycle.transitions.scrollDown=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.height();c.cssFirst={top:0};c.cssBefore={top:-b,left:0};c.animIn={top:0};c.animOut={top:b}};a.fn.cycle.transitions.scrollLeft=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.width();c.cssFirst={left:0};c.cssBefore={left:b,top:0};c.animIn={left:0};c.animOut={left:0-b}};a.fn.cycle.transitions.scrollRight=function(d,e,c){d.css("overflow","hidden");c.before.push(a.fn.cycle.commonReset);var b=d.width();c.cssFirst={left:0};c.cssBefore={left:-b,top:0};c.animIn={left:0};c.animOut={left:b}};a.fn.cycle.transitions.scrollHorz=function(c,d,b){c.css("overflow","hidden").width();b.before.push(function(h,f,g,e){a.fn.cycle.commonReset(h,f,g);g.cssBefore.left=e?(f.cycleW-1):(1-f.cycleW);g.animOut.left=e?-h.cycleW:h.cycleW});b.cssFirst={left:0};b.cssBefore={top:0};b.animIn={left:0};b.animOut={top:0}};a.fn.cycle.transitions.scrollVert=function(c,d,b){c.css("overflow","hidden");b.before.push(function(h,f,g,e){a.fn.cycle.commonReset(h,f,g);g.cssBefore.top=e?(1-f.cycleH):(f.cycleH-1);g.animOut.top=e?h.cycleH:-h.cycleH});b.cssFirst={top:0};b.cssBefore={left:0};b.animIn={top:0};b.animOut={left:0}};a.fn.cycle.transitions.slideX=function(c,d,b){b.before.push(function(g,e,f){a(f.elements).not(g).hide();a.fn.cycle.commonReset(g,e,f,false,true);f.animIn.width=e.cycleW});b.cssBefore={left:0,top:0,width:0};b.animIn={width:"show"};b.animOut={width:0}};a.fn.cycle.transitions.slideY=function(c,d,b){b.before.push(function(g,e,f){a(f.elements).not(g).hide();a.fn.cycle.commonReset(g,e,f,true,false);f.animIn.height=e.cycleH});b.cssBefore={left:0,top:0,height:0};b.animIn={height:"show"};b.animOut={height:0}};a.fn.cycle.transitions.shuffle=function(e,f,d){var c,b=e.css("overflow","visible").width();f.css({left:0,top:0});d.before.push(function(i,g,h){a.fn.cycle.commonReset(i,g,h,true,true,true)});if(!d.speedAdjusted){d.speed=d.speed/2;d.speedAdjusted=true}d.random=0;d.shuffle=d.shuffle||{left:-b,top:15};d.els=[];for(c=0;c<f.length;c++){d.els.push(f[c])}for(c=0;c<d.currSlide;c++){d.els.push(d.els.shift())}d.fxFn=function(m,j,l,g,i){var h=i?a(m):a(j);a(j).css(l.cssBefore);var k=l.slideCount;h.animate(l.shuffle,l.speedIn,l.easeIn,function(){var o=a.fn.cycle.hopsFromLast(l,i);for(var q=0;q<o;q++){i?l.els.push(l.els.shift()):l.els.unshift(l.els.pop())}if(i){for(var r=0,n=l.els.length;r<n;r++){a(l.els[r]).css("z-index",n-r+k)}}else{var s=a(m).css("z-index");h.css("z-index",parseInt(s)+1+k)}h.animate({left:0,top:0},l.speedOut,l.easeOut,function(){a(i?this:m).hide();if(g){g()}})})};d.cssBefore={display:"block",opacity:1,top:0,left:0}};a.fn.cycle.transitions.turnUp=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false);f.cssBefore.top=e.cycleH;f.animIn.height=e.cycleH});b.cssFirst={top:0};b.cssBefore={left:0,height:0};b.animIn={top:0};b.animOut={height:0}};a.fn.cycle.transitions.turnDown=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false);f.animIn.height=e.cycleH;f.animOut.top=g.cycleH});b.cssFirst={top:0};b.cssBefore={left:0,top:0,height:0};b.animOut={height:0}};a.fn.cycle.transitions.turnLeft=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true);f.cssBefore.left=e.cycleW;f.animIn.width=e.cycleW});b.cssBefore={top:0,width:0};b.animIn={left:0};b.animOut={width:0}};a.fn.cycle.transitions.turnRight=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true);f.animIn.width=e.cycleW;f.animOut.left=g.cycleW});b.cssBefore={top:0,left:0,width:0};b.animIn={left:0};b.animOut={width:0}};a.fn.cycle.transitions.zoom=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,false,true);f.cssBefore.top=e.cycleH/2;f.cssBefore.left=e.cycleW/2;f.animIn={top:0,left:0,width:e.cycleW,height:e.cycleH};f.animOut={width:0,height:0,top:g.cycleH/2,left:g.cycleW/2}});b.cssFirst={top:0,left:0};b.cssBefore={width:0,height:0}};a.fn.cycle.transitions.fadeZoom=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,false);f.cssBefore.left=e.cycleW/2;f.cssBefore.top=e.cycleH/2;f.animIn={top:0,left:0,width:e.cycleW,height:e.cycleH}});b.cssBefore={width:0,height:0};b.animOut={opacity:0}};a.fn.cycle.transitions.blindX=function(d,e,c){var b=d.css("overflow","hidden").width();c.before.push(function(h,f,g){a.fn.cycle.commonReset(h,f,g);g.animIn.width=f.cycleW;g.animOut.left=h.cycleW});c.cssBefore={left:b,top:0};c.animIn={left:0};c.animOut={left:b}};a.fn.cycle.transitions.blindY=function(d,e,c){var b=d.css("overflow","hidden").height();c.before.push(function(h,f,g){a.fn.cycle.commonReset(h,f,g);g.animIn.height=f.cycleH;g.animOut.top=h.cycleH});c.cssBefore={top:b,left:0};c.animIn={top:0};c.animOut={top:b}};a.fn.cycle.transitions.blindZ=function(e,f,d){var c=e.css("overflow","hidden").height();var b=e.width();d.before.push(function(i,g,h){a.fn.cycle.commonReset(i,g,h);h.animIn.height=g.cycleH;h.animOut.top=i.cycleH});d.cssBefore={top:c,left:b};d.animIn={top:0,left:0};d.animOut={top:c,left:b}};a.fn.cycle.transitions.growX=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true);f.cssBefore.left=this.cycleW/2;f.animIn={left:0,width:this.cycleW};f.animOut={left:0}});b.cssBefore={width:0,top:0}};a.fn.cycle.transitions.growY=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false);f.cssBefore.top=this.cycleH/2;f.animIn={top:0,height:this.cycleH};f.animOut={top:0}});b.cssBefore={height:0,left:0}};a.fn.cycle.transitions.curtainX=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,false,true,true);f.cssBefore.left=e.cycleW/2;f.animIn={left:0,width:this.cycleW};f.animOut={left:g.cycleW/2,width:0}});b.cssBefore={top:0,width:0}};a.fn.cycle.transitions.curtainY=function(c,d,b){b.before.push(function(g,e,f){a.fn.cycle.commonReset(g,e,f,true,false,true);f.cssBefore.top=e.cycleH/2;f.animIn={top:0,height:e.cycleH};f.animOut={top:g.cycleH/2,height:0}});b.cssBefore={left:0,height:0}};a.fn.cycle.transitions.cover=function(f,g,e){var i=e.direction||"left";var b=f.css("overflow","hidden").width();var c=f.height();e.before.push(function(j,d,h){a.fn.cycle.commonReset(j,d,h);if(i=="right"){h.cssBefore.left=-b}else{if(i=="up"){h.cssBefore.top=c}else{if(i=="down"){h.cssBefore.top=-c}else{h.cssBefore.left=b}}}});e.animIn={left:0,top:0};e.animOut={opacity:1};e.cssBefore={top:0,left:0}};a.fn.cycle.transitions.uncover=function(f,g,e){var i=e.direction||"left";var b=f.css("overflow","hidden").width();var c=f.height();e.before.push(function(j,d,h){a.fn.cycle.commonReset(j,d,h,true,true,true);if(i=="right"){h.animOut.left=b}else{if(i=="up"){h.animOut.top=-c}else{if(i=="down"){h.animOut.top=c}else{h.animOut.left=-b}}}});e.animIn={left:0,top:0};e.animOut={opacity:1};e.cssBefore={top:0,left:0}};a.fn.cycle.transitions.toss=function(e,f,d){var b=e.css("overflow","visible").width();var c=e.height();d.before.push(function(i,g,h){a.fn.cycle.commonReset(i,g,h,true,true,true);if(!h.animOut.left&&!h.animOut.top){h.animOut={left:b*2,top:-c/2,opacity:0}}else{h.animOut.opacity=0}});d.cssBefore={left:0,top:0};d.animIn={left:0}};a.fn.cycle.transitions.wipe=function(s,m,e){var q=s.css("overflow","hidden").width();var j=s.height();e.cssBefore=e.cssBefore||{};var g;if(e.clip){if(/l2r/.test(e.clip)){g="rect(0px 0px "+j+"px 0px)"}else{if(/r2l/.test(e.clip)){g="rect(0px "+q+"px "+j+"px "+q+"px)"}else{if(/t2b/.test(e.clip)){g="rect(0px "+q+"px 0px 0px)"}else{if(/b2t/.test(e.clip)){g="rect("+j+"px "+q+"px "+j+"px 0px)"}else{if(/zoom/.test(e.clip)){var o=parseInt(j/2);var f=parseInt(q/2);g="rect("+o+"px "+f+"px "+o+"px "+f+"px)"}}}}}}e.cssBefore.clip=e.cssBefore.clip||g||"rect(0px 0px 0px 0px)";var k=e.cssBefore.clip.match(/(\d+)/g);var u=parseInt(k[0]),c=parseInt(k[1]),n=parseInt(k[2]),i=parseInt(k[3]);e.before.push(function(w,h,t){if(w==h){return}var d=a(w),b=a(h);a.fn.cycle.commonReset(w,h,t,true,true,false);t.cssAfter.display="block";var r=1,l=parseInt((t.speedIn/13))-1;(function v(){var y=u?u-parseInt(r*(u/l)):0;var z=i?i-parseInt(r*(i/l)):0;var A=n<j?n+parseInt(r*((j-n)/l||1)):j;var x=c<q?c+parseInt(r*((q-c)/l||1)):q;b.css({clip:"rect("+y+"px "+x+"px "+A+"px "+z+"px)"});(r++<=l)?setTimeout(v,13):d.css("display","none")})()});e.cssBefore={display:"block",opacity:1,top:0,left:0};e.animIn={left:0};e.animOut={left:0}}})(jQuery);;
/*
jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
Uses the built in easing capabilities added In jQuery 1.1 to offer multiple easing options
TERMS OF USE - jQuery Easing
Open source under the BSD License. Copyright © 2008 George McGinley Smith, All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:  Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIY OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
*/
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});;
(function ($) { $(document).ready(function() {
			if ($('.slides_container').length > 0) {
				$('.slides_container').cycle({ 
					fx: 'scrollHorz',
					speed: 800,
					timeout: 800, 
					randomizeEffects: false, 
					easing: 'easeOutCubic',
					next:   '.s_button_next', 
					prev:   '.s_button_prev',
					pager:  '#slidePager',
					cleartypeNoBg: true
				});
			}
  }); })(jQuery);;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
