import { Templates } from 'meteor/templating';

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

    

    let m = Meteor.call('insertDict', name, desc, pairs, makePublic,
      function(error, result) {
          console.log(result);
      });
  }

})
