(function(){
    'use strict'

angular.module('ngInfiniteScroll', ['ngMockE2E'])
       .config(config)
       .run(runBlock)

    function config($logProvider) {
      // Enable log
      $logProvider.debugEnabled(true);
    };

    // Mock user data
    function runBlock($log, $httpBackend) {
        
	        var users = [

			{
				"firstName": 'Chris',
				"lastName": 'Almeida',
				"email": 'Chris@this.com'
			},
			{
				"firstName": 'Steve',
				"lastName": 'Wozniak',
				"email": 'Steve@apple.com'
			},
			{
				"firstName": 'Steve',
				"lastName": 'Jobs',
				"email": 'SteveJ@apple.com'
			},
			{
				"firstName": 'Bill',
				"lastName": 'Gates',
				"email": 'Bill@windows.com'
			},
			{
				"firstName": 'Elon',
				"lastName": 'Musk',
				"email": 'Elon@tesla.com'
			},
			{
				"firstName": 'Steve',
				"lastName": 'Jobs',
				"email": 'Steve@apple.com'
			},
			{
				"firstName": 'Larry',
				"lastName": 'Ellison',
				"email": 'Larry@oracle.com'
			},
			{
				"firstName": 'Brendan',
				"lastName": 'Eich',
				"email": 'Brendan@netscape.com'
			},
			{
				"firstName": 'Alan',
				"lastName": 'Kay',
				"email": 'Alan@small-talk.com'
			},
			{
				"firstName": 'Dennis',
				"lastName": 'Ritchie',
				"email": 'Dennis@c.com'
			},
			{
				"firstName": 'Guy',
				"lastName": 'Smith',
				"email": 'user@test.com'
			},
			{
				"firstName": 'John',
				"lastName": 'Melcher',
				"email": 'John@test.com'
			},
			{
				"firstName": 'Infinite',
				"lastName": 'Scroll',
				"email": 'infinite@infinite.com'
			},
			{
				"firstName": 'Chris',
				"lastName": 'Almeida',
				"email": 'Chris@this.com'
			},
			{
				"firstName": 'Steve',
				"lastName": 'Wozniak',
				"email": 'Steve@apple.com'
			},
			{
				"firstName": 'Steve',
				"lastName": 'Jobs',
				"email": 'SteveJ@apple.com'
			},
			{
				"firstName": 'Bill',
				"lastName": 'Gates',
				"email": 'Bill@windows.com'
			},
			{
				"firstName": 'Elon',
				"lastName": 'Musk',
				"email": 'Elon@tesla.com'
			},
			{
				"firstName": 'Steve',
				"lastName": 'Jobs',
				"email": 'Steve@apple.com'
			},
			{
				"firstName": 'Larry',
				"lastName": 'Ellison',
				"email": 'Larry@oracle.com'
			},
			{
				"firstName": 'Brendan',
				"lastName": 'Eich',
				"email": 'Brendan@netscape.com'
			},
			{
				"firstName": 'Alan',
				"lastName": 'Kay',
				"email": 'Alan@small-talk.com'
			},
			{
				"firstName": 'Dennis',
				"lastName": 'Ritchie',
				"email": 'Dennis@c.com'
			},
			{
				"firstName": 'Guy',
				"lastName": 'Smith',
				"email": 'user@test.com'
			},
			{
				"firstName": 'John',
				"lastName": 'Melcher',
				"email": 'John@test.com'
			},
			{
				"firstName": 'Infinite',
				"lastName": 'Scroll',
				"email": 'infinite@infinite.com'
			},
			{
				"firstName": 'Chris',
				"lastName": 'Almeida',
				"email": 'Chris@this.com'
			},
			{
				"firstName": 'Steve',
				"lastName": 'Wozniak',
				"email": 'Steve@apple.com'
			},
			{
				"firstName": 'Steve',
				"lastName": 'Jobs',
				"email": 'SteveJ@apple.com'
			},
			{
				"firstName": 'Bill',
				"lastName": 'Gates',
				"email": 'Bill@windows.com'
			},
			{
				"firstName": 'Elon',
				"lastName": 'Musk',
				"email": 'Elon@tesla.com'
			},
			{
				"firstName": 'Steve',
				"lastName": 'Jobs',
				"email": 'Steve@apple.com'
			},
			{
				"firstName": 'Larry',
				"lastName": 'Ellison',
				"email": 'Larry@oracle.com'
			},
			{
				"firstName": 'Brendan',
				"lastName": 'Eich',
				"email": 'Brendan@netscape.com'
			},
			{
				"firstName": 'Alan',
				"lastName": 'Kay',
				"email": 'Alan@small-talk.com'
			},
			{
				"firstName": 'Dennis',
				"lastName": 'Ritchie',
				"email": 'Dennis@c.com'
			},
			{
				"firstName": 'Guy',
				"lastName": 'Smith',
				"email": 'user@test.com'
			},
			{
				"firstName": 'John',
				"lastName": 'Melcher',
				"email": 'John@test.com'
			},
			{
				"firstName": 'Infinite',
				"lastName": 'Scroll',
				"email": 'infinite@infinite.com'
			}

		];
    
        // Mock GET endpoint
        $httpBackend.whenGET('/users').respond(function(method, url, data){
        	$log.debug('Getting users.')
        	$log.debug(users)
        	return [200, users, {}];
        });

        $log.debug('runBlock end');

    };

})();

