import { Template } from 'meteor/templating';

import { Lobbies } from '../../../api/lobbies.js';

import './Game.html';

Template.Game.helpers({});

Template.Game.events({
  'click .board-space'(event) {
    if(this.isOver) {
      return;
    }

    let gameId = event.target.parentElement.parentElement.parentElement.id;
    let currentRow = event.target.parentElement.parentElement.id[3];
    let currentSpace = event.target.id[5];

    if(this.turn === 1) {
      this.board[currentRow][currentSpace] = 'X';
      this.turn = 2;
    } else {
      this.board[currentRow][currentSpace] = 'O';
      this.turn = 1;
    }

    Lobbies.update({_id: gameId}, {$set: {game: this}});

    setTimeout(() => {
      checkForWin(this.board, function() {
        Lobbies.update({_id: gameId}, {$set: {"game.isOver": true}});
      });
    }, 100);
  },

  'click .reset-btn'(event) {
    let gameId = event.target.parentElement.parentElement.parentElement.id;
    Lobbies.update(
      {_id: gameId},
      {$set: {
        "game.board": [['','',''],['','',''],['','','']],
        "game.isOver": false,
        "game.turn": 1
      }
    });
  }
});

function aiMove() {

}

function checkForWin(board, callback) {
  // Check Rows
  for(let i = 0; i < board.length; i++) {
    let row = board[i];
    let string = row[0] + row[1] + row[2];
    if(string === 'XXX') {
      console.log('X is the Winner');
      callback();
    } else if (string === "OOO") {
      console.log('O is the Winner');
      callback();
    }
  }

  // Check Columns
  for(let i = 0; i < 3; i++) {
    let columnString = '';
    for(let j = 0; j < 3; j++) {
      columnString += board[j][i];
      if(columnString === 'XXX') {
        console.log('X is the winner');
        callback();
        break;
      } else if(columnString === 'OOO') {
        console.log('O is the winner');
        callback();
        break;
      }
    }
  }

  // Check Diagonal
  let diag1 = board[0][0] + board[1][1] + board[2][2];
  let diag2 = board[2][0] + board[1][1] + board[0][2];

  if(diag1 === 'XXX' || diag2 === 'XXX') {
    console.log('X is the winner');
    callback();
  } else if(diag1 === 'OOO' || diag2 === 'OOO'){
    console.log('O is the winner');
    callback();
  }
}