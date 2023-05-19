
//function that is only executed when the window first loads
//I use it to set both the song number and score at the beginning
//I store these values in local storage so that I can keep using them throughout my different JSP files
  
window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") == null) {
        localStorage.setItem("scount", 1);
        localStorage.setItem("score", 0);
        document.getElementById("songCounter").innerHTML = localStorage.getItem("scount");
        document.getElementById("scoreCounter").innerHTML = localStorage.getItem("score");
        localStorage.setItem("hasCodeRunBefore", true);
    }
}

//This is the button at the top right of the site
//It bring the user back to the main page
//It resets the song number and score since the user can press this while playing the game

var RBtn = document.getElementById("Reset");

RBtn.addEventListener('click', function(){ resetScore();});

function resetScore(){
	localStorage.setItem("score", 0);
	localStorage.setItem("scount", 1);
}

//displays current score

document.getElementById("scoreCounter").innerHTML = localStorage.getItem("score");

//saves in local storage the different messages the user can get when he/she finishes the game

localStorage.setItem("Txt", "You did better than I thought you would. But you still are not enough.");
localStorage.setItem("Txt2", "You are actually insane at this. Congrats! But consider going outside and touching some grass...");
localStorage.setItem("Txt3", "You weren't bad but you weren't good either. Do better next time.");
localStorage.setItem("Txt4", "I can't believe someone actually scored this low. Seek professional help.");
localStorage.setItem("Txt5", "Bro... Do you even watch anime? By the way, Avatar The Last Airbender doesn't count.");


//gets the name of the current file

var fileName = location.href.split("/").slice(-1);

//displays the song number if one of these files in currently displayed

if(fileName == "easy.jsp" || fileName == "mid.jsp" || fileName == "hard.jsp"){
	document.getElementById("songCounter").innerHTML = localStorage.getItem("scount");
}

//if the user finished the game, they will go to the congrats screen
//depending on their score, a different message will be displayed

if(fileName == "congrats.jsp"){
  	document.getElementById("scoreCounter").innerHTML = localStorage.getItem("score");
	if(localStorage.getItem("score") <= 3){
		document.getElementById("congratMssg").innerHTML = localStorage.getItem("Txt5");
	}
	if(localStorage.getItem("score") > 3 && localStorage.getItem("score") <= 5){
		document.getElementById("congratMssg").innerHTML = localStorage.getItem("Txt4");
	}
	if(localStorage.getItem("score") > 5 && localStorage.getItem("score") < 8){
		document.getElementById("congratMssg").innerHTML = localStorage.getItem("Txt3");
	}
	if(localStorage.getItem("score") >= 8 && localStorage.getItem("score") < 10){
		document.getElementById("congratMssg").innerHTML = localStorage.getItem("Txt");
	}
	if(localStorage.getItem("score") == 10){
		document.getElementById("congratMssg").innerHTML = localStorage.getItem("Txt2");
	}
	localStorage.setItem("score", 0);
	
	
}

//this is the skip button
//if the user does not know the answer, they can skip to the nex question
//it updates the song number but not the score since I do not reward points for skipping

function skipu(buttoon){
	
	if(localStorage.getItem("scount") < 10){
		var c2 = localStorage.getItem("scount");
		c2++;
		localStorage.setItem("scount", c2);
		setTimeout(function(){window.location.href = fileName;}, 1500);
	} else{
		localStorage.setItem("scount", 1);
		setTimeout(function(){window.location.href = "congrats.jsp";}, 1500);
	}

}
 
//checks if the user's answer is right or wrong
//updates the song number and score
//if 10 songs have been played, it redirects to congrats screen

 function rightAns(butt){
	let ans = document.getElementById("userAns").value;
	if(ans == songTitle[localStorage.getItem("scount")]){
		butt.style.background = "green";
		if(localStorage.getItem("scount") < 10){
			var trackScore = localStorage.getItem("score");
			trackScore++;
			localStorage.setItem("score", trackScore)
			var c2 = localStorage.getItem("scount");
			c2++;
			localStorage.setItem("scount", c2);
			setTimeout(function(){window.location.href = fileName;}, 1500);
		}else{
			localStorage.setItem("scount", 1);
			var trackScore = localStorage.getItem("score");
			trackScore++;
			localStorage.setItem("score", trackScore)
			setTimeout(function(){window.location.href = "congrats.jsp";}, 1500);
		}
		
	}else{
		butt.style.background = "red";
		var c2 = localStorage.getItem("scount");
		c2++;
		localStorage.setItem("scount", c2);
		if(localStorage.getItem("scount") < 10){
			setTimeout(function(){window.location.href = fileName;}, 1500);
		}else{
			localStorage.setItem("scount", 1);
			
			setTimeout(function(){window.location.href = "congrats.jsp";}, 1500);
		}
		
	}
}

