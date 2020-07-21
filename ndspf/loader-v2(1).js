(function() {

    var __hs_cta_json = {"css":"a#cta_button_5430756_73de1293-2b6e-473e-8f95-a195d32ddb1f {\n    cursor: pointer !important;\n\n    \n  }\n\na#cta_button_5430756_73de1293-2b6e-473e-8f95-a195d32ddb1f:hover {\n}\n\na#cta_button_5430756_73de1293-2b6e-473e-8f95-a195d32ddb1f:active, #cta_button_5430756_73de1293-2b6e-473e-8f95-a195d32ddb1f:active:hover {\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_5430756_73de1293-2b6e-473e-8f95-a195d32ddb1f\" class=\"cta_button\" href=\"https://www.narrative.io/cs/c/?cta_guid=73de1293-2b6e-473e-8f95-a195d32ddb1f&placement_guid=43aecabd-a1a1-4d5b-a473-8cf8ba3bc032&portal_id=5430756&canon=https%3A%2F%2Fwww.narrative.io%2F&redirect_url=APefjpEiR6XWfI_8CVbAspZ0BxAfSRdoqBdaWJ4JlxYdYGl-NRR92ZiGpxjmi2S0S_kHKO0Hz6O9Ij-iVsartS9MyEiodSbWFT4zvD0tiSRRzWcvSxc00_goYx9LxKL_1MdmO2ILWcCHEE5E5WaEdf0qGlw6GJqAf-psuqXYVeeih0ayxUKdhmWu_BKWrFvuo1R4kqSohRz8z4Ne2-GqVU01rEcGvnSXxw&click=f0ceebfe-d129-4ac6-b994-f835bad7a8c0&hsutk=8d13bb7e1b569e389129c49df23178a5&signature=AAH58kHFmOdNxbXP-cIXyPe0f3Xp9Fx1Ng&pageId=26082396627\"  target=\"_blank\"  cta_dest_link=\"https://data.narrative.io\"><img id=\"hs-cta-img-43aecabd-a1a1-4d5b-a473-8cf8ba3bc032\" class=\"hs-cta-img button white empty small\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Log in\" src=\"https://cdn2.hubspot.net/hubshot/20/04/08/de686e63-0b62-4369-a79c-c3d723dbf94a.png\" srcset=\"https://cdn2.hubspot.net/hubshot/20/04/08/2a96bd3e-b234-499d-b0b8-1ae6ba250548.png 4x, https://cdn2.hubspot.net/hubshot/20/04/08/cd7e2975-ce45-4cc5-9324-c2a49cf47870.png 3x, https://cdn2.hubspot.net/hubshot/20/04/08/995f6c1b-f897-48a3-8899-98d64ed6d087.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-43aecabd-a1a1-4d5b-a473-8cf8ba3bc032","raw_html":"<a id=\"cta_button_5430756_73de1293-2b6e-473e-8f95-a195d32ddb1f\" class=\"cta_button button white empty small\" href=\"https://www.narrative.io/cs/c/?cta_guid=73de1293-2b6e-473e-8f95-a195d32ddb1f&placement_guid=43aecabd-a1a1-4d5b-a473-8cf8ba3bc032&portal_id=5430756&canon=https%3A%2F%2Fwww.narrative.io%2F&redirect_url=APefjpEiR6XWfI_8CVbAspZ0BxAfSRdoqBdaWJ4JlxYdYGl-NRR92ZiGpxjmi2S0S_kHKO0Hz6O9Ij-iVsartS9MyEiodSbWFT4zvD0tiSRRzWcvSxc00_goYx9LxKL_1MdmO2ILWcCHEE5E5WaEdf0qGlw6GJqAf-psuqXYVeeih0ayxUKdhmWu_BKWrFvuo1R4kqSohRz8z4Ne2-GqVU01rEcGvnSXxw&click=f0ceebfe-d129-4ac6-b994-f835bad7a8c0&hsutk=8d13bb7e1b569e389129c49df23178a5&signature=AAH58kHFmOdNxbXP-cIXyPe0f3Xp9Fx1Ng&pageId=26082396627\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://data.narrative.io\" title=\"Log in\">Log in</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('43aecabd-a1a1-4d5b-a473-8cf8ba3bc032');
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
    window._hsq.push(['trackCtaView', '43aecabd-a1a1-4d5b-a473-8cf8ba3bc032', '73de1293-2b6e-473e-8f95-a195d32ddb1f']);
    

}());
