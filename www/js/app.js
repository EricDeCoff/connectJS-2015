/* jshint strict: false, -W117 */
angular.module('app', ['ionic','ui.router',
                       'home.controller','about.controller','contact.controller',
                       'ui.controllers',
                       'custom.directives'
                      ])

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
    /*
    document.addEventListener("intel.xdk.device.ready",onDeviceReadyHideStatus,false);
    function onDeviceReadyHideStatus(evt)
    {
        intel.xdk.device.hideStatusBar();
    } 
    */
})

.config(function ($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
    console.log('.config');

    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('standard');
    
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
    })
    .state('tabs.settings', {
      url: "/settings",
      views: {
        'contact-tab': {
          templateUrl: "templates/settings.html"
        }
      }
    });

    $urlRouterProvider.otherwise("/tab/contact");
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