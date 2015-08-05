define(["jquery"],function() {
  var $outputEl = $("#container");

  return {
    getOutputElement: function() {
      return $outputEl;
    }
  };
});