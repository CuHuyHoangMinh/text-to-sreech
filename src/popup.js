$(function() {
    // sends message to background script
    chrome.runtime.sendMessage({opened: true}, function(response) {
        console.log(response.example);
    });
});

var background = chrome.extension.getBackgroundPage();
var screams = background.screams;

function getSelectionText() {
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    }, function(selection) {
        textToScreech(selection[0]);
    });
}

function textToScreech(text) {
    // chrome.extension.getBackgroundPage().console.log(text);

    for (var i=0; i<text.length; i++) {
        var char = text[i];
        char = char.toUpperCase();
        var x = char.charCodeAt(0);
        chrome.extension.getBackgroundPage().console.log(x);

        if (x == 32) {
            screams[0].play();
        } else if (x <= 57 && x >= 48) {
            screams[x-47].play();
        } else if (x <= 90 && x >= 65) {
            screams[x-54].play();
        } else if (x == 33) {
            screams[37].play();
        } else if (x == 44 || x == 46) {
            screams[38].play();
        } else if (x == 63) {
            screams[39].play();
        } else {
            screams[40].play();
        }

        for (var j=0; j<300000000; j++) {}

    }
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('click-this');

    link.addEventListener('click', function() {
        getSelectionText();
    });
});
