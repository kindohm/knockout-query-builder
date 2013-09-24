window.QueryBuilder = (function(exports, ko){

  var Group = exports.Group;

  function ViewModel() {
    var self = this;
    self.group = ko.observable(new Group());

        // the text() function is just an example to show output
    self.text = ko.computed(function(){
      return self.group().text();
    });
  }

  exports.ViewModel = ViewModel;
  return exports;

})(window.QueryBuilder || {}, window.ko);