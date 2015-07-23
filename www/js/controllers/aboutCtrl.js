/* jshint strict: false, -W117 */
angular.module('about.controller', [])
.controller('aboutCtrl', function ($scope, $state ) {
    console.log('aboutCtrl');
    var d1 = new Date();
    var d2 = new Date(2005, 6, 1);
    
    $scope.$watch('title_change',function(e){
        console.log('title_change:'+e);
        $scope.title_change('Temple Medical','Clinic');
    });
        
    $scope.serviceYears = Math.ceil(d1.getFullYear() - d2.getFullYear());    
});
