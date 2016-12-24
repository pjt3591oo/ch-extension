// This one acts in the context of the panel in the Dev Tools
//
// Can use
// chrome.devtools.*
// chrome.extension.*

document.querySelector('#executescript').addEventListener('click', function() {
    sendObjectToInspectedPage({action: "code", content: "console.log('Inline script executed')"});
}, false);

document.querySelector('#insertscript').addEventListener('click', function() {
    sendObjectToInspectedPage({action: "script", content: "scripts/inserted-script.js"});
}, false);

document.querySelector('#insertmessagebutton').addEventListener('click', function() {
    sendObjectToInspectedPage({action: "code", content: "document.body.innerHTML='<button>Send message to DevTools</button>'"});
    sendObjectToInspectedPage({action: "script", content: "scripts/messageback-script.js"});
}, false);

// TODO 해당 페이지에서 다음 페이지로 넘어가면 스크립트를 주입한다.

function init(){
    sendObjectToInspectedPage({action: "script", content: "scripts/customer.js"});
    var port = chrome.runtime.connect({name: "Eval in context"});
    var clickFocus = '';

    document.getElementById('mung').addEventListener('click', function(){
       clickFocus = 'mung';
       alert(clickFocus);
    });

    port.onMessage.addListener(function (msg) {
        var text = msg;
        document.getElementById(clickFocus).value = text;
    });
}

window.onLoad = init();


