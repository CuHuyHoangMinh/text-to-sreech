chrome.browserAction.onClicked.addListener(function (tab) {
    //fired when the user clicks on the ext's icon
    sendMessage();
});

function sendMessage() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "pageToSpeech"}, function(response) {});
  });
}

var screams = [];

function read_audio() {
    for (var i = 0; i < 41; i++) {
        var scream = new Audio();
        scream.src = "audio/"+i.toString()+".mp3";
        screams.push(scream);
    }
}

read_audio();
