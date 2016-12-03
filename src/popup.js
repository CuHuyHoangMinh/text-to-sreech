$(function() {
    // sends message to background script
    chrome.runtime.sendMessage({opened: true}, function(response) {
        console.log(response.example);
    });
});

function getSelectionText() {
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    }, function(selection) {
        textToScreech(selection[0]);
    });
}

function textToScreech(text) {
    chrome.extension.getBackgroundPage().console.log(text);

    for (var i=0, len=text.length; i<len; i++) {
        chrome.extension.getBackgroundPage().console.log(text[i]);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('click-this');

    link.addEventListener('click', function() {
        getSelectionText();
    });
});
