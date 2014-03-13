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


