import { Mongo } from 'meteor/mongo';
// new Mongo.Collection('name of db(i.e. collection)');
export const Boxes = new Mongo.Collection('boxes');

    // if(Boxes.find().count() === 0) {
    //   for(var i = 0; i < 9; i++){
    //     Boxes.insert({});
    //   }
    // }

