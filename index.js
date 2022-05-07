var CompareProductsLimit = 3, CompareProductsLimitMsg = "You have reached the maximum number of products you can compare against each other.";


id = "deferred_css" > (function () { setTimeout(function () { var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = '//www.magnumpackaging.co.uk/media/css/footer.css,footer-generic.css,footer-third-party.css,card-logos-png,back-to-top.css,site-footer,multisite-footer,blank-2809202124.css'; var h = document.getElementsByTagName('title')[0]; h.parentNode.insertBefore(l, h); }, 50); })();
type = "text/javascript" > vs.q(function () {
    if (typeof vsIntel.transaction !== 'undefined') { var checkoutData = vsIntel.transaction; window.vsanalytics('addTrans', checkoutData.transactionId, checkoutData.transactionAffiliation, Number(checkoutData.transactionGoodsTotal), Number(checkoutData.transactionTax), Number(checkoutData.transactionShipping), checkoutData.customerTown.toString(), checkoutData.customerCity.toString(), checkoutData.customerCountry.toString(), vsIntel.currencyCode.toString()); checkoutData.products.forEach(function (product) { window.vsanalytics('addItem', checkoutData.transactionId, product.sku.toString(), product.product_name.toString(), (product.category ? product.category.toString() : ''), Number(product.price), Number(product.quantity), vsIntel.currencyCode.toString()); }); window.vsanalytics('trackTrans'); }
    if (typeof Product !== 'undefined') { Product.onEvent("added_to_basket", function (event) { window.vsanalytics('trackAddToCart', Product.getParentProductID().toString(), Product.getProductTitle().toString(), '', Number(Product.getFlatPrice().inc), Number(Product.getQuantity()), vsIntel.currencyCode.toString()); }); }
    if (typeof QuickBuy !== 'undefined') { QuickBuy.onEvent("added_to_basket", function (event) { window.vsanalytics('trackAddToCart', event.parent_product_id.toString(), event.product_title.toString(), '', Number(event.product_price_inc), Number(event.original_quantity), vsIntel.currencyCode.toString()); }); }
    if (typeof autoComplete !== 'undefined') {
        autoComplete.onEvent("search_results_received", function (event) {
            var search_term = event.search_term; var products_shown = 0; if (search_term !== undefined) {
                if (typeof event.products !== 'undefined') { products_shown = event.products.length }
                window.vsanalytics('trackSiteSearch', search_term.split(' '), null, Number(event.products_count), Number(products_shown));
            }
        });
    }
});





