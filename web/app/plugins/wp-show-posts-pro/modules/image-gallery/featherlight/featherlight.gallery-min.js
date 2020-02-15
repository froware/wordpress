!function(r){"use strict";var e=function(e){window.console&&window.console.warn&&window.console.warn("FeatherlightGallery: "+e)};if(void 0===r)return e("Too much lightness, Featherlight needs jQuery.");if(!r.featherlight)return e("Load the featherlight plugin before the gallery plugin");var t="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,n=r.event&&r.event.special.swipeleft&&r,i=window.Hammer&&function(e){var t=new window.Hammer.Manager(e[0]);return t.add(new window.Hammer.Swipe),t},a=t&&(n||i);t&&!a&&e("No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.");var s={afterClose:function(e,t){var n=this;return n.$instance.off("next."+n.namespace+" previous."+n.namespace),n._swiper&&(n._swiper.off("swipeleft",n._swipeleft).off("swiperight",n._swiperight),n._swiper=null),e(t)},beforeOpen:function(e,t){var n=this;return n.$instance.on("next."+n.namespace+" previous."+n.namespace,function(e){var t="next"===e.type?1:-1;n.navigateTo(n.currentNavigation()+t)}),a?n._swiper=a(n.$instance).on("swipeleft",n._swipeleft=function(){n.$instance.trigger("next")}).on("swiperight",n._swiperight=function(){n.$instance.trigger("previous")}):n.$instance.find("."+n.namespace+"-content").append(n.createNavigation("previous")).append(n.createNavigation("next")),e(t)},beforeContent:function(e,t){var n=this.currentNavigation(),i=this.slides().length;return this.$instance.toggleClass(this.namespace+"-first-slide",0===n).toggleClass(this.namespace+"-last-slide",n===i-1),e(t)},onKeyUp:function(e,t){var n={37:"previous",39:"next"}[t.keyCode];return n?(this.$instance.trigger(n),!1):e(t)}};function o(e,t){if(!(this instanceof o)){var n=new o(r.extend({$source:e,$currentTarget:e.first()},t));return n.open(),n}r.featherlight.apply(this,arguments),this.chainCallbacks(s)}r.featherlight.extend(o,{autoBind:"[data-featherlight-gallery]"}),r.extend(o.prototype,{previousIcon:"&#9664;",nextIcon:"&#9654;",galleryFadeIn:100,galleryFadeOut:300,slides:function(){return this.filter?this.$source.find(this.filter):this.$source},images:function(){return e("images is deprecated, please use slides instead"),this.slides()},currentNavigation:function(){return this.slides().index(this.$currentTarget)},navigateTo:function(e){var t=this,n=t.slides(),i=n.length,a=t.$instance.find("."+t.namespace+"-inner");return e=(e%i+i)%i,t.$currentTarget=n.eq(e),t.beforeContent(),r.when(t.getContent(),a.fadeTo(t.galleryFadeOut,.2)).always(function(e){t.setContent(e),t.afterContent(),e.fadeTo(t.galleryFadeIn,1)})},createNavigation:function(e){var t=this;return r('<span title="'+e+'" class="'+this.namespace+"-"+e+'"><span>'+this[e+"Icon"]+"</span></span>").click(function(){r(this).trigger(e+"."+t.namespace)})}}),r.featherlightGallery=o,r.fn.featherlightGallery=function(e){return o.attach(this,e)},r(document).ready(function(){o._onReady()})}(jQuery);
