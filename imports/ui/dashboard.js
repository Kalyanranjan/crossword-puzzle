import { Template } from 'meteor/templating';
import { PairDictionaries } from '../../lib/collections.js';

import './dashboard.css';
import './dashboard.html';

Template.dashboardTemplate.onCreated(function() {
  this.autorun(() => {
    this.subscribe('pairDictionaries');
  });
});

Template.dashboardTemplate.helpers({
  'publicDicts'() {
    return PairDictionaries.find();
  },

  'privateDicts'() {
    return PairDictionaries.find({'makePublic': true});
  },

  'getDict'(id) {
    return PairDictionaries.find({'_id': id});
  }
});

Template.dashboardTemplate.events({
  // 'click .dictList'(event) {
  //   event.preventDefault();
  //
  //   let pairsId = event.target.id;
  //   FlowRouter.go('/cwplayer/'+pairsId);
  //
  // }
});
