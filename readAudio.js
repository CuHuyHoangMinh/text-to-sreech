// receives message from background script
chrome.extension.onMessage.addListener(function(message, sender) {
  if (message.logUrl) {
    var url = document.URL;
    alert(url);
  }
  var audio[];

  function read_audio()
  {
    i=0;
    for (i=1,i<=42,i++)
    {
      s=Interger.toString(i)+".mp3";
      audio[i]= new Audio("s")
    }
    
  }

  function map(char x)
  {
    x=Character.toUpperCase(x);
    id=0;
    if ( (int(x)<58) & (int(x)>47) )
    {
      id=int(x)-47;
    }
    if ( (int(x)<91) & (int(x)>64) )
    {
      id=int(x)-54;
    }
    
    switch (x)  
    {
      case '.':id=37;
      break;
      case ',':id=38;
      break;
      case '?':id=39;
      break;
      case '!':id=40;
      break;
      default: id=41; 
    }
  
    audio[id].play();
  }
})  
