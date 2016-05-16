(function(){
    'use strict'


angular.module('ngInfiniteScroll')
    .controller('ScrollController', ScrollController);



    ScrollController.$inject = ['$window', '$log', '$http', '$scope'];

    function ScrollController($window, $log, $http, $scope){

        var vm = this;
        
        // Number of users to show on init (used by limitTo filter)
        vm.filterNumber = 8;
       
        // When user hits the bottom of window then double vm.filterNumber
        vm.userHitBottom = function(){
            $window.onscroll = function(ev) {
                if (($window.innerHeight + $window.scrollY) >= document.body.offsetHeight) {
                    $log.debug('User reached bottom of listings.')
                    vm.filterNumber = vm.filterNumber + vm.filterNumber;
                    $scope.$apply();
                }
            }
        }; 
        
        // initialize vm.userHitBottom
        vm.userHitBottom();  
       
        // push user data here at the end of vm.getUsers
        vm.allUsers = []

        // set vm.allUsers to empty 
        // and make $http GET request to mock endpoint
        vm.getUsers = function() {
        
            vm.allUsers.length = 0;

            $http.get('/users')
            .success(function(data) {
            	vm.allUsers.push(data);
            });
            
            return vm.allUsers;

        };  


    };



})();