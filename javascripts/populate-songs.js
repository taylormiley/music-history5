define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({
        url: "javascripts/main.json"
      }).done(function(data) {
        callback.call(this, data.songs);
      });
    }
  };
});

