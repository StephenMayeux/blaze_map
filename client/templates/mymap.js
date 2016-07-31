import { Items } from '../../imports/collections/items';
import { ReactiveVar } from 'meteor/reactive-var'

Session.setDefault('centerLat', 21.5);
Session.setDefault('centerLng', -158.0);
Session.setDefault('zoom', 3);

GoogleMaps.setConfig('helpers.getInfoWindowContent', function(item) {
  return item.name || 'item-' + item._id;
});

GoogleMaps.setConfig('helpers.isInfoWindowOpen', function(item) {
  return Session.get('infoWindowShow-' + item._id);
});

Template.mymap.helpers({
  centerLat: function() {
    return Session.get('centerLat');
  },
  centerLng: function() {
    return Session.get('centerLng');
  },
  zoom: function() {
    return Session.get('zoom');
  },
  items: function() {
    return Template.instance().markers();
  }
});

Template.mymap.onCreated(function() {
  let instance = this;

  instance.autorun(function() {
    let subscription = instance.subscribe('all.markers');
  });

  instance.markers = function() {
    return Items.find({});
  }
});

/*Template.mymap.events({
  'map_click .map': function(event) {
    const lat = event.originalEvent.detail.lat;
    const lng = event.originalEvent.detail.lng;
    const icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + Math.floor(Math.random() * 10) + '|FF0000|FFFFFF';
    Meteor.call('items.insert', lat, lng, icon);
  }
});*/
