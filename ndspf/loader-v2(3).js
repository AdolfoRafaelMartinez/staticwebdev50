(function() {

    var __hs_cta_json = {"css":"a#cta_button_5430756_2cc2fa54-0d71-406d-bf6a-2c19f4bc1f0d {\n  cursor:pointer; \n}\na#cta_button_5430756_2cc2fa54-0d71-406d-bf6a-2c19f4bc1f0d:hover {\n}\na#cta_button_5430756_2cc2fa54-0d71-406d-bf6a-2c19f4bc1f0d:active, #cta_button_5430756_2cc2fa54-0d71-406d-bf6a-2c19f4bc1f0d:active:hover {\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_5430756_2cc2fa54-0d71-406d-bf6a-2c19f4bc1f0d\" class=\"cta_button\" href=\"https://www.narrative.io/cs/c/?cta_guid=2cc2fa54-0d71-406d-bf6a-2c19f4bc1f0d&placement_guid=f97ce0c4-ef67-4c94-8eaf-d92394126c41&portal_id=5430756&canon=https%3A%2F%2Fwww.narrative.io%2F&redirect_url=APefjpFAy2MEtcbotFKH3Aulif6do5w4NLTMf-8hEN9ZY7CYT1vcRY7oYAQlw0PNQIbCw7qJIGpyT5TwoUvhnG1AyGU6JZtj0VOv7d7BUogNMZ4fefmu0nn2fb8XeAJtd7EpZKmMB__U_RzSY6g1yvBsOrFnAleMgMjUr_rLGlbJ6SXzXXoxWtOwpVkgH9n95XxGy-20OyufPwuFb9_rOuMBSm877MhFcl8uQQXWSOkYmPz_tz-oMp8&click=09132c4f-8254-4709-ac0a-d5e49cab0fdf&hsutk=8d13bb7e1b569e389129c49df23178a5&signature=AAH58kEtiYa-yVzpXQY96uxEEVShr_zcPw&pageId=26082396627\"  cta_dest_link=\"https://www.narrative.io/demo\"><img id=\"hs-cta-img-f97ce0c4-ef67-4c94-8eaf-d92394126c41\" class=\"hs-cta-img button color-1 m10\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Get Started\" src=\"https://cdn2.hubspot.net/hubshot/20/04/20/41feafd4-ed47-4a31-9597-2fe86e8dde78.png\" srcset=\"https://cdn2.hubspot.net/hubshot/20/04/20/4cb89ee3-4c2e-4534-bdce-0fd792dbab67.png 4x, https://cdn2.hubspot.net/hubshot/20/04/20/794dcca9-8924-4418-a5c6-825fc194e367.png 3x, https://cdn2.hubspot.net/hubshot/20/04/20/f8b2cd15-2003-4d96-a22f-cbadf4f5fd22.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-f97ce0c4-ef67-4c94-8eaf-d92394126c41","raw_html":"<a id=\"cta_button_5430756_2cc2fa54-0d71-406d-bf6a-2c19f4bc1f0d\" class=\"cta_button button color-1 m10\" href=\"https://www.narrative.io/cs/c/?cta_guid=2cc2fa54-0d71-406d-bf6a-2c19f4bc1f0d&placement_guid=f97ce0c4-ef67-4c94-8eaf-d92394126c41&portal_id=5430756&canon=https%3A%2F%2Fwww.narrative.io%2F&redirect_url=APefjpFAy2MEtcbotFKH3Aulif6do5w4NLTMf-8hEN9ZY7CYT1vcRY7oYAQlw0PNQIbCw7qJIGpyT5TwoUvhnG1AyGU6JZtj0VOv7d7BUogNMZ4fefmu0nn2fb8XeAJtd7EpZKmMB__U_RzSY6g1yvBsOrFnAleMgMjUr_rLGlbJ6SXzXXoxWtOwpVkgH9n95XxGy-20OyufPwuFb9_rOuMBSm877MhFcl8uQQXWSOkYmPz_tz-oMp8&click=09132c4f-8254-4709-ac0a-d5e49cab0fdf&hsutk=8d13bb7e1b569e389129c49df23178a5&signature=AAH58kEtiYa-yVzpXQY96uxEEVShr_zcPw&pageId=26082396627\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.narrative.io/demo\" title=\"Get Started\">Get Started</a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }
            
            html = __hs_cta_json.raw_html;

        }
         

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('f97ce0c4-ef67-4c94-8eaf-d92394126c41');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', 'f97ce0c4-ef67-4c94-8eaf-d92394126c41', '2cc2fa54-0d71-406d-bf6a-2c19f4bc1f0d']);
    

}());
