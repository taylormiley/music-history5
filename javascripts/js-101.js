requirejs(
  ["dom-access", "populate-songs", "get-more-songs"], 
  function(domAccess, pop, get_more) {
    var outputList = document.getElementById("container"); 
    var outputDiv;
    var removeButton;

    pop.querySongs(function(data2) {
      console.log("data", data2);

      for(var i = 0; i < data2.length; i++) {
  
        outputDiv = document.createElement("div");
        outputList.appendChild(outputDiv);
  
        var h3 = document.createElement("h3");
        h3.innerHTML = data2[i].name;
        outputDiv.appendChild(h3);
        
        var span = document.createElement("span");
        span.innerHTML = data2[i].artist;
        outputDiv.appendChild(span);
       
        var span1 = document.createElement("span");
        span1.innerHTML = data2[i].album;
        outputDiv.appendChild(span1);
        var removeButton = document.createElement("button");
        removeButton.id = "removeButton";
        $(removeButton).attr("type", "button");
        $(removeButton).text("Remove");
        outputDiv.appendChild(removeButton);
      }
    });

    var expandButton = document.getElementById("expandButton");
    outputList.appendChild(expandButton);
    $("#expandButton").attr("type", "button");
    
    $("#expandButton").on("click", function() {
      get_more.querySongs(function(data2) {
        console.log("data", data2);

        for(var i = 0; i < data2.length; i++) {
  
          outputDiv = document.createElement("div");
          outputList.appendChild(outputDiv);
  
          var h3 = document.createElement("h3");
          h3.innerHTML = data2[i].name;
          outputDiv.appendChild(h3);
        
          var span = document.createElement("span");
          span.innerHTML = data2[i].artist;
          outputDiv.appendChild(span);
       
          var span1 = document.createElement("span");
          span1.innerHTML = data2[i].album;
          outputDiv.appendChild(span1);
          var removeButton = document.createElement("button");
          removeButton.id = "removeButton";
          $(removeButton).attr("type", "button");
          $(removeButton).text("Remove");
          outputDiv.appendChild(removeButton);
          
        }
      });
    });
    $(document).on("click", "#removeButton", function () {
      $(this).parent().remove();
    });

  }
);

   


  
// for(var i = 0; i < data.songs2.length; i++) {
//       outputDiv = document.createElement("div");
//       $(expandButton).before(outputDiv);
  
//       var h3 = document.createElement("h3");
//       h3.innerHTML = data.songs2[i].name;
//       outputDiv.appendChild(h3);
            
//       var span = document.createElement("span");
//       span.innerHTML = data.songs2[i].artist;
//       outputDiv.appendChild(span);
           
//       var span1 = document.createElement("span");
//       span1.innerHTML = data.songs2[i].album;
//       outputDiv.appendChild(span1);

//       var removeButton = document.createElement("button");
//       $(removeButton).attr("type", "button");
//       $(removeButton).text("Remove");
//       outputDiv.appendChild(removeButton);
