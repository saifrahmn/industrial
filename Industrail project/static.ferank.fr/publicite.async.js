var ferankLoad = (ferankLoad === undefined) ? 0 : ferankLoad;if (!document.getElementsByClassName) {document.getElementsByClassName = function getElementsByClassName(className) {var results = [];var elems = document.getElementsByTagName("ins");for (var i=0, len=elems.length; i<len; i++) {if (elems[i].className.indexOf(className) !== -1) {results.push(elems[i]);}}return results;};}var ferankReady = function() {var ads = document.getElementsByClassName("ferank-publicite");for (i=0; i<ads.length; i++) {if(i < 3){var ferank_langue_match = navigator.language || navigator.userLanguage,ferank_langue = ferank_langue_match.substr(0, 2),ferank_uid = Math.floor(Math.random() * 10000000),ferank_referer = document.referrer,ferank_pt = (top.location.hostname != self.location.hostname) ? 1 : 0,ferank_height_iframe = parseInt(ads[i].offsetHeight),ferank_width_iframe = parseInt(ads[i].offsetWidth),ferank_uri = document.location.href.split('#')[0],ferank_urlframe = 'langue=' + ferank_langue + '&id_client=' + ads[i].getAttribute("client") + '&taille=' + ads[i].offsetWidth + 'x' + ads[i].offsetHeight + '&titre=' + ads[i].getAttribute("titre") + '&texte=' + ads[i].getAttribute("texte") + '&te=' + screen.width + screen.height + screen.colorDepth + '&ptc=' + ferank_pt + '&referer=' + escape(encodeURIComponent(ferank_referer)) + '&uri=' + escape(encodeURIComponent(ferank_uri)) + '&_frnk=' + (new Date()).getTime();if (ferank_width_iframe == '660') {ferank_width_frame = '100%';ads[i].style.width = '100%';} else {ferank_width_frame = ferank_width_iframe;}ads[i].innerHTML = unescape('%3Ciframe src="//static.ferank.fr/blank.html" width="' + ferank_width_frame + '" height="' + ferank_height_iframe + '" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" allowTransparency="true" frameborder="0" scrolling="no" style="display:block;clear:both;background:transparent;z-index:999999999999999999999" name="ferank_iframe' + ferank_uid + '" id="ferank_iframe' + ferank_uid + '"%3E%3C/iframe%3E%3Cform id="ferank_form' + ferank_uid + '" method="post" action="//publicite.ferank.fr/process.php" target="ferank_iframe' + ferank_uid + '"%3E%3Cinput type="hidden" name="data" value="' + ferank_urlframe + '" /%3E%3C/form%3E');document.getElementById('ferank_form' + ferank_uid).submit();}}};if(ferankLoad === 0) {ferankLoad = 1;if (document.readyState === "complete") { ferankReady(); } else if (window.addEventListener) {window.addEventListener("load", ferankReady, false);} else {window.attachEvent("onload", ferankReady);}}