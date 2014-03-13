// Chirps -- {owner: Meteor.userId,
//            text: String,
//            timestamp: Number}
Chirps = new Meteor.Collection("chirps");

Chirps.allow({
  insert: function (userId, chirp) {
    return userId && chirp.owner === userId;
  },
  remove: function (userId, chirp) {
    return false;
  }
});


///////////////////////////////////////////////////////////////////////////////
// Users

displayName = function (user) {
  if (user.profile && user.profile.name)
    return user.profile.name;
  return user.emails[0].address;
};

var contactEmail = function (user) {
  if (user.emails && user.emails.length)
    return user.emails[0].address;
  if (user.services && user.services.facebook && user.services.facebook.email)
    return user.services.facebook.email;
  return null;
};
