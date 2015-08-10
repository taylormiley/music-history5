define(["jquery"],function() {
  return {
    querySongs: function(callback) {
      $.ajax({
        url: "https://glaring-inferno-3339.firebaseio.com/.json"
      }).done(function(data) {
        callback.call(this, data);
      });
    }
  };
});

