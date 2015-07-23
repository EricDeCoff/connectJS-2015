/* jshint strict: false, -W117 */
// jshint multistr:true
angular.module('custom.directives', [])
    /* 
        remember first character after - has to be uppercased
        <custom-boxdate></custom-boxdate>
    */
    .directive('customBoxdate', function() {
    console.log('custom-boxdate');
    return {
        template: '<div ng-include src="\'templates/boxDate.html\'"></div>',
        link: function compile(scope, element, attrs) {
            console.log('custom-boxdate:link');

            var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
                              'July', 'August', 'September', 'October', 'November', 'December' ];
            var d = new Date();
            scope.boxDate = { 
                DD:d.getDate() < 10 ? '0'+d.getDate() : d.getDate(),
                Month: monthNames[d.getMonth()], 
                YYYY:d.getFullYear()
            };
        }
    };
})
    /* 
        remember first character after - has to be uppercased
        <custom-multilinetitle></custom-boxdate>
    */
    .directive('customMultilinetitle',function(){
    console.log('customer-multilinetitle');
    return{
        template: '<div ng-include src="\'templates/multilineTitle.html\'"></div>',
        /* link: function compile(scope, element, attrs) { */
        link: function (scope, element, attrs) {
            console.log('custom-multilinetitle:link');
            console.log(element);

            if (!scope.multilineTitle){
                scope.multilineTitle = { line1:'Pure Awesomeness', line2:'Clickable Title' };
            }            
        },
        controller:function($scope,$state){
            $scope.title_change = function(title1,title2){
                $scope.multilineTitle = { line1:title1,line2:title2 };
            };
            $scope.title_click = function(){
                alert('Title clicked');
            };
        }
    };
})
    .directive('customSettings',function(){
    console.log('customer-settings');
    return{
        template: '<div ng-include src="\'templates/settingsButton.html\'"></div>',
        /* link: function compile(scope, element, attrs) { */
        link: function (scope, element, attrs ) {
            console.log('custom-multilinetitle:link');
        },
        controller:function($scope,$state){
            $scope.$state = $state;
            $scope.btnSettings_click = function(){
                alert('Settings clicked');
                $state.transitionTo('tabs.settings');
            };
        }
        
    };
})
    .filter('trustedHTML', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
}])
    .directive('tmcAbouttable',function(){
        return {
            restrict: 'AE',
            scope:{
                items:'='
            },
            template:'\
<div class="row" ng-repeat="item in items">\
    <div class="col text-center" ng-bind-html="item.col1 | trustedHTML"></div>\
    <div class="col text-center" ng-bind-html="item.col2 | trustedHTML"></div>\
</div>\
            ',
            controller:function($scope,$state){
                //$scope.items = [{"col1":"<h1>hello</h1>","col2":"<h1>world</h1>"}];
            }
        };
})
;
