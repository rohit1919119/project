document.createElement('picture');

    !function (e) { var t = function () { e.console && console.log("Not yet implemented") }; e.vs = { dev: t, helper: {}, lang: t, module: t, setting: t, type: {}, deviceType: {}, vsq: [[], [], [], [], [], [], []], q: t, js: t, runQueue: t, deferJS: t, runMasterQueue: t, addJSInline: t, jsQueueRunning: !1, version: 1.4 } }(window), function (e) { var t = !1; void 0 !== e.vs_dev && (t = vs_dev, vs_dev = void 0), vs.dev = function () { return t && vs.helper.value_exists("debug", e.location.hash.slice(1).split(":")) }, vs.dev.log = function (t, n) { return vs.dev() && e.console && console.log(t), n } }(window), function (e) { e.vs.type.Module = function (e, t) { var n, r = ["name", "key"], o = { active: !0, name: e, key: vs.helper.key(e), data: {} }, t = t || {}; for (n in o) o.hasOwnProperty(n) && t.hasOwnProperty(n) && !vs.helper.key_exists(n, r) && (o[n] = t[n]), this[n] = o[n]; this.setting = function (e, t) { return vs.setting.call(this, e, t) } } }(window), function (e) { e.vs.helper, e.vs.helper, function (e) { var t = { array: "[object Array]", object: "[object Object]", string: "[object String]", number: "[object Number]", boolean: "[object Boolean]", function: "[object Function]", date: "[object Date]" }, n = Object.prototype.toString; e.vs.helper.type = function (e, r, o) { if (e = n.call(e), void 0 !== r) return t.hasOwnProperty(r) ? t[r.toLowerCase()] === e && ("object" !== e || !!(o && o.constructor && o.constructor.toString) && e.constructor.toString() === o.constructor.toString()) : vs.dev.log('Tried to check for an unknown data type: "' + r + '"', !1); for (r in t) if (t.hasOwnProperty(r) && t[r] === e) return r; return void 0 === r && void 0 } }(e), function (e) { var t = { left: function (e, t) { }, right: function (e, t) { }, both: function (e, t) { } }; e.vs.helper.trim = function (e, n, r) { return n = n || "\\s", r = r || "both", vs.helper.key_exists(r, t) || (r = vs.dev.log('Tried to trim a string from an invalid end: "' + r + '". Defaulting to "both"', "both")), vs.helper.type(e, "string") ? t[r](e, n) : "" }, t.left = function (e, t) { return e.replace(new RegExp("^[" + t.split().join("\\") + "]+", "g"), "") }, t.right = function (e, t) { return e.replace(new RegExp("[" + t.split().join("\\") + "]+$", "g"), "") }, t.both = function (e, n) { return t.left(t.right(e, n), n) } }(e), function (e) { e.vs.helper.key = function (e, t, n) { var r = "_invalid_key_", o = e, t = t || ""; return n = !vs.helper.type(n, "boolean") || n, t = n ? "a-z0-9_" + t : t, vs.helper.type(e, "string") ? e.length ? vs.helper.type(t, "string") ? e.length ? (e = e.toLowerCase().replace(new RegExp("[^" + t + "]", "g"), "")).length ? e = parseInt(e.slice(0, 1)) == e.slice(0, 1) ? "_" + e : e : vs.dev.log('Attempted to convert "' + o + '" to a key using character mask "' + t + '", but failed as the resulting string was empty', r) : vs.dev.log('Attempted to use the character mask "' + t + "\" for a key, but failed as it's empty", r) : vs.dev.log('Attempted to use the character mask "' + t + "\" for a key, but failed as it's not a string", r) : vs.dev.log('Attempted to convert "' + o + "\" to a key, but failed as it's empty", r) : vs.dev.log('Attempted to convert "' + o + "\" to a key, but failed as it's not a string", r) } }(e), function (e) { e.vs.helper.key_exists = function (e, t) { var n; if (vs.helper.type(t, "object")) { for (n in t) if (t.hasOwnProperty(n)) return !0 } else if (vs.helper.type(t, "array")) return void 0 !== t[e]; return !1 } }(e), function (e) { e.vs.helper.value_exists = function (e, t) { var n, r; if (vs.helper.type(t, "object")) { for (n in t) if (t.hasOwnProperty(n) && t[n] === e) return !0 } else if (vs.helper.type(t, "array")) for (r = 0; r < t.length; r++)if (t[r] === e) return !0; return !1 } }(e) }(window), function (e) { var t = { get: function (e, t) { }, set: function (e, t) { }, multiset: function (e) { }, get: function (e) { }, data: {} }; e.vs.lang = function (e, n) { if (void 0 !== e) { if (vs.helper.type(e, "object")) return t.multiset(e); if (e.length) { if (void 0 !== n && vs.helper.type(n, "array")) return t.set(e, n); if (void 0 === n || !vs.helper.type(n, "array")) return t.get(e, Array.prototype.slice.call(arguments, 1).reverse()) } } return !1 }, t.get = function (e, n) { var r, o, s = e = t.key(e), i = t.data, n = n || []; for (e = e.split(".").reverse(); r = e.pop();)i = "string" != typeof i && void 0 !== i[r] ? i[r] : {}; for (i = "string" == typeof i ? i : s; o = n.pop();)i = i.replace("%s", o); return i }, t.set = function (e, n) { var r, o = 0, s = t.data; for (e = t.key(e).split("."), o; o < e.length; o++)r = s[e[o]], o === e.length - 1 ? r = s[e[o]] = n[0] : void 0 === r && (r = s[e[o]] = {}), s = r; return e.join(".") }, t.multiset = function (e) { var t; for (t in e) e.hasOwnProperty(t) && vs.lang(t, [e[t]]); return !0 }, t.key = function (e) { return vs.helper.trim(vs.helper.key(e, ".").replace(/\.+/g, "."), ".") } }(window), function (e) { var t = { data: {}, key: function (e) { }, get: function (e) { }, set: function (e, t) { } }; e.vs.modules = function () { return t.data }, e.vs.module = function (e, n) { return void 0 !== e ? void 0 !== n ? t.set(e, n) : t.get(e) : e }, t.key = function (e) { return vs.helper.key(e) }, t.get = function (e) { return t.data[t.key(e)] || t.set(e, t.dummy(e)) }, t.set = function (e, n) { var r = t.key(e); return vs.helper.type(n, "object", vs.type.Module) ? t.data[r] = n : vs.dev.log("Tried to set module " + r + " but value is not an object", t.dummy(e)) }, t.dummy = function (e) { return new vs.type.Module(e, { active: !1 }) } }(window), function (e) { var t = { data: {}, key: function (e) { }, get: function (e) { }, set: function (e, t) { } }; vs.setting = function (e, n) { return void 0 !== e ? void 0 !== n ? this === vs ? t.set(e, n) : t.set.call(this, e, n) : this === vs ? t.get(e) : t.get.call(this, e) : e }, t.key = function (e) { return vs.helper.key(e) }, t.get = function (e) { return vs.helper.key_exists(e, this.data) ? this.data[e] : "" }, t.set = function (e, t) { return vs.helper.type(t, "string") ? (this.data[e] = t, e) : vs.dev.log('Settings may only be string values: "' + e + '"', e) } }(window), function (e) { var t, n, r, o, s = !1, i = function () { t = [], r = 0, o = [] }; vs.deviceType = function () { var t = document.getElementById("vs-browser-check"); switch (null == t && ((t = document.createElement("div")).id = "vs-browser-check", document.body.appendChild(t)), e.getComputedStyleIE = function (e) { return this.el = e, this.getPropertyValue = function (t) { var n = /(\-([a-z]){1})/g; return "float" == t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function () { return arguments[2].toUpperCase() })), e.currentStyle[t] ? e.currentStyle[t] : null }, this }, parseInt(e.getComputedStyle ? e.getComputedStyle(t, null).width : e.getComputedStyleIE(t).getPropertyValue("width"))) { case 5: return "mobile"; case 10: return "tablet"; default: return "desktop" } }, vs.q = function (e, t) { t = t || 5, vs.checkJSQueue(t), vs.vsq[t].push({ f: e }) }, vs.js = function (e, t, n) { n = n || 3, vs.checkJSQueue(n), vs.vsq[n].push({ j: e, c: t || function () { } }) }, vs.runQueue = function (n, s, i) { if (!vs.jsQueueRunning) return !1; if (s = s || !1, i = i || !1, void 0 !== n && void 0 !== vs.vsq[n] && 0 !== t[n]) { for (var u = s ? 0 : o[r], v = vs.vsq[n]; u < t[n];) { try { s || void 0 === v[u].j ? o[n] < t[n] && "function" == typeof v[u].f ? (v[u].f(), o[n]++) : "function" == typeof v[u].c && v[u].c() : vs.addJSInline(v[u].j, function () { }, n) } catch (t) { e.console && console.error(t) } u++ } i && (vs.vsq[n] = []) } }, vs.deferJS = function () { e.addEventListener ? e.addEventListener("load", vs.runMasterQueue, !1) : e.attachEvent ? e.attachEvent("onload", vs.runMasterQueue) : e.onload = vs.runMasterQueue, setTimeout(vs.runMasterQueue, 500) }, vs.checkQ = function () { if (void 0 !== vs.vsq[r] && t[r] === o[r]) { if (t[r] < vs.vsq[r].length) return t[r] = vs.vsq[r].length, vs.runQueue(r), void vs.dev.log("Queue length mismatch, re-running with only extra items in queue"); vs.runQueue(r, !0), vs.vsq[r] = [], void 0 === t[++r] ? (e.console && void 0 !== console.timeEnd && console.timeEnd("JavaScript"), vs.jsQueueRunning = !1, clearInterval(n), i(), s && setTimeout(vs.runMasterQueue, 1)) : vs.runQueue(r) } }, vs.checkJSQueue = function (e) { void 0 === vs.vsq[e] && (vs.vsq[e] = []) }, vs.addJSInline = function (e, t, n) { var r = document.createElement("script"); r.src = e, r.type = "text/javascript", r.async = "true", r.onload = r.onerror = function () { ++o[this.q] }.bind({ f: e, q: n }), document.body.appendChild(r) }, vs.runMasterQueue = function () { if (vs.jsQueueRunning) return s = !0, !1; vs.jsQueueRunning = !0, i(), e.console && void 0 !== console.time && console.time("JavaScript"); var r, u = vs.vsq.length; for (r = 0; r < u; r++)t[r] = vs.vsq[r].length, o[r] = 0; return s = !1, vs.runQueue(0), n = setInterval(vs.checkQ, 5), !0 } }(window); (function (window, undefined) { vs.lang({ "basket": { "remove_product": "Are you sure you want to remove this item from your bag? Click \"OK\" for Yes or \"Cancel\" for No", "stock_error": "There is not enough stock available for this item", "fixed_pack_warning": "This item can only be sold in fixed packs of PACK_QUANTITY. We have updated your selection to NEW_QUANTITY", "add_bulk_personalisation_please_select": "Please select some products to personalise.", "hover_disabled_error_message": "Cannot checkout while processing", "product_could_not_be_added_to_basket": "Product could not be added to bag" }, "lists": { "wants": "I'd like" }, "infinitescroll": { "loading_next_page": "Loading More Products", "no_more_pages": "No More Pages", "load_more": "&#8681; Load More Products &#8681;" }, "dynamic_variant_builder": { "step_select_a": "%s. Select a %s", "step_select": "%s. Select %s", "your_selection": "Your Selection", "more_info": "&gt; More Info", "nothing_selected": "You currently have nothing selected", "nothing_selected_alert": "You have not selected any products to add to the bag.\n\nPlease make some selections by changing the quantity against a product.", "items_added_to_basket": "Your selected items have been added to your bag", "total": "Total:", "buy_hidden_text": "Your selected products have been added to your bag...", "remove_all": "Remove All", "confirm_remove_single": "Are you sure that you want this item?", "confirm_remove_all": "Are you sure that you want to remove all of your selections?", "out_of_stock": "Out of Stock", "calculating_price": "<img src=\"\/images\/ajax-mini-loader.gif\" alt=\"calculating\" \/>", "selection_details_products_html": "\r\n <img width=\"9\" height=\"11\" alt=\"Remove\" src=\"\/images\/checkout\/icon_remove.gif\" class=\"remove_single\" \/>\r\n <span class=\"product_title\">{TITLE}<\/span>\r\n <span class=\"product_reference\">{REFERENCE}<\/span>\r\n <span class=\"product_quantity\">Qty: {QUANTITY}<\/span>\r\n <span class=\"product_price\">{PRICE}<\/span>", "selection_details_products_html_out_of_stock": "\r\n <img width=\"9\" height=\"11\" alt=\"Remove\" src=\"\/images\/checkout\/icon_remove.gif\" class=\"remove_single\" \/>\r\n <span class=\"product_title\">{TITLE}<\/span>\r\n <span class=\"product_reference\">{REFERENCE}<\/span>\r\n <span class=\"out_of_stock\">This item is currently not available<\/span>" }, "sprocket": { "chain_length_adjusted": "CHAIN LENGTH ADJUSTED TO SPROCKET OR WAS OVERRIDDEN", "chain_length": "CHAIN LENGTH", "chain_pitch": "CHAIN PITCH" }, "products": { "out_of_stock_1": "\n\nSorry, we currently only have ", "out_of_stock_2": " of this item in stock and it is already in your bag", "option_not_selected": "Please choose a %s", "options_out_of_stock": " - Out of Stock", "pack_of": "Pack of ", "pack_m2_price": " per m2", "pack_was_price": " was ", "pack_rrp_price": " RRP ", "pack_unit_price_prefix": "(", "pack_unit_price_suffix": " each)", "available_pack_sizes": "Available Pack Sizes", "pack_sizes_pick_options": "&nbsp;(choose options, to see per-pack prices)", "pack_sizes_pick_option": "&nbsp;(choose option, to see per-pack prices)", "pick_all_bundle_options": "Please make sure that you've picked all options, and they have stock.", "product_not_in_stock": "This item is not currently in stock", "age_restriction_warning": "Please tick to confirm your age.", "no_reviews": "No Reviews - Write a Review", "sample_added_to_basket": "Sample added to your bag", "sample_limit_reached": "Sample Limit Reached", "reward_point_message": "point", "reward_points_message": "points", "max_parent_purchase_exceeded_checkout_1": "\n\nSorry, you can only have ", "max_parent_purchase_exceeded_checkout_2": " of this item. Your bag will be updated to reflect this.", "images_available": "%s Images Available", "image_available": "%s Image Available", "personalisation_required_message": "Personalisation is required", "personalisation_wrong_pricing_grid_message": "Please check the sizes you have entered are within the maximum width and drops available.", "length_required_message": "Length is required", "bundle_select": "Select", "pay4later_not_available": "Finance is not currently available for current total", "product_could_not_be_added_to_basket": "Product could not be added to bag", "product_added_to_basket": "Thank you, the product has been added to your bag.", "select_all_options": "Please select all options for this product.", "was": "Was", "now": "Now", "save": "Save", "saving": "SAVING", "saved": "SAVED", "add_to_wishlist": "Add To Wishlist", "remove_from_wishlist": "Remove from Wishlist", "multibuy_discount_quantity_error": "The minimum purchase quantity for this deal is " }, "product_options_groups": { "please_select": "Please Select", "high_number": "High Number" }, "offers": { "all_options_not_chosen": "Please choose a valid option on all products, before adding this bundle to your bag", "option_not_chosen": "Please choose a valid option, before adding this product to your bag" }, "postcodeanywhere": { "start_typing": "Start typing your postcode, street or address", "enter_address_manually": "Enter Address Manually", "alternatively_search_again": "Alternatively, Search Again" }, "product_listings": { "filter_by": "Refine by %s", "remove_filter": "X", "enter_quantity": "Please enter the quantity you would like to purchase.", "show_more": "Show More", "show_less": "Show Less", "trade_pick_some_products": "Please pick some products.", "not_enough_stock": "There is not enough stock currently available.", "not_enough_stock_for_minimum_purchase": "There is not enough stock available to provide you with the minimum purchase quantity", "not_enough_stock_some_in_basket": "Some stock is already in your basket", "item": "Item", "items": "Items", "sort_relevancedescription": "Relevant", "sort_priceasc": "Price Low-High", "sort_pricedesc": "Price High-Low", "sort_titleasc": "Title A-Z", "sort_titledesc": "Title Z-A", "a-z": "Title A-Z", "z-a": "Title Z-A", "az": "Title A-Z", "za": "Title Z-A", "topsellers": "Top Sellers", "relevance": "Relevance", "lowhigh": "Price Low-High", "highlow": "Price High-Low" }, "hitachi": { "deposit_paid_invalid_payment_button_clicked": "You have already paid your deposit, and therefore can only proceed by continuing with your finance application.\n\nIf you would like to pay by an alternative method, please contact us." }, "quickorder": { "please_choose": "Please choose an option...", "loading_product": "LOADING PRODUCT", "loading": "Loading", "reference": "Reference", "unable_to_match_a_product_with_the_search_term_pre_keyword": "Unable to match a product with the search term ", "unable_to_match_a_product_with_the_search_term_post_keyword": ". Please try again.", "stock_limit_reached": "Stock Limit Reached", "confirm_remove": "Are you sure you would like to remove this line?", "submitting_empty_form": "You have not selected any products. Please try again." }, "promo_unit": { "event_timers": { "week": "week", "weeks": "weeks", "day": "days", "days": "days", "hour": "hr", "hours": "hr", "minute": "min", "minutes": "min", "second": "sec", "seconds": "sec" } }, "on_page_personalisation": { "max_dimensions_on_page_personalisation": { "width": "Width", "height": "Height" }, "width": "Width", "height": "Height", "unit_label_mm": " mm", "unit_label_cm": "cm", "unit_label_inches": " inches", "required": "* required", "product_unit_cost": "Product Unit Cost: ", "additional_options": "Additional Options: ", "pricing_grid_no_match": "Please check the sizes you have entered are within the maximum width and drops available. We have set them to within the ranges available.", "max_characters": "Maximum of %s characters!", "chars_remain": "characters remaining", "char_remain": "character remaining", "characters_count_colour": "black", "characters_count_colour_error": "red", "required_star": "*", "stock_delay_intro": "Customisation Delay: ", "stock_delay_header": "Please Note", "check_required_fields": "Please check that you have completed all required fields - there are some that it seems that you have missed!", "your_product": "Your Item", "your_options": "Your Options", "totals": "Totals", "please_choose": "please choose", "items": "Items", "unit_personalisation_subtotal": "Unit Customisation", "setup_charges": "Setup Charges", "grand_total": "Grand Total" }, "months": { "jan": "Jan", "feb": "Feb", "mar": "Mar", "apr": "Apr", "may": "May", "jun": "Jun", "jul": "Jul", "aug": "Aug", "sep": "Sep", "oct": "Oct", "nov": "Nov", "dec": "Dec" }, "product_personalisation": { "are_you_sure_to_cancel": "Are you sure you want to cancel?", "are_you_sure_to_abandon": "Are you sure you want to abandon your personalisation changes?" }, "customer": { "confirm_item_removal": "Are you sure you would like to cancel this item from your order?", "amendment_state_0": "No changes detected", "amendment_state_1": "Thank you for your adjustments, we will be in contact shortly to arrange a refund for the cancelled goods.", "amendment_state_2": "Thank you for your adjustments, we will be in contact shortly to arrange any applicable outstanding payment before dispatch.", "amendment_state_3": "Sorry, you can not cancel the order in it's entirety, please contact us for further assitance.", "amendment_error": "An error occurred whilst processing your request, please try again later or contact us for further assitance." }, "uploader": { "select_file": "Select File", "select_files": "Select Files", "change_file": "Change File", "change_files": "Change Files" }, "checkout_v2": { "delivery": { "collect_store_postcode": "Please enter a Postcode", "no_collect_stores": "No Collect Stores" } }, "trims": { "points_available": "You have %s points. This is equivalent to the value of \u00a3%s", "card_not_found": "Sorry your loyalty card was not found.", "not_enough_points": "Not enough points available", "general_error": "Sorry, there has been an error. Please try again." }, "pages": { "quote_does_not_exist": "Quote %s does not exist or has expired.", "quote_error_redeeming": "There was an error redeeming yuor quote. Please try again." }, "buylist": { "limit_reached": "The maximum number of products that you can add to your Buy List has been reached.", "confirm_delete": "Are you sure you want to clear your Buy List?", "confirm_delete_single": "Confirm Delete Single" }, "event_builder": { "booking_time": "Time" }, "dar_personalisation": { "button_text": "Button Text" }, "product_finder": { "products_found": "%s products found", "product_found": "%s product found", "products": "(%s products)", "product": "(%s product)", "show_result": "Show %s Result \u203a", "show_results": "Show %s Results \u203a", "reset_filters": "Reset filters", "top_products": "Top Products", "top_product": "Top Product", "of_results_found": "of %s products found", "of_result_found": "%s product found", "show_all_results": "Go-to All Results", "add_more_filters_type": "Next Step: Select %s", "add_more_filters_name": "Next Step: %s", "add_more_filters_finish": "Finalise Selection", "start_again_message": "Start from Beginning", "try_again_message": "Retry Last Request", "error_no_results_title": "No Results Found", "error_no_results_message": "Sorry, we are unable to find any products using the selected filters. If you wish you can start again using the link below, or if you wish you can modify your filters.", "error_no_filters_title": "Unable to filter further", "error_no_filters_message": "Sorry, we are unable to provide more filtering options based on your current selection. If you wish you can start again or view the results as they stand?", "error_ajax_issue_title": "Error Encountered", "error_ajax_issue_message": "Sorry, we had a little trouble with that request, if you wish you can try again, or start from the beginning using the links below.", "welcome_title": "Welcome to the %s Product Finder!", "welcome_message_vertical": "Please use the \"%s\" filter from the left hand menu to get started using the Product Finder.", "welcome_message_horizontal": "Please use the \"%s\" filter from the menu above to get started using the Product Finder.", "confirm_filter_reset": "Are you sure you wish to reset your selection?", "select_all": "Select All \/ Clear All", "clear_all": "Select All \/ Clear All", "tooltip_skipped": "%s has been skipped because there are no options to display based on your previous selections.", "tooltip_empty": "You have not selected any %s options.", "tooltip_auto": "%s only has 1 option based on your selections, we have automatically selected this for you." }, "search": { "no_results": "No results for &quot;%s&quot;" }, "my_account": { "addresses": { "confirm_remove_address": "Are you sure you want to delete this address?" } }, "slickslider_nav": { "next": "Next", "previous": "Previous" }, "imagesearch": { "form": { "errors": { "invalid_filetype": "Invalid Filetype", "file_too_large": "File Too Large" } } }, "upselling_recommendations": { "num_item": "(%s item)", "num_items": "(%s items)", "product_added_to_basket": "Product Added to Bag", "products_added_to_basket": "Products Added to Bag" } }); })(window); vs.vsjsq2 = []; if (typeof (jQuery) == 'undefined') {
        $ = jQuery = function (el) {
            if (typeof el === 'function') { vs.vsjsq2.push(el); return this; }
            return { ready: function (f) { vs.vsjsq2.push(f); return this; } };
        };
    }
    var enhancedEcommerce;
    window.EnhancedEcommerceLoaded = false;
    var enhancedEcommerceInterval = setInterval(function () {
        if (typeof EnhancedEcommerce !== 'undefined' && EnhancedEcommerce) {
            enhancedEcommerce = new EnhancedEcommerce(null);
            clearInterval(enhancedEcommerceInterval);
        }
    }, 100);



    var google_tag_params = {
        ecomm_prodid: '',
        ecomm_pcat: ['Catering Products'],
        ecomm_pagetype: 'category',
        ecomm_category: 'Catering Products'
    };
    var dataLayer = dataLayer || [];
    dataLayer.push({
        'event': 'remarketingTriggered',
        'google_tag_params': window.google_tag_params
    });