//has all the name of all the anime shows in the website
//made an array with all of the shows

var animeList = ["Accel World", "Akame ga Kill", "Ancient Magus Bride", "Assassination Classroom",
"Attack on Titan" ,
"Black Bullet" ,
"Black Clover" ,
"Bleach" ,
"Blue Exorcist" ,
"Boruto" ,
"Bungou Stray Dogs" ,
"Busou Shoujo Machiavellianism" ,
"Classroom of the Elite" ,
"Code Geass" ,
"Dagashi Kashi" ,
"Death Note" ,
"Death Parade" ,
"Demon Slayer" ,
"Domestic Girlfriend" ,
"Dr Stone" ,
"Durarara" ,
"ERASED" ,
"Fairy Tail" ,
"Fate" ,
"Fire Force" ,
"Food Wars" ,
"Full Metal Alchemist" ,
"Gintama" ,
"Given" ,
"Haikyuu" ,
"Horimiya" ,
"Hunter X Hunter" ,
"Irregular at Magic High School" ,
"Isekai Maou" ,
"Jujutsu Kaisen" ,
"K-On" ,
"Kekkai Sensen" ,
"Kill La Kill" ,
"Kobayashi-san Chi no Maid Dragon" ,
"Love Is War" ,
"Magi" ,
"Naruto" ,
"No Game No Life" ,
"Noragami" ,
"One Piece" ,
"One Punch Man" ,
"Overlord" ,
"Owari no Seraph" ,
"Ping Pong The Animation" ,
"Promised Neverland", 
"Rail Wars" ,
"Rakudai Kishi no Cavalry" ,
"ReCreators" ,
"ReLife" ,
"ReZero" ,
"Rising of the Shiled Hero" ,
"Rokudenashi Akashic Records" ,
"Seven Deadly Sins" ,
"Soul Eater" ,
"Sousei no Omnyouji" ,
"Spy X Family" ,
"Sword Art Online" ,
"Tokyo Ghoul" ,
"Tokyo Revengers" ,
"Vinland Saga" ,
"Wotaku"];
 
 //spelling Japanese shows can be hard so I added an autocomplete feature to the input box
 //this is just the implementation of the autocomplete dropdown menu
 
 function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  //execute a function when someone writes in the text field:
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      //close any already open lists of autocompleted values
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      //create a DIV element that will contain the items (values):
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      //append the DIV element as a child of the autocomplete container:
      this.parentNode.appendChild(a);
      //for each item in the array...
      for (i = 0; i < arr.length; i++) {
        //check if the item starts with the same letters as the text field value:
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          //create a DIV element for each matching element:
          b = document.createElement("DIV");
          //make the matching letters bold:
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          //insert a input field that will hold the current array item's value:
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          //execute a function when someone clicks on the item value (DIV element):
              b.addEventListener("click", function(e) {
              //insert the value for the autocomplete text field:
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  //execute a function presses a key on the keyboard:
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        //and and make the current item more visible:
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        //and and make the current item more visible:
        addActive(x);
      } else if (e.keyCode == 13) {
        //If the ENTER key is pressed, prevent the form from being submitted
        e.preventDefault();
        if (currentFocus > -1) {
          //and simulate a click on the "active" item:
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    //a function to classify an item as "active":
    if (!x) return false;
    //start by removing the "active" class on all items:
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    //add class "autocomplete-active":
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    //a function to remove the "active" class from all autocomplete items:
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
//execute a function when someone clicks in the document:
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

//plays the audio from a certain time until a certain time
 
var audio = document.getElementById('myAudio');
var segmentEnd;

//updates the current time so the audio will stop when the indicated time is reached

audio.addEventListener('timeupdate', function (){
    if (segmentEnd && audio.currentTime >= segmentEnd) {
        audio.pause();
    }   
    console.log(audio.currentTime);
}, false);

songTitle = [];

//gets start time and end time
//only plays songs from the start time until the end time

//array containing all the music files
//array containing all the names of the anime shows

//chooses a random song from the array

function playSegment(startTime, endTime, button){
	
    fileArray = ["jjk_op1.mp3", "rezero_op2.mp3", "rezero_ed1.mp3", "clover_back.mp3", "clover_black.mp3", "demon_op1.mp3", "kaguya_op1.mp3", "kaguya_op2.mp3", "noragami_op1.mp3", "rezero_ed2.mp3", "rezero_op3.mp3", "sao_movie.mp3", "sao_op5.mp3", "fate_sachi.mp3", "narutoShip_op6.mp3", "narutoShip_op1.mp3", "accelWorld_op.mp3", "akame_op1.mp3", "akame_op2.mp3", "ancientMagus_op1.mp3", "Aot_op1.mp3", "aot_op5.mp3", "aot_shinzo.mp3", "assClass_op4.mp3", "blackbullet_op.mp3", "blackClover_blackCatcher.mp3", "blackClover_op1.mp3", "blackClover_rover.mp3", "bleach_op13.mp3", "blueexorcist_op1.mp3", "blueexorcist_op2.mp3", "blueexorcist_op3.mp3", "boruto_ed.mp3", "boruto_ed2.mp3", "boruto_op8.mp3", "busouShoujou_op.mp3", "classroomElite_opq.mp3", "codegeass_op1.mp3", "dagashi_op.mp3", "deathNote_op.mp3", "deathParade_op.mp3", "demonSlayer_op3.mp3", "domesticNaKanajou.mp3", "drstone_op1.mp3", "durarara_ed.mp3", "durarara_op1.mp3", "erased_op.mp3", "fairyTail_believe.mp3", "fairyTail_chasing.mp3", "fairyTail_op3.mp3", "fairytail_strikeBack.mp3", "fate_aimer.mp3", "fate_extra.mp3", "fate_oath.mp3", "fateApo_op.mp3", "fateApo_op2.mp3", "fateZero_op2.mp3", "fireforce_ed.mp3", "fireforce_op1.mp3", "fireforce_op2.mp3", "fma_ed4.mp3", "fma_op1.mp3", "fmab_ed.mp3", "fmab_op1.mp3", "fmab_op3.mp3", "fmab_op5.mp3", "foodwars_op1.mp3", "foodwars_op5.mp3", "gintama_op1.mp3", "given_op.mp3", "goatland_op1.mp3", "haikiyuu_op5.mp3", "haikyuu_ed.mp3", "haikyuu_ohyea.mp3", "Haikyuu_op1.mp3", "Haikyuu_op2.mp3", "Haikyuu_op3.mp3", "haikyuu_op4.mp3", "horimiya_op.mp3", "hxh_op.mp3", "identity_op.mp3", "irregularAtMagicHS_op.mp3", "isekaiMaou_op.mp3", "jjk_ed.mp3", "kekkai_ed.mp3", "kekkai_ed1.mp3", "kekkai_op1.mp3", "kekkai_op2.mp3", "killa_op.mp3", "kobayashi_op1.mp3", "kon_ed.mp3", "loveiswar_op3.mp3", "magi_op1.mp3", "magi_op2.mp3", "makakucity_headphone.mp3", "mekakucity.mp3", "MHA_op1.mp3", "mha_polaris.mp3", "miraiNikki_op.mp3", "mob_op1.mp3", "monogatari_renai.mp3", "naruto_bloodCir.mp3", "naruto_bluebird.mp3", "naruto_kokoro.mp3", "naruto_lovers.mp3", "naruto_op2.mp3", "naruto_touchesWall.mp3", "narutoShip_op5.mp3", "naurto_op16.mp3", "nogamenolife.mp3", "Noragami_op2.mp3", "op_hardknock.mp3", "op_jungleP.mp3", "op_op22.mp3", "op_op23.mp3", "op_shareWorld.mp3", "op_weCan.mp3", "opm_op1.mp3", "overlord_ed.mp3", "overlord_ed2.mp3", "overlord_ed3.mp3", "overlord_ed5.mp3", "overlord_op1.mp3", "overlord_op2.mp3", "owariNoSeraph_op1.mp3", "owariNoSeraph_op2.mp3", "pingpong_op.mp3", "promised_ed.mp3", "promised_op1.mp3", "railwars_op.mp3", "recreators_op1.mp3", "recreators_op2.mp3", "ReLife.mp3", "rezero_op1.mp3", "rokudenashi_op1.mp3", "sao_op1.mp3", "sao_op2.mp3", "sao_op3.mp3", "sao_op5v2.mp3", "sao_resister.mp3", "SDS_howling.mp3", "SDS_rob.mp3", "SDS_skypeace.mp3", "shieldHero_op1.mp3", "souleater_op1.mp3", "souseiNo_op3.mp3", "souseiNoOmnyouji_op2.mp3", "spyfamily_ed.mp3", "straydogs_ed2.mp3", "straydogs_op1.mp3", "straydogs_op2.mp3", "straydogs_op3.mp3", "tk_asphyxia.mp3", "tk_op1.mp3", "tokyorevengers_ed.mp3", "tokyorevengers_op.mp3", "wotaku_op.mp3"]; 
    songName = ["Jujutsu Kaisen", "ReZero", "ReZero", "Black Clover", "Black Clover", "Demon Slayer", "Love Is War", "Love Is War", "Noragami", "ReZero", "ReZero", "Sword Art Online", "Sword Art Online", "Fate", "Naruto", "Naruto", "Accel World", "Akame ga Kill", "Akame ga Kill", "Ancient Magus Bride", "Attack on Titan", "Attack on Titan", "Attack on Titan", "Assassination Classroom", "Black Bullet", "Black Clover", "Black Clover", "Black Clover", "Bleach", "Blue Exorcist", "Blue Exorcist", "Blue Exorcist", "Boruto", "Boruto", "Boruto", "Busou Shoujo Machiavellianism", "Classroom of the Elite", "Code Geass", "Dagashi Kashi", "Death Note", "Death Parade", "Demon Slayer", "Domestic Girlfriend", "Dr Stone", "Durarara", "Durarara", "ERASED", "Fairy Tail", "Fairy Tail", "Fairy Tail", "Fairy Tail", "Fate", "Fate", "Fate", "Fate", "Fate", "Fate", "Fire Force", "Fire Force", "Fire Force", "Full Metal Alchemist", "Full Metal Alchemist", "Full Metal Alchemist", "Full Metal Alchemist", "Full Metal Alchemist", "Full Metal Alchemist", "Food Wars", "Food Wars", "Gintama", "Given", "Vinland Saga", "Haikyuu", "Haikyuu", "Haikyuu", "Haikyuu", "Haikyuu", "Haikyuu", "Haikyuu", "Horimiya", "Hunter X Hunter", "Rakudai Kishi no Cavalry", "Irregular at Magic High School", "Isekai Maou", "Jujutsu Kaisen", "Kekkai Sensen", "Kekkai Sensen", "Kekkai Sensen", "Kekkai Sensen", "Kill La Kill", "Kobayashi-san Chi no Maid Dragon", "K-On", "Love is War", "Magi", "Magi" , "Mekakucity Actors", "Mekakucity Actors", "My Hero Academia", "My Hero Academia", "Mirai Nikki", "Mob Psycho 100", "Monogatari series", "Naruto", "Naruto", "Naruto", "Naruto", "Naruto", "Naruto", "Naruto", "Naruto", "No Game No Life", "Noragami", "One Piece", "One Piece", "One Piece", "One Piece", "One Piece", "One Piece", "One Punch Man", "Overlord", "Overlord", "Overlord", "Overlord", "Overlord", "Overlord", "Owari no Seraph", "Owari no Seraph", "Ping Pong The Animation", "Promised Neverland", "Promised Neverland", "Rail Wars", "ReCreators", "ReCreators", "ReLife", "ReZero", "Rokudenashi Akashic Records", "Sword Art Online", "Sword Art Online", "Sword Art Online", "Sword Art Online", "Sword Art Online", "Seven Deadly Sins", "Seven Deadly Sins", "Seven Deadly Sins", "Rising of the Shiled Hero", "Soul Eater", "Sousei no Omnyouji", "Sousei no Omnyouji", "Spy X Family", "Bungou Stray Dogs", "Bungou Stray Dogs", "Bungou Stray Dogs", "Bungou Stray Dogs", "Tokyo Ghoul", "Tokyo Ghoul", "Tokyo Revengers", "Tokyo Revengers", "Wotaku"];
    var num = Math.floor(Math.random() * fileArray.length);
    var x = document.getElementById("myAudio");
    x.innerHTML = "";
    x.innerHTML += '<source src="music/' + fileArray[num] + '" type="audio/mpeg">';
	
    segmentEnd = endTime;
    audio.currentTime = startTime;
    audio.play();
    button.style.visibility = "hidden";
    var cc = localStorage.getItem("scount");
    songTitle[cc] = songName[num];
    window.alert(songName[num]);
}