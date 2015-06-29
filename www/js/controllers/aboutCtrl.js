/* jshint strict: false, -W117 */
angular.module('about.controller', [])
.controller('aboutCtrl', function ($scope, $state ) {
    console.log('aboutCtrl');
    $scope.about = {'info':'<p>Wow this is the about view HTML data</p>'};
    console.log($scope.about.info);
});
