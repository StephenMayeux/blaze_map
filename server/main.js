import { Items } from '../imports/collections/items';

Meteor.startup(() => {
  Meteor.publish('all.markers', function() {
    return Items.find({});
  });
});
