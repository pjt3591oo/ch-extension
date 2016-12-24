/**
 * Created by bagjeongtae on 2016. 12. 24..
 */
chrome.app.runtime.onLaunched.addListener(function() {
   init();
});

function init(){
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': 400,
            'height': 500
        }
    });
}

