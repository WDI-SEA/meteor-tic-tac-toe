import { Template } from 'meteor/templating';

import { Lobbies } from '../../../api/lobbies.js';

import { Lobby } from '../Lobby/Lobby.js';

import './LobbyPage.html';

Template.LobbyPage.helpers({
  lobbies() {
    return Lobbies.find({}, {sort: {createdAt: -1}});
  }
});

Template.LobbyPage.events({
  'submit #new-lobby'(event) {
    event.preventDefault();

    let lobbyTitle = event.target.lobbyTitle.value;

    Lobbies.insert({
      title: lobbyTitle,
      createdAt: new Date(),
      updatedAt: new Date(),
      game: {
        players: [],
        turn: 1,
        board: [['','',''],['','',''],['','','']],
        isOver: false
      }
    });

    event.target.lobbyTitle.value = '';
  }
});