// <!-- Google Tag Manager Data -->
    var dataLayer = dataLayer || [];




    dataLayer.push({ 'currencyCode': 'GBP' });
    dataLayer.push({ 'customerId': '' });
    dataLayer.push({ 'customerEmail': '' });

    dataLayer.push({ 'customerDateRegistered': '' });
    dataLayer.push({ 'customerPoints': '' });
    dataLayer.push({ 'customerPointsNextLevel': '' });
    dataLayer.push({ 'customerType': '' });
    dataLayer.push({ 'basketCount': 0 });
    dataLayer.push({ 'basketProductTotal': 0 });
    dataLayer.push({ 'basketTotal': 0 });



    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start':
                new Date().getTime(), event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            '//www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-NQHNZ7Z');
    var dataLayer = dataLayer || [];
    vs.q(function () {
        dataLayer.push({ event: 'vs.js' });
    }, 3);

(function (window) {
        var v = {}; v.setting = {}; v.module_setting = {}; v.module_setting.product_options_module = {}; v.setting.product_price_breaks_based_on_parent = 'false'; v.setting.shop_price_inc_vat = 'true'; v.setting.site_domain = 'www.magnumpackaging.co.uk'; v.module_setting.product_options_module.hide_single_options = 'false'; window.vsvar = function (k) {
            k = k || ''; var s = k.split('.'), r = false, c = v; for (var i in s) {
                if (typeof s[i] == 'function') { continue; }
                if (s.hasOwnProperty(i) && typeof c[s[i]] !== 'undefined' && c[s[i]] !== 'false') { r = c = c[s[i]]; } else { r = false; }
            }
            return r;
        };
    })(window);

