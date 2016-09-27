import { Template } from 'meteor/templating';

import { Game } from '../Game/Game.js';

import { Lobbies } from '../../../api/lobbies.js';

import './Lobby.html';

Template.Lobby.helpers({
});

Template.Lobby.events({
  'click .delete'(event) {
    Lobbies.remove({_id: this._id});
  }
});