/* jshint strict: false, -W117 */
angular.module('ui.controllers', [])
    .controller('uiOrientationChange', function ($scope, $state, $window ) {
    $scope.$state = $state;
    $window.addEventListener('orientationchange', function(){
        console.log('ui.controllers:uiOrientationChange');
        alert('orientationchange');
        $scope.$state.reload();
    });
});
