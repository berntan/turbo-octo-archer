Chirps = new Meteor.Collection("chirps");

Chirps.allow({
  insert: function (userId, chirp) {
    return userId && chirp.owner === userId;
  },
  remove: function (userId, chirp) {
    return false;
  }
});
