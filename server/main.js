import { Meteor } from 'meteor/meteor';
import { pairDictionaries } from '../lib/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  //Method to create and insert new dictionary
  insertDict: function(name, desc, pairText, makePublic) {
    this.unblock();
    return true;

  //   if (trim(name === "")) {
  //
  //   console.log("We here bitches");
   }

});
