import { Mongo } from 'meteor/mongo';

export const Squares = new Mongo.Collection('squares');

for(var i = 0; i < 9; i++){
    Squares.insert({
      index: i, 
      hasBeenClicked: false,
      value: ''
    });
}
