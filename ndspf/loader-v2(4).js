(function() {

    var __hs_cta_json = {"css":"a#cta_button_5430756_d231677c-1240-49e6-82f8-f6260bef9eb1 {\n    cursor: pointer !important;\n\n    \n  }\n\na#cta_button_5430756_d231677c-1240-49e6-82f8-f6260bef9eb1:hover {\n}\n\na#cta_button_5430756_d231677c-1240-49e6-82f8-f6260bef9eb1:active, #cta_button_5430756_d231677c-1240-49e6-82f8-f6260bef9eb1:active:hover {\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_5430756_d231677c-1240-49e6-82f8-f6260bef9eb1\" class=\"cta_button\" href=\"https://www.narrative.io/cs/c/?cta_guid=d231677c-1240-49e6-82f8-f6260bef9eb1&placement_guid=652df545-d02e-4658-8d7a-90af9c627f10&portal_id=5430756&canon=https%3A%2F%2Fwww.narrative.io%2F&redirect_url=APefjpF7U2B1P2nYrwjOXy2onk9lStF25eanRAYaXLb6H1kNcAxjv6rtq_D5oIVAJfuJDne8ko2uccPWejDxnwNVWkqmKzwRRdoVxVrl9cwq5UJ2pJBIj5_ZHniZJZ4K1n5tPm9RdL5gwH706wQpLRajWXBIEpWZuxZFQd579ZXKa9CnATve5k0mGJVGgdYpS5uuLMVosKh7rJK7sA--DyTTaTHTHPZocSaZYNEGIIZi4FMFDdmhX0c&click=279f4eb5-a5fe-4b1b-8960-ea2d8307fc9e&hsutk=8d13bb7e1b569e389129c49df23178a5&signature=AAH58kE3jMhSeTM2g7XLjw5rXmecy72XjA&pageId=26082396627\"  cta_dest_link=\"https://www.narrative.io/demo\"><img id=\"hs-cta-img-652df545-d02e-4658-8d7a-90af9c627f10\" class=\"hs-cta-img button color-1\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Get a Demo\" src=\"https://cdn2.hubspot.net/hubshot/20/04/06/983e5e6c-9e2d-4688-81b9-628172a71f94.png\" srcset=\"https://cdn2.hubspot.net/hubshot/20/04/06/7729ee88-9c87-4fe2-998d-12dbae51afaa.png 4x, https://cdn2.hubspot.net/hubshot/20/04/06/b2b25151-5d0e-4053-a379-b7704263ee35.png 3x, https://cdn2.hubspot.net/hubshot/20/04/06/8b668a33-7205-46ae-8bff-0ed79ff5e245.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-652df545-d02e-4658-8d7a-90af9c627f10","raw_html":"<a id=\"cta_button_5430756_d231677c-1240-49e6-82f8-f6260bef9eb1\" class=\"cta_button button color-1\" href=\"https://www.narrative.io/cs/c/?cta_guid=d231677c-1240-49e6-82f8-f6260bef9eb1&placement_guid=652df545-d02e-4658-8d7a-90af9c627f10&portal_id=5430756&canon=https%3A%2F%2Fwww.narrative.io%2F&redirect_url=APefjpF7U2B1P2nYrwjOXy2onk9lStF25eanRAYaXLb6H1kNcAxjv6rtq_D5oIVAJfuJDne8ko2uccPWejDxnwNVWkqmKzwRRdoVxVrl9cwq5UJ2pJBIj5_ZHniZJZ4K1n5tPm9RdL5gwH706wQpLRajWXBIEpWZuxZFQd579ZXKa9CnATve5k0mGJVGgdYpS5uuLMVosKh7rJK7sA--DyTTaTHTHPZocSaZYNEGIIZi4FMFDdmhX0c&click=279f4eb5-a5fe-4b1b-8960-ea2d8307fc9e&hsutk=8d13bb7e1b569e389129c49df23178a5&signature=AAH58kE3jMhSeTM2g7XLjw5rXmecy72XjA&pageId=26082396627\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.narrative.io/demo\" title=\"Get a Demo\">Get a Demo</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('652df545-d02e-4658-8d7a-90af9c627f10');
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
    window._hsq.push(['trackCtaView', '652df545-d02e-4658-8d7a-90af9c627f10', 'd231677c-1240-49e6-82f8-f6260bef9eb1']);
    

}());
