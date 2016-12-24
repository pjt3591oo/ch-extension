/**
 * Created by bagjeongtae on 2016. 12. 24..
 */

function get_source(document_body){
    return document_body.innerText;
}

document.addEventListener('click', function(e){
    chrome.extension.sendMessage({
        action: "code",
        source: e.toElement.innerText
    });
});

