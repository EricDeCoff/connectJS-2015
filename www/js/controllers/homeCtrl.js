/* jshint strict: false, -W117 */
angular.module('home.controller', [])
.controller('homeCtrl', function ($scope, $state ) {
    console.log('homeCtrl');
    $scope.home = {'info':'<p>Wow this is the home view HTML data</p>'};
    console.log($scope.home.info);
});
