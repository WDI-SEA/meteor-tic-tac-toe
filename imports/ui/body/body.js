import { Template } from 'meteor/templating';

import { Squares } from '../../api/squares.js';

import './body.html';

var playerOnePlaying = true;

var isWinnerDeclared = false;

var xSprite = "<b class=\"sprite\">X</b>";
var oSprite = "<b class=\"sprite\">O</b>";

var squares = document.querySelectorAll("div.square");

for(var i = 0; i < squares.length; i++){
  //squares[i].addEventListener("click", playMove)
  //squares[i].hasBeenClicked = false;
  //squares[i].markerValue = "";
}

Template.body.helpers({
  squares(){
    return Squares.find({});
  }
});


Template.body.events({
    'click .square'(event){
    event.preventDefault();
    const target = event.target;
    console.log(target);
    console.log(target.hasBeenClicked);
    if(!target.hasBeenClicked && !isWinnerDeclared){
      if(playerOnePlaying){
          target.style.backgroundColor = "red"; 
          target.innerHTML = xSprite;
          target.markerValue = "X";
          //checkWinner(target.markerValue);
      }
      else{
        target.style.backgroundColor = "green";
        target.innerHTML = oSprite;
        target.markerValue = "O";
        //checkWinner(target.markerValue);
      }
      target.hasBeenClicked = true;
      playerOnePlaying = !playerOnePlaying;

    }
  }

  
});