// Returns an event map that handles the "escape" and "return" keys and
// "blur" events on a text input (given by selector) and interprets them
// as "ok" or "cancel".
var okCancelEvents = function (selector, callbacks) {
  var ok = callbacks.ok || function () {};
  var cancel = callbacks.cancel || function () {};

  var events = {};
  events['keyup '+selector+', keydown '+selector+', focusout '+selector] =
    function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);

      } else if (evt.type === "keyup" && evt.which === 13 ||
                 evt.type === "focusout") {
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };

  return events;
};

Template.chirp_list.chirps = function () {
  return Chirps.find({}, {sort: {timestamp: -1}});
};

Template.new_chirp.events(okCancelEvents(
  '#new-chirp',
  {
    ok: function(text, evt) {
      Chirps.insert({
        owner: Meteor.userId(),
        text: text,
        timestamp: (new Date()).getTime()
      });
      evt.target.value = '';
    }
  }));
