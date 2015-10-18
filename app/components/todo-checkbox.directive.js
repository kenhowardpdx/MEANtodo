function TodoCheckboxDirective() {
    var template = [
        '<label class="todo-checkbox">',
            '<input type="checkbox" ng-model="checkboxModel" ng-value="checkboxValue" />',
            '<span></span>',
        '</label>'
    ].join('');
    
    return {
        scope: {
            checkboxModel: '=ngModel',
            checkboxValue: '=ngValue'
        },
        restrict: 'E',
        template: template
    }
}

module.exports = function (angular) {
    angular.module('app').directive('todoCheckbox', TodoCheckboxDirective);
}