window.lazySizesConfig = window.lazySizesConfig || {}; window.lazySizesConfig.expand = 200; window.lazySizesConfig.expFactor = 1.2; window.lazySizesConfig.loadHidden = ''; !function (t, e) { var n = function (t, e) { "use strict"; if (!e.getElementsByClassName) return; var n, a, i = e.documentElement, r = t.Date, o = t.HTMLPictureElement, s = "addEventListener", l = "getAttribute", u = t[s], c = t.setTimeout, d = t.requestAnimationFrame || c, f = t.requestIdleCallback, m = /^picture$/i, z = ["load", "error", "lazyincluded", "_lazyloaded"], v = {}, y = Array.prototype.forEach, g = function (t, e) { return v[e] || (v[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), v[e].test(t[l]("class") || "") && v[e] }, h = function (t, e) { g(t, e) || t.setAttribute("class", (t[l]("class") || "").trim() + " " + e) }, p = function (t, e) { var n; (n = g(t, e)) && t.setAttribute("class", (t[l]("class") || "").replace(n, " ")) }, C = function (t, e, n) { var a = n ? s : "removeEventListener"; n && C(t, e), z.forEach(function (n) { t[a](n, e) }) }, b = function (t, a, i, r, o) { var s = e.createEvent("CustomEvent"); return i || (i = {}), i.instance = n, s.initCustomEvent(a, !r, !o, i), t.dispatchEvent(s), s }, A = function (e, n) { var i; !o && (i = t.picturefill || a.pf) ? i({ reevaluate: !0, elements: [e] }) : n && n.src && (e.src = n.src) }, E = function (t, e) { return (getComputedStyle(t, null) || {})[e] }, N = function (t, e, n) { for (n = n || t.offsetWidth; n < a.minSize && e && !t._lazysizesWidth;)n = e.offsetWidth, e = e.parentNode; return n }, w = function () { var t, n, a = [], i = [], r = a, o = function () { var e = r; for (r = a.length ? i : a, t = !0, n = !1; e.length;)e.shift()(); t = !1 }, s = function (a, i) { t && !i ? a.apply(this, arguments) : (r.push(a), n || (n = !0, (e.hidden ? c : d)(o))) }; return s._lsFlush = o, s }(), M = function (t, e) { return e ? function () { w(t) } : function () { var e = this, n = arguments; w(function () { t.apply(e, n) }) } }, _ = function (t) { var e, n, a = function () { e = null, t() }, i = function () { var t = r.now() - n; t < 99 ? c(i, 99 - t) : (f || a)(a) }; return function () { n = r.now(), e || (e = c(i, 99)) } }; !function () { var e, n = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; a = t.lazySizesConfig || t.lazysizesConfig || {}; for (e in n) e in a || (a[e] = n[e]); t.lazySizesConfig = a, c(function () { a.init && x() }) }(); var T = function () { var o, d, z, v, N, T, x, B, F, S, L, R, k, D, H = /^img$/i, O = /^iframe$/i, P = "onscroll" in t && !/glebot/.test(navigator.userAgent), $ = 0, I = 0, q = -1, j = function (t) { I--, t && t.target && C(t.target, j), (!t || I < 0 || !t.target) && (I = 0) }, G = function (t, n) { var a, r = t, o = "hidden" == E(e.body, "visibility") || "hidden" != E(t, "visibility"); for (B -= n, L += n, F -= n, S += n; o && (r = r.offsetParent) && r != e.body && r != i;)(o = (E(r, "opacity") || 1) > 0) && "visible" != E(r, "overflow") && (a = r.getBoundingClientRect(), o = S > a.left && F < a.right && L > a.top - 1 && B < a.bottom + 1); return o }, J = function (t) { for (var e = t, n = 0; null !== e && 0 === n && "number" == typeof e.offsetTop;)n += e.offsetTop, e = null !== e.parentNode ? e.parentNode : null; return 0 === n }, K = function () { var t, r, s, u, c, f, m, z, y, g = n.elements; if ((v = a.loadMode) && I < 8 && (t = g.length)) { r = 0, q++, null == k && ("expand" in a || (a.expand = i.clientHeight > 500 && i.clientWidth > 500 ? 500 : 370), R = a.expand, k = R * a.expFactor), $ < k && I < 1 && q > 2 && v > 2 && !e.hidden ? ($ = k, q = 0) : $ = v > 1 && q > 1 && I < 6 ? R : 0; for (; r < t; r++)if (g[r] && !g[r]._lazyRace) if (P) if ((z = g[r][l]("data-expand")) && (f = 1 * z) || (f = $), y !== f && (T = innerWidth + f * D, x = innerHeight + f, m = -1 * f, y = f), s = g[r].getBoundingClientRect(), (L = s.bottom) >= m && (B = s.top) <= x && (S = s.right) >= m * D && (F = s.left) <= T && (L || S || F || B || J(g[r])) && (a.loadHidden || "hidden" != E(g[r], "visibility")) && (d && I < 3 && !z && (v < 3 || q < 4) || G(g[r], f))) { if (tt(g[r]), c = !0, I > 9) break } else !c && d && !u && I < 4 && q < 4 && v > 2 && (o[0] || a.preloadAfterLoad) && (o[0] || !z && (L || S || F || B || "auto" != g[r][l](a.sizesAttr))) && (u = o[0] || g[r]); else tt(g[r]); u && !c && tt(u) } }, Q = function (t) { var e, n = 0, i = a.throttleDelay, o = a.ricTimeout, s = function () { e = !1, n = r.now(), t() }, l = f && o > 49 ? function () { f(s, { timeout: o }), o !== a.ricTimeout && (o = a.ricTimeout) } : M(function () { c(s) }, !0); return function (t) { var a; (t = !0 === t) && (o = 33), e || (e = !0, (a = i - (r.now() - n)) < 0 && (a = 0), t || a < 9 ? l() : c(l, a)) } }(K), U = function (t) { h(t.target, a.loadedClass), p(t.target, a.loadingClass), C(t.target, X), b(t.target, "lazyloaded") }, V = M(U), X = function (t) { V({ target: t.target }) }, Y = function (t) { var e, n = t[l](a.srcsetAttr); (e = a.customMedia[t[l]("data-media") || t[l]("media")]) && t.setAttribute("media", e), n && t.setAttribute("srcset", n) }, Z = M(function (t, e, n, i, r) { var o, s, u, d, f, v; (f = b(t, "lazybeforeunveil", e)).defaultPrevented || (i && (n ? h(t, a.autosizesClass) : t.setAttribute("sizes", i)), s = t[l](a.srcsetAttr), o = t[l](a.srcAttr), r && (u = t.parentNode, d = u && m.test(u.nodeName || "")), v = e.firesLoad || "src" in t && (s || o || d), f = { target: t }, v && (C(t, j, !0), clearTimeout(z), z = c(j, 2500), h(t, a.loadingClass), C(t, X, !0)), d && y.call(u.getElementsByTagName("source"), Y), s ? t.setAttribute("srcset", s) : o && !d && (O.test(t.nodeName) ? function (t, e) { try { t.contentWindow.location.replace(e) } catch (n) { t.src = e } }(t, o) : t.src = o), r && (s || d) && A(t, { src: o })), t._lazyRace && delete t._lazyRace, p(t, a.lazyClass), w(function () { (!v || t.complete && t.naturalWidth > 1) && (v ? j(f) : I--, U(f)) }, !0) }), tt = function (t) { var e, n = H.test(t.nodeName), i = n && (t[l](a.sizesAttr) || t[l]("sizes")), r = "auto" == i; (!r && d || !n || !t[l]("src") && !t.srcset || t.complete || g(t, a.errorClass) || !g(t, a.lazyClass)) && (e = b(t, "lazyunveilread").detail, r && W.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, I++, Z(t, e, r, i, n)) }, et = function () { if (!d) if (r.now() - N < 999) c(et, 999); else { var t = _(function () { a.loadMode = 3, Q() }); d = !0, a.loadMode = 3, Q(), u("scroll", function () { 3 == a.loadMode && (a.loadMode = 2), t() }, !0) } }; return { _: function () { N = r.now(), n.elements = e.getElementsByClassName(a.lazyClass), o = e.getElementsByClassName(a.lazyClass + " " + a.preloadClass), D = a.hFac, u("scroll", Q, !0), u("resize", Q, !0), t.MutationObserver ? new MutationObserver(Q).observe(i, { childList: !0, subtree: !0, attributes: !0 }) : (i[s]("DOMNodeInserted", Q, !0), i[s]("DOMAttrModified", Q, !0), setInterval(Q, 999)), u("hashchange", Q, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (t) { e[s](t, Q, !0) }), /d$|^c/.test(e.readyState) ? et() : (u("load", et), e[s]("DOMContentLoaded", Q), c(et, 2e4)), n.elements.length ? (K(), w._lsFlush()) : Q() }, checkElems: Q, unveil: tt } }(), W = function () { var t, n = M(function (t, e, n, a) { var i, r, o; if (t._lazysizesWidth = a, a += "px", t.setAttribute("sizes", a), m.test(e.nodeName || "")) for (i = e.getElementsByTagName("source"), r = 0, o = i.length; r < o; r++)i[r].setAttribute("sizes", a); n.detail.dataAttr || A(t, n.detail) }), i = function (t, e, a) { var i, r = t.parentNode; r && (a = N(t, r, a), (i = b(t, "lazybeforesizes", { width: a, dataAttr: !!e })).defaultPrevented || (a = i.detail.width) && a !== t._lazysizesWidth && n(t, r, i, a)) }, r = _(function () { var e, n = t.length; if (n) for (e = 0; e < n; e++)i(t[e]) }); return { _: function () { t = e.getElementsByClassName(a.autosizesClass), u("resize", r) }, checkElems: r, updateElem: i } }(), x = function () { x.i || (x.i = !0, W._(), T._()) }; return n = { cfg: a, autoSizer: W, loader: T, init: x, uP: A, aC: h, rC: p, hC: g, fire: b, gW: N, rAF: w } }(t, t.document); t.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n) }(window); (function (window, factory) { var globalInstall = function () { factory(window.lazySizes); window.removeEventListener('lazyunveilread', globalInstall, true); }; factory = factory.bind(null, window, window.document); if (typeof module == 'object' && module.exports) { factory(require('lazysizes')); } else if (window.lazySizes) { globalInstall(); } else { window.addEventListener('lazyunveilread', globalInstall, true); } }(window, function (window, document, lazySizes) {
    'use strict'; var bgLoad, regBgUrlEscape; var uniqueUrls = {}; if (document.addEventListener) {
        regBgUrlEscape = /\(|\)|\s|'/; bgLoad = function (url, cb) { var img = document.createElement('img'); img.onload = function () { img.onload = null; img.onerror = null; img = null; cb(); }; img.onerror = img.onload; img.src = url; if (img && img.complete && img.onload) { img.onload(); } }; addEventListener('lazybeforeunveil', function (e) {
            if (e.detail.instance != lazySizes) { return; }
            var tmp, load, bg, poster; if (!e.defaultPrevented) {
                if (e.target.preload == 'none') { e.target.preload = 'auto'; }
                tmp = e.target.getAttribute('data-link'); if (tmp) { addStyleScript(tmp, true); }
                tmp = e.target.getAttribute('data-script'); if (tmp) { addStyleScript(tmp); }
                tmp = e.target.getAttribute('data-require'); if (tmp) { if (lazySizes.cfg.requireJs) { lazySizes.cfg.requireJs([tmp]); } else { addStyleScript(tmp); } }
                bg = e.target.getAttribute('data-bg'); if (bg) { e.detail.firesLoad = true; load = function () { e.target.style.backgroundImage = 'url(' + (regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg) + ')'; e.detail.firesLoad = false; lazySizes.fire(e.target, '_lazyloaded', {}, true, true); }; bgLoad(bg, load); }
                poster = e.target.getAttribute('data-poster'); if (poster) { e.detail.firesLoad = true; load = function () { e.target.poster = poster; e.detail.firesLoad = false; lazySizes.fire(e.target, '_lazyloaded', {}, true, true); }; bgLoad(poster, load); }
            }
        }, false);
    }
    function addStyleScript(src, style) {
        if (uniqueUrls[src]) { return; }
        var elem = document.createElement(style ? 'link' : 'script'); var insertElem = document.getElementsByTagName('script')[0]; if (style) { elem.rel = 'stylesheet'; elem.href = src; } else { elem.src = src; }
        uniqueUrls[src] = true; uniqueUrls[elem.src || elem.href] = true; insertElem.parentNode.insertBefore(elem, insertElem);
    }
}));












