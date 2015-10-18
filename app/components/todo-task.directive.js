TodoTaskController.$inject = ['$scope', '$element', '$timeout'];
function TodoTaskController($scope, $element, $timeout) {
    var _this = this;
    _this.editing = false;
    _this.task = this.task || { complete: false };
    
    _this.edit = function() {
        _this.editing = true;
        $timeout(function () {
            $element.find('input').triggerHandler('focus');
        }, 500);
    }
    
    _this.save = function() {
        _this.editing = false;
    }
    
    $scope.$watch(function () {
        return _this.task.complete;
    }, function(complete) {
        if (complete) {
            _this.editing = false;
        }
    });
    
    $scope.$watch(function () {
        return _this.task.isNew;
    }, function(isNew) {
       if(isNew) {
           _this.isNew = false;
           _this.edit();
       } 
    });
}

function TodoTaskDirective() {
    var template = [
        '<button type="button" class="btn btn-block btn-link btn-task" ng-show="!vm.editing" ng-click="vm.edit()" ng-class="{strike: vm.task.complete}" ng-disabled="vm.task.complete">{{vm.task.message || \'&nbsp;\'}}</button>',
        '<input type="text" class="form-control" ng-model="vm.task.message" ng-show="vm.editing" ng-blur="vm.save()" />'
    ].join('');
    
    return {
        scope: {
            task: '=ngModel'
        },
        controller: TodoTaskController,
        controllerAs: 'vm',
        bindToController: true,
        restrict: 'E',
        template: template
    }
}

module.exports = function(angular) {
    angular.module('app').directive('todoTask', TodoTaskDirective);
}