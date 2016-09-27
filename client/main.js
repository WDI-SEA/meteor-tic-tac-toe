import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click .span1': function(event, instance){
      // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    if (instance === 1) {
      $(event.target).addClass("x");
    } else {
      $(event.target).addClass("o");
    }
  }
});
