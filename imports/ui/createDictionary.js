import { Template } from 'meteor/templating';

import './createDictionary.css';
import './createDictionary.html';

Template.createDictTemplate.events({
  'submit #createDictForm'(event) {
    event.preventDefault()
    let tar = event.target;

    let name = tar.dictName.value;
    let desc = tar.dictDesc.value;
    let pairs = tar.dictPair.value;
    let makePublic = tar.makePublic.checked;

    let papaConfig = {
            delimiter: "--",	// auto-detect
            newline: "",	// auto-detect
            quoteChar: '"',};
    let data = Papa.parse(pairs, papaConfig);
    let wo =[]; let cl = [];
    for (i=0; i<data.data.length; i++) {
      wo.push(data.data[i][0].toUpperCase().replace(/\s/g, ''));
      cl.push(data.data[i][1])
    }
    pairs = {words: wo, clues: cl};

    if (name.replace(/\s/g, '') === '') {
      alert("Dictionary Name not Valid");
      return;
    }

    let m = Meteor.call('insertDict', name, desc, pairs, null, makePublic,
      function(error, result) {
          if (result == true) {
            FlowRouter.redirect('/dashboard');
          } else {
            alert("Some Error Occurred! Try Again.");
          }
      });
  }

})
