(function() {

    var __hs_cta_json = {"css":"a#cta_button_5430756_05f2e4c5-0b3b-4e64-b21c-2315d67132bf {\n    cursor: pointer !important;\n\n    \n  }\n\na#cta_button_5430756_05f2e4c5-0b3b-4e64-b21c-2315d67132bf:hover {\n}\n\na#cta_button_5430756_05f2e4c5-0b3b-4e64-b21c-2315d67132bf:active, #cta_button_5430756_05f2e4c5-0b3b-4e64-b21c-2315d67132bf:active:hover {\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_5430756_05f2e4c5-0b3b-4e64-b21c-2315d67132bf\" class=\"cta_button\" href=\"https://www.narrative.io/cs/c/?cta_guid=05f2e4c5-0b3b-4e64-b21c-2315d67132bf&placement_guid=0d05a37d-63c4-4a46-ae8e-e83891165549&portal_id=5430756&canon=https%3A%2F%2Fwww.narrative.io%2F&redirect_url=APefjpFWTRw5206ZwHnpJfsSzyEVGLex-Dml8c0VR5RKVVnE-tT2J9Wil2dSdRobgdjDKIS2ik5TGIdZarDY6FpfgZpPIhLJpvEjejulVwLAPgqarTag3exdigLSyoRWLtfGg1CIvx0HJNb6KD6Sjh4xbJx2GfuTpnx8Xn_IJe-xVwaa1op4byjkHiTuh1m7u1kovnDint8YDPB9luhMejr3mLA8bNeqgw&click=a2a6daf4-ff8c-4699-ac2c-7a62d250c63a&hsutk=8d13bb7e1b569e389129c49df23178a5&signature=AAH58kG6f9-1EOABD2Fz72a648j_ZKRHJQ&pageId=26082396627\"  target=\"_blank\"  cta_dest_link=\"https://data.narrative.io\"><img id=\"hs-cta-img-0d05a37d-63c4-4a46-ae8e-e83891165549\" class=\"hs-cta-img button header empty small\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Log in\" src=\"https://cdn2.hubspot.net/hubshot/20/04/08/4e7858a3-97cd-4fd2-9f8c-1046ae0dcd5c.png\" srcset=\"https://cdn2.hubspot.net/hubshot/20/04/08/8b42bf46-6fdc-4598-ab07-3f6c371557dc.png 4x, https://cdn2.hubspot.net/hubshot/20/04/08/913d940b-8360-411f-b989-2c0718e2f52b.png 3x, https://cdn2.hubspot.net/hubshot/20/04/08/349cb420-c964-4a32-9520-9eee7561ae9e.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-0d05a37d-63c4-4a46-ae8e-e83891165549","raw_html":"<a id=\"cta_button_5430756_05f2e4c5-0b3b-4e64-b21c-2315d67132bf\" class=\"cta_button button header empty small\" href=\"https://www.narrative.io/cs/c/?cta_guid=05f2e4c5-0b3b-4e64-b21c-2315d67132bf&placement_guid=0d05a37d-63c4-4a46-ae8e-e83891165549&portal_id=5430756&canon=https%3A%2F%2Fwww.narrative.io%2F&redirect_url=APefjpFWTRw5206ZwHnpJfsSzyEVGLex-Dml8c0VR5RKVVnE-tT2J9Wil2dSdRobgdjDKIS2ik5TGIdZarDY6FpfgZpPIhLJpvEjejulVwLAPgqarTag3exdigLSyoRWLtfGg1CIvx0HJNb6KD6Sjh4xbJx2GfuTpnx8Xn_IJe-xVwaa1op4byjkHiTuh1m7u1kovnDint8YDPB9luhMejr3mLA8bNeqgw&click=a2a6daf4-ff8c-4699-ac2c-7a62d250c63a&hsutk=8d13bb7e1b569e389129c49df23178a5&signature=AAH58kG6f9-1EOABD2Fz72a648j_ZKRHJQ&pageId=26082396627\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://data.narrative.io\" title=\"Log in\">Log in</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('0d05a37d-63c4-4a46-ae8e-e83891165549');
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
    window._hsq.push(['trackCtaView', '0d05a37d-63c4-4a46-ae8e-e83891165549', '05f2e4c5-0b3b-4e64-b21c-2315d67132bf']);
    

}());
