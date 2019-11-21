import { WhichRick } from './../src/rick-service.js';
import { Hangman } from './../src/hangman.js';
import { HangmanService } from './../src/hangman-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let newHangman = new Hangman();
  $("#start").click(function(event){
    event.preventDefault();
    $("#startMenu").hide();
    $("#playMenu").show();


    (async () => {
      let hangmanService = new HangmanService();
      const answer = await hangmanService.getHangmanAnswer(name);
      getAnswer(answer);
    })();



    function getAnswer(answer) {
      let randomDino = (`${answer[0][0]}`).toLowerCase();
      let random = randomDino.split("");
      newHangman.addToArray(random);
      newHangman.addToUnder();
      $("#here").text(newHangman.underArray.join(" "));
      console.log(newHangman);
    }


    (async () => {
      let newRick = new WhichRick();
      const randomRick = await newRick.getRick();
      console.log(randomRick);
      getCharacter(randomRick);
    })();


    function getCharacter(randomRick) {
      let rickPlayer = randomRick;
      console.log(rickPlayer);
      $("#rick").text(rickPlayer.name);
      $('#morty').attr("src", rickPlayer.image);
    }


  });



  $("button.newGame").click(function(){
    location.reload();
  });



  $("button#guess").click(function(event){
    event.preventDefault();
    let input = $("#letterInput").val().toLowerCase();
    $("#letterInput").val("");
    newHangman.inputLetter = input;
    newHangman.play();

    if (newHangman.color === true) {
      $("#listOfLetters").append(newHangman.inputLetter + " ");
    }else {
      $("#listOfLetters1").append(newHangman.inputLetter + " ");
    }

    if (newHangman.counter === 7) {
      $("#playMenu").hide();
      $("#afterMenu").show();
    }
    $("#here").text(newHangman.underArray.join(" "));
  });
});
