/* jshint strict: false, -W117 */
angular.module('contact.controller', [])
.controller('contactCtrl', function ($scope, $state ) {
    console.log('contactCtrl');
    $scope.contact = {'info':'<p>Wow this is the contact view HTML data</p>'};
    console.log($scope.contact.info);
});