vs.q(function () { $('#js-home-slice-7 .promo-unit__slides').slickSlider({ lazyLoad: false, arrows: false, speed: 620, touchThreshold: 200, autoplaySpeed: 4000 }); });






vs.q(function () { typeof autoComplete !== 'undefined' && autoComplete.init('query', '3'); });
var collapsed_icon = 'icon-plus'; var expanded_icon = 'icon-minus'; vs.q(function () {
    function MobMenuLoad() { if (vs.deviceType() == 'mobile') { $('#js-hide-menu').removeClass('site-header__top__toggle--hide'); } }
    MobMenuLoad(); $(window).resize(function () { MobMenuLoad(); });
}, 3);
function getShCookie() { return ($.cookie('_sh') || '').split(',').filter(function (item) { return Boolean(item); }).map(function (item) { return --item; }); }
vs.q(function () {
    var $closeBanner = $('.site-header__sticky__close'); var $stickyHeader = $('.site-header__sticky--test'); var stickyHeaderHeight = $stickyHeader.outerHeight(); var $siteHeader = $('.site-header--sticky'); var siteHeaderHeight = $siteHeader.outerHeight(); $closeBanner.on('click', function () {
        $siteHeader.css('top', 0); $('body').css('padding-top', siteHeaderHeight); var $parent = $(this).closest('.site-header__sticky'); if (typeof jQuery !== 'undefined') {
            $parent.hide(); var oldValues = getShCookie(); var thisStickyHeader = $(this).closest('.site-header__sticky').get(0); var promoIndex = $('.site-header__sticky').toArray().indexOf(thisStickyHeader); if (promoIndex !== -1) { oldValues.push(promoIndex); }
            var newCookieValue = oldValues.map(function (item) { return ++item; }).join(','); $.cookie('_sh', newCookieValue, { expires: 14, path: '/' });
        }
    }); if (typeof document.cookie !== 'undefined' && document.cookie.indexOf('_sh') !== -1) { var promos = $('.site-header__sticky').toArray(); var closedPromoIndexs = getShCookie(); closedPromoIndexs.forEach(function (item) { item = Number(item); var promoElement = promos[item]; $(promoElement).hide(); }); $siteHeader.css('top', 0); if ($closeBanner.length) { $('body').css('padding-top', siteHeaderHeight); } };
})
vs.q(function () {
    var previous_device_type = ''; function expandableFooterLinks() {
        var
            container = $('#js-site-footer__top__quick-links'), list = $('.site-footer__top__quick-links ul'), title = $('.site-footer__top__quick-links__title'), open_at_start = [], current_device_type = vs.deviceType(), device_type_changed = current_device_type != previous_device_type, counter; previous_device_type = current_device_type; if (current_device_type == 'mobile') {
                if (!device_type_changed) { return; }
                container.addClass('site-footer__top__quick-links--expandable'); title.addClass('site-footer__top__quick-links__title--closed'); title.removeClass('site-footer__top__quick-links__title--open'); list.hide(); title.each(function () { var text = $(this).text().toLowerCase().split(' ').join('-'); $(this).addClass(text); for (i = 0; i < open_at_start.length; i++) { var classes = open_at_start[i]; if ($(this).hasClass(classes)) { $(this).siblings().show(); if ($(this).hasClass('site-footer__top__quick-links__title--closed')) { $(this).addClass('site-footer__top__quick-links__title--open'); $(this).removeClass('site-footer__top__quick-links__title--closed'); } } } }); title.unbind().on('click', function () { $(this).siblings().slideToggle(); if ($(this).hasClass('site-footer__top__quick-links__title--closed')) { $(this).addClass('site-footer__top__quick-links__title--open'); $(this).removeClass('site-footer__top__quick-links__title--closed'); } else { $(this).removeClass('site-footer__top__quick-links__title--open'); $(this).addClass('site-footer__top__quick-links__title--closed'); } });
            } else { title.unbind('click'); list.show(); if (container.hasClass('site-footer__top__quick-links--expandable')) { container.removeClass('site-footer__top__quick-links--expandable'); } }
    }
    expandableFooterLinks(); $(window).resize(expandableFooterLinks);
});
vs.q(function () {
    var
        $siteHeader = $('.site-header'), $overlay = $('.site-overlay'), $headerNav = $('.site-header__nav'), $headerNavItem = $('.drop-down--nav'), $headerNavMenu = $('.site-header__nav__menu'), delay = 0; if ($overlay.length) { $siteHeader.addClass('site-header--overlay'); }
    if (delay > 0) {
        $headerNavItem.addClass('drop-down--nav--delay'); function over(ev) {
            if ($overlay.length) { $headerNav.addClass('active_overlay'); $overlay.show(); $overlay.addClass('visible'); }
            $(this).addClass('delay'); var hovered = document.elementFromPoint(ev.clientX, ev.clientY); $(hovered).trigger(ev);
        }
        function out() {
            if ($overlay.length) { $headerNav.removeClass('active_overlay'); $overlay.hide(); $overlay.removeClass('visible'); }
            $(this).removeClass('delay');
        }
        $headerNavMenu.hoverIntent({ over: over, out: out, interval: delay, timeout: 100, });
    } else if ($overlay.length) { $headerNavMenu.on('mouseenter', function () { if (vs.deviceType() != 'mobile') { $overlay.stop(true); $overlay.delay(500).fadeIn(0); $overlay.addClass('visible'); $headerNav.addClass('active_overlay'); $(this).addClass('active_dropdown'); } }).on('mouseleave', function () { if (vs.deviceType() != 'mobile') { $overlay.stop(true); $overlay.delay(500).fadeOut(0); $overlay.removeClass('visible'); $headerNav.removeClass('active_overlay'); $(this).removeClass('active_dropdown'); } }); }
});


vs.js('https://www.magnumpackaging.co.uk/media/js/jquery,picturefill,appendAround,matchHeight,jquery-cookie,modal,modal-ajax,modernizr,slick,slickSlider,fastclick,jquery-scrollto,jquery-viewport,responsiveTabs,mustache,tache,common_resp,header,back_to_top,vs.debounce,header-menu,blank-2809202124.js', function () { typeof jQuery !== 'undefined' && ($ = jQuery); }, 1); vs.js('https://www.magnumpackaging.co.uk/media/js/compare-products,web-speech,voice-search,search,blank-2809202124.js', function () {
    var i, l = vs.vsjsq2.length; for (i = 0; i < l; i++) { try { vs.vsjsq2[i](); } catch (e) { window.console && console.error(e); } }
    vs.vsjsq2 = [];
}, 2);



vs.deferJS();


vs.q(function () { if (window.navigator.userAgent.indexOf("Edge") > -1) { $('.product img[srcset]').each(function () { $(this).attr('src', $(this).attr('src') + '?' + Math.random()); }); } });













