  var audioList[];

  function read_audio()
  {
    i=0;
    for (i=1,i<=42,i++)
    {
      s=Interger.toString(i)+".mp3";
      audio[i]= new Audio(s);
    }
  }