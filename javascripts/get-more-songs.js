define(["jquery", "addMusic"],function() {
  return {
    postSongs: function(callback) {
      var newSong = {};
          newSong.song = $("#songInput").val();
          newSong.artist = $("#artistInput").val();
          newSong.album = $("#albumInput").val();
      console.log(newSong);
      $.ajax({
        url: "https://glaring-inferno-3339.firebaseio.com/songs.json",
        method: "POST",
        data: JSON.stringify(newSong)
      }).done(function(newSong) {
        console.log("newSong", newSong);
      });
    }
  };
});