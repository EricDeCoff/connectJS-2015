/* jshint strict: false, -W117 */
angular.module('home.controller', [])
.controller('homeCtrl', function ($scope, $state ) {
    console.log('homeCtrl');

    $scope.$watch('title_change',function(e){
        console.log('title_change:'+e);
        $scope.title_change('Temple Medical','Clinic');
    });
    
    $scope.days = [
        { name:'Monday', hours: '1 PM - 4 PM' },
        { name:'Tueday', hours: '9 AM - NOON' },
        { name:'Wednesday', hours: '9 AM - NOON' },
        { name:'Thursday', hours: '9 AM - 4 PM' },
        { name:'Friday', hours: '1 PM - 4 PM' },
    ];
            
    $scope.$state = $state;

});
