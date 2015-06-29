/* jshint strict: false, -W117 */
angular.module('app', ['ionic','home.controller','about.controller','contact.controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
    console.log('.config');

    $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'homeCtrl'
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html",
          controller: 'aboutCtrl'
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html",
          controller: 'contactCtrl'
        }
      }
    });
   $urlRouterProvider.otherwise("/tab/home");
/*    
    // State to represent Home View
    .state('home', {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: 'homeCtrl'
    });
    
    // set default route
    $urlRouterProvider.otherwise('/home');    
*/    
});