define(["jquery"],function() {
  return {
    querySongs: function(callback) {
      $.ajax({
        url: "javascripts/secondary.json"
      }).done(function(data) {
        callback.call(this, data);
      });
    }
  };
});