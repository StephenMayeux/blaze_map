import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'items.insert': function(lat, lng, icon) {
    return Items.insert({lat: lat, lng: lng, draggable: true, icon: icon});
  }
});

export const Items = new Mongo.Collection('items');
