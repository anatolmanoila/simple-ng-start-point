angular.module("directivesApp")
  .directive('alert', function(){
    return {
      restrict: "EA",
      template: "<div>Warning! Don't derail from path!</div>"
    };
  });