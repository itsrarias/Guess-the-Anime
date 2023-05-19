<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
      <link rel="stylesheet" href="mainPage.css">
        <meta name="viewport" content="width=device-width, initialscale=1">
    <title>Guess the Anime Song</title>
  </head>
  <body>
    <div class="bigContainer">
      <div class="logReg">
      
        <button type="button" class="mainv2" onclick="location.href = 'mainPage.jsp';" id="Reset"><span class="howTxt2" >Lost? Go to Main Page</span></button>
      

      </div>
          <div class="title" >
        <h1 class="pageTitle" >Guess the Anime Song</h1>
        <p class="desc" >The Best Anime Song Quiz Game</p>
      </div>
      <div class="band" >
      <div>
         <img class="imga" src="img/onepiece.jpg" alt="">
      </div>
            <div>
         <img class="imga" src="img/naruto2.jpg" alt="">
      </div>
            <div>
         <img class="imga" src="img/bleach2.png" alt="">
      </div>
            <div>
         <img class="imga" src="img/DBS.jpg" alt="">
      </div>
      </div>
      
      <div class="musicPlayer" >
      <h1 class="header">Song #<label id="songCounter"></label>: </h1>
      <h3 class="header">Score: <label id="scoreCounter"></label>/10</h3>
      <p class="tip" >Remember you will only hear the song for 20 seconds. Click 'Play Song' when you are ready.</p>
      
      <audio id="myAudio">
</audio>
 <div class="wBtnv2">
      <button type="button" name="button" class="playBtn" onclick="playSegment(40.0 , 60.0, this)"><span class="howTxt" >Play Song</span></button>
      </div>
      <div class="autocomplete" >
        <form autocomplete="off" id="" class="" method="get" >
          <input type="text" name="User" id="userAns" placeholder="Your Answer Here"required>
          <button type="button" id="subb" onclick="rightAns(this)">Submit</button>
          <button type="button" id="sub2" onclick="skipu(this)">Skip</button>
         
        </form>
</div>
	

      </div>
      

      
            <div class="band" >
      <div>
         <img class="imga" src="img/onepiece.jpg" alt="">
      </div>
            <div>
         <img class="imga" src="img/naruto2.jpg" alt="">
      </div>
            <div>
         <img class="imga" src="img/bleach2.png" alt="">
      </div>
            <div>
         <img class="imga" src="img/DBS.jpg" alt="">
      </div>
      </div>
    </div>
    <script src="ezscript.js "></script>
    <script>autocomplete(document.getElementById("userAns"), animeList);</script>

  </body>
</html>
