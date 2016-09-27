import { Template } from 'meteor/templating';

import { Images } from '../../api/images.js'

import './body.html';

let count = 0;

Template.body.events({
  'click .square'(event){
    event.preventDefault();

    const target = event.target;
    if (count == 0) {
      target.className = 'square x';
      count = 1;
    } else {
      target.className = 'square o';
      count = 0;
    }
  }
})