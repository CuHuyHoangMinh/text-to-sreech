$(function() {
  // sends message to background script
  chrome.runtime.sendMessage({opened: true}, function(response) {
    console.log(response.example);
  });
});

function screech() {
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    }, function(selection) {
        chrome.extension.getBackgroundPage().console.log(selection[0]);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('click-this');

    link.addEventListener('click', function() {
        screech();
    });
});
