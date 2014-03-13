// If empty database, insert first and second chirp
Meteor.startup(function () {
  // code to run on server at startup

  if (Chirps.find().count() === 0) {
    var timestamp = (new Date()).getTime();
    Chirps.insert({owner: "1", text: "First chirp!", timestamp: timestamp});
    Chirps.insert({owner: "1", text: "Second chirp!", timestamp: timestamp+1});
    Chirps.insert({owner: "1", text: "Third chirp!", timestamp: timestamp+2});
  }

});
