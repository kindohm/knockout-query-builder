window.QueryBuilder = (function(exports, ko){

  function Condition(){
    var self = this;

    self.templateName = 'condition-template';

    self.fields = ko.observableArray(['Points', 'Goals', 'Assists', 'Shots', 'Shot%', 'PPG', 'SHG', 'Penalty Mins']);
    self.selectedField = ko.observable('Points');
    
    self.comparisons = ko.observableArray(['=', '<>', '<', '<=', '>', '>=']);
   
    self.selectedComparison = ko.observable('=');

    self.value = ko.observable(0);

    // the text() function is just an example to show output
    self.text = ko.computed(function(){
      return self.selectedField() + 
        ' ' +
        self.selectedComparison() + 
        ' ' + 
        self.value();
    });
  }

  exports.Condition = Condition;
  return exports;

})(window.QueryBuilder || {}, window.ko);