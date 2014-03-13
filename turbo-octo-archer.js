Chirps = new Meteor.Collection("chirps");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to turbo-octo-archer.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });


  Template.chirp_list.chirps = function () {
    return Chirps.find({}, {sort: {timestamp: 1}});
  };


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Chirps.find().count() === 0) {
      var timestamp = (new Date()).getTime();
      Chirps.insert({text: "First chirp!", timestamp: timestamp});
      Chirps.insert({text: "Second chirp!", timestamp: timestamp+1});
    }

  });
}

