requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(
  ["jquery", "firebase", "hbs", "bootstrap", "dom-access", "populate-songs"], 
  function($, _firebase, Handlebars, bootstrap, domAccess, pop) { 

    $(document).on("click", "#addMusicButton", function() {
      var newSong = {};
          newSong.name = $("#songInput").val();
          newSong.artist = $("#artistInput").val();
          newSong.album = $("#albumInput").val();
          newSong.genre = $("#genre").val();
      console.log(newSong);
      $.ajax({
        url: "https://glaring-inferno-3339.firebaseio.com/songs.json",
        method: "POST",
        data: JSON.stringify(newSong)
      }).done(function(newSong) {
        console.log("newSong", newSong);
      });
    });
  }
);