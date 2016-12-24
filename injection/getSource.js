/**
 * Created by bagjeongtae on 2016. 12. 24..
 */
function get_source(document_body){
    return document_body.innerText;
}
chrome.extension.sendMessage({
    action: "getSource",
    source: get_source(document.body)
});

document.addEventListener("click", function(e){
    chrome.extension.sendMessage({
        action: "getTag",
        source: get_source(document.body)
    });
});