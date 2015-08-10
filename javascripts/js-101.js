requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash.min',
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
  ["jquery", "firebase", "lodash", "hbs", "bootstrap", "dom-access", "populate-songs"], 
  function($, _firebase, _, Handlebars, bootstrap, domAccess, pop) {
    var myFirebaseRef = new Firebase("https://glaring-inferno-3339.firebaseio.com/");
    myFirebaseRef.child('songs').on("value", function(snapshot) {
      songs = snapshot.val();
      console.log(snapshot.val());
      var allSongsArray = [];

      for (var obj in songs) {
        allSongsArray[allSongsArray.length] = songs[obj];
      }
      console.log(allSongsArray);

      var allArtistsArray;
      allArtistsArray = _.pluck(_.sortBy(allSongsArray, 'artist'), 'artist');
      allArtistsArray = _.uniq(allArtistsArray);
      console.log(allArtistsArray);

      var allAlbumsArray;
      allAlbumsArray = _.pluck(_.sortBy(allSongsArray, 'album'), 'album');
      allAlbumsArray = _.uniq(allAlbumsArray);
      console.log(allAlbumsArray);

      require(['hbs!../templates/songs'], function(songTemplate) {
        $("#container").html(songTemplate(allSongsArray));
      });
      require(['hbs!../templates/dropdown'], function(dropdownTemplate) {
        $("#options").append(dropdownTemplate(allArtistsArray));
      });
      require(['hbs!../templates/dropdown2'], function(dropdown2Template) {
        $("#options2").append(dropdown2Template(allAlbumsArray));
      });

      $('#options').change(function() {
        var aritstSelected = $("#options").val();
        var albumsNarrowed = _.pluck(_.filter(allSongsArray, {artist: aritstSelected}), 'album');
            albumsNarrowed = _.uniq(albumsNarrowed);
        console.log(albumsNarrowed);
        require(['hbs!../templates/dropdown2'], function(dropdown2Template) {
          $('#options2').html(dropdown2Template(albumsNarrowed));
        });
      });
    });

    
    var outputList = domAccess.getOutputElement(); 
    var outputDiv;
    var removeButton;
    var expandButton;

    $(document).on("click", ".filterButton", function () {
      $('.songDiv').remove();
      myFirebaseRef.on("value", function(snapshot) {
        console.log("data", songs);
        require(['hbs!../templates/songs'], function(songTemplate) {
          $("#container").append(songTemplate(songs));
          var songDiv = $(".songDiv");
          console.log(songDiv);
          var artistName = $(".artistName").val();
          console.log(artistName);
          var options = $('#options').val();
          console.log(options);
          var options2 = $('#options2').val();
          var checkBox = $('#genreCheckbox :checked').map(function() {
            return $(this).val();
          }).get().toString();
          console.log(checkBox);
          if (!options && !options2) {
            $('.songDiv').not('.songDiv:contains(' + checkBox + ')').remove();
          } else if (options) {
            $('.songDiv').not('.songDiv:contains(' + options + '):contains(' + options2 + ')').remove();  
          } else if (!options) {
            $('.songDiv').not('.songDiv:contains(' + options2 + ')').remove();
          } else if (!options2) {
            $('.songDiv').not('.songDiv:contains(' + options + ')').remove();
          }
          
        });
      });
    });
    
    $(document).on("click", ".removeButton", function () {
      $(this).parent().parent().remove();
    });
  }
);

   


