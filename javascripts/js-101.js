requirejs(
  ["dom-access", "populate-songs", "get-more-songs"], 
  function(domAccess, pop, get_more) {
    var outputList = document.getElementById("container"); 
    var outputDiv;
    var removeButton;
    var expandButton;

    pop.querySongs(function(data2) {
      console.log("data", data2);

      for(var i = 0; i < data2.length; i++) {
  
        outputDiv = document.createElement("div");
        outputDiv.className = "outputDiv panel panel-default";
        outputList.appendChild(outputDiv);

        var panelHeading = document.createElement("div");
        panelHeading.className = "panel-heading";
        outputDiv.appendChild(panelHeading);
  
        var h3 = document.createElement("h3");
        h3.className = "panel-title";
        h3.innerHTML = data2[i].name;
        panelHeading.appendChild(h3);

        var panelBody = document.createElement("div");
        panelBody.className = "panel-body";
        outputDiv.appendChild(panelBody);

        
        var span = document.createElement("span");
        span.innerHTML = data2[i].artist;
        panelBody.appendChild(span);
       
        var span1 = document.createElement("span");
        span1.innerHTML = data2[i].album;
        panelBody.appendChild(span1);
        var removeButton = document.createElement("button");
        removeButton.id = "removeButton";
        $(removeButton).attr("type", "button");
        $(removeButton).text("Remove");
        panelBody.appendChild(removeButton);

        var expandButton = document.getElementById("expandButton");
        outputList.appendChild(expandButton);
        $("#expandButton").attr("type", "button");
      }
    });

    
    
    $("#expandButton").on("click", function() {
      get_more.querySongs(function(data2) {
        console.log("data", data2);

        for(var i = 0; i < data2.length; i++) {
  
          outputDiv = document.createElement("div");
          outputDiv.className = "outputDiv panel panel-default";
          $("#expandButton").before(outputDiv);

          var panelHeading = document.createElement("div");
          panelHeading.className = "panel-heading";
          outputDiv.appendChild(panelHeading);
  
          var h3 = document.createElement("h3");
          h3.className = "panel-title";
          h3.innerHTML = data2[i].name;
          panelHeading.appendChild(h3);

          var panelBody = document.createElement("div");
          panelBody.className = "panel-body";
          outputDiv.appendChild(panelBody);
        
          var span = document.createElement("span");
          span.innerHTML = data2[i].artist;
          panelBody.appendChild(span);
       
          var span1 = document.createElement("span");
          span1.innerHTML = data2[i].album;
          panelBody.appendChild(span1);
          var removeButton = document.createElement("button");
          removeButton.id = "removeButton";
          $(removeButton).attr("type", "button");
          $(removeButton).text("Remove");
          panelBody.appendChild(removeButton);
          
        }
      });
    });
    $(document).on("click", "#removeButton", function () {
      $(this).parent().parent().remove();
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