var vsIntel = { "su": "www.magnumpackaging.co.uk", "ctl": "productlistings", "mtd": "show", "arg": ["3"], "ud": "", "red": "", "cached": true, "currencyCode": "GBP", "pageType": "category", "category": { "categoryId": "3", "categoryHierarchy": [{ "seo_name": "catering-products", "name": "Catering Products", "category_id": "3" }] } }; (function (p, l, o, w, i, n, g) { if (!p[i]) { p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || []; p.GlobalSnowplowNamespace.push(i); p[i] = function () { (p[i].q = p[i].q || []).push(arguments) }; p[i].q = p[i].q || []; n = l.createElement(o); g = l.getElementsByTagName(o)[0]; n.async = 1; n.src = w; g.parentNode.insertBefore(n, g) } }(window, document, "script", "//cdnjs.cloudflare.com/ajax/libs/snowplow/2.17.0/sp.min.js", "vsanalytics")); window.vsanalytics('newTracker', 'cf', 'vsanalytics.visualsoft.co.uk', { appId: vsIntel.su, discoverRootDomain: true, cookieName: "vsa", beacon: false, eventMethod: 'post', forceSecureTracker: true, respectDoNotTrack: false, bufferSize: 1, contexts: { webPage: true, performanceTiming: true, gaCookies: false } }); window.vsanalytics('enableActivityTracking', 10, 30); window.vsanalytics('enableLinkClickTracking'); window.vsanalytics('setUserId', vsIntel.ud); window.vsanalytics('trackPageView', null, [{ schema: "iglu:com.visualsoft.vsanalytics/cache_status/jsonschema/1-0-0", data: { cached: vsIntel.cached } }, { schema: "iglu:com.visualsoft.vsanalytics/platform/jsonschema/1-0-0", data: { controller: vsIntel.ctl, method: vsIntel.mtd, pageType: vsIntel.pageType } }]);
