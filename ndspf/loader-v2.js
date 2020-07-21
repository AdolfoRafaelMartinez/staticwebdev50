(function() {

    var __hs_cta_json = {"css":"a#cta_button_5430756_6e4b6d5a-4111-415e-93ce-b814da611e8a {\n    cursor: pointer !important;\n\n    \n  }\n\na#cta_button_5430756_6e4b6d5a-4111-415e-93ce-b814da611e8a:hover {\n}\n\na#cta_button_5430756_6e4b6d5a-4111-415e-93ce-b814da611e8a:active, #cta_button_5430756_6e4b6d5a-4111-415e-93ce-b814da611e8a:active:hover {\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_5430756_6e4b6d5a-4111-415e-93ce-b814da611e8a\" class=\"cta_button\" href=\"https://www.narrative.io/cs/c/?cta_guid=6e4b6d5a-4111-415e-93ce-b814da611e8a&placement_guid=a1ee19c7-1896-4e56-849d-4d0f4cff4e0f&portal_id=5430756&canon=https%3A%2F%2Fwww.narrative.io%2F&redirect_url=APefjpFa_SCXBp0a-M4lZkBQZYCjUb3e9tHYQhxk_SAKCFqlMTp0suApD8sLd62fG_omlkU88vzJwgvpqJARPXrKTzHyMo-4P2iQiGnLiXIw4P90p-V3ZNHXmOb0Pw_uo-iCchBuRVvBKAxjr2gUmy-c4NYb6A1M8S-0GrH6jTxY-fufCbMFCAnXvJ4LbKBv1J0ZUFW3OZbFr4GbhyWUzqWhVe3EVLo71c7ssh86dBy0oq0OxP8YLg0&click=f2b7a6c1-aa4b-4d0b-aee4-12086e041bac&hsutk=8d13bb7e1b569e389129c49df23178a5&signature=AAH58kHZ8uTIiXl1LXsOq1S3mkTmO6a1aA&pageId=26082396627\"  cta_dest_link=\"https://www.narrative.io/demo\"><img id=\"hs-cta-img-a1ee19c7-1896-4e56-849d-4d0f4cff4e0f\" class=\"hs-cta-img button color-1 small\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Get started\" src=\"https://cdn2.hubspot.net/hubshot/20/04/08/1432f95b-8536-4f5b-8e11-ecce1bccfaa5.png\" srcset=\"https://cdn2.hubspot.net/hubshot/20/04/08/8e782dd8-06eb-4f98-ba21-8339a8b69b0e.png 4x, https://cdn2.hubspot.net/hubshot/20/04/08/8d9a2c9a-7bd4-4782-aa36-1d39f194752d.png 3x, https://cdn2.hubspot.net/hubshot/20/04/08/3e6f3104-0242-4ffc-bb9e-efc1632373ef.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-a1ee19c7-1896-4e56-849d-4d0f4cff4e0f","raw_html":"<a id=\"cta_button_5430756_6e4b6d5a-4111-415e-93ce-b814da611e8a\" class=\"cta_button button color-1 small\" href=\"https://www.narrative.io/cs/c/?cta_guid=6e4b6d5a-4111-415e-93ce-b814da611e8a&placement_guid=a1ee19c7-1896-4e56-849d-4d0f4cff4e0f&portal_id=5430756&canon=https%3A%2F%2Fwww.narrative.io%2F&redirect_url=APefjpFa_SCXBp0a-M4lZkBQZYCjUb3e9tHYQhxk_SAKCFqlMTp0suApD8sLd62fG_omlkU88vzJwgvpqJARPXrKTzHyMo-4P2iQiGnLiXIw4P90p-V3ZNHXmOb0Pw_uo-iCchBuRVvBKAxjr2gUmy-c4NYb6A1M8S-0GrH6jTxY-fufCbMFCAnXvJ4LbKBv1J0ZUFW3OZbFr4GbhyWUzqWhVe3EVLo71c7ssh86dBy0oq0OxP8YLg0&click=f2b7a6c1-aa4b-4d0b-aee4-12086e041bac&hsutk=8d13bb7e1b569e389129c49df23178a5&signature=AAH58kHZ8uTIiXl1LXsOq1S3mkTmO6a1aA&pageId=26082396627\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.narrative.io/demo\" title=\"Get started\">Get started</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('a1ee19c7-1896-4e56-849d-4d0f4cff4e0f');
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
    window._hsq.push(['trackCtaView', 'a1ee19c7-1896-4e56-849d-4d0f4cff4e0f', '6e4b6d5a-4111-415e-93ce-b814da611e8a']);
    

}());
