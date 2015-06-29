/* jshint strict: false, -W117 */
angular.module('app.defaults',[])
.factory('defaults',function(){
    var defaults = {
        title:function(){
            return "title";
        }
    };
    return defaults;
});