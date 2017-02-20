import { Meteor } from 'meteor/meteor';
import { MOngo } from 'meteor/mongo';
import { PairDictionaries } from '../lib/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  //Method to create and insert new dictionary
  insertDict: function(dName, dDesc, dPairText, dUploader, dMakePublic) {
    check([dName, dDesc], [String]);
    check(dPairText, Object);
    check(dMakePublic, Boolean);

    PairDictionaries.insert({name: dName,
                            desc: dDesc,
                            pairs: dPairText,
                            uploader: dUploader,
                            makePublic: dMakePublic,
                          });
    return true;
  },


});
