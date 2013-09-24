window.QueryBuilder = (function(exports, ko){

  var Condition = exports.Condition;

  function Group(){
    var self = this;

    self.templateName = 'group-template';
    self.children = ko.observableArray();
    self.logicalOperators = ko.observableArray(['AND', 'OR']);
    self.selectedLogicalOperator = ko.observable('AND');

    // give the group a single default condition
    self.children.push(new Condition());

    self.addCondition = function(){
        self.children.push(new Condition());
    };

    self.addGroup = function(){
        self.children.push(new Group());
    };

    self.removeChild = function(child){
        self.children.remove(child);
    };

    // the text() function is just an example to show output
    self.text = ko.computed(function(){
      var result = '(';      
      var op = '';
      for (var i = 0; i < self.children().length; i++){
        var child = self.children()[i];
        result += op + child.text();
        op = ' ' + self.selectedLogicalOperator() + ' ';
      }
      return result += ')';
    });
  }

  exports.Group = Group;
  return exports;

})(window.QueryBuilder || {}, window.ko);