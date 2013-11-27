angular.module("app").controller('HomeController', function($scope, $location, AuthenticationService) {
    $scope.title = "Home";

    var studentWeekEntries = [
        {
            id: 1,
            clockCode: 1234,
            firstName: 'Neil',
            lastName: 'Smith',
            timeRecords: [{
                id: 1,
                date: '11-15-2013',
                timeIn: '8: 00 am',
                timeOut: '11: 00 am',
                isValid: true,
                staged: true,
                published: false
            }, {
                id: 2,
                date: '11-16-2013',
                timeIn: '8: 30 am',
                timeOut: '12: 45 am',
                isValid: false,
                staged: true,
                published: false
            }]
        },
        {
            id: 2,
            clockCode: 1234,
            firstName: 'Neil',
            lastName: 'Smith',
            timeRecords: [{
                id: 3,
                date: '11-15-2013',
                timeIn: '8: 00 am',
                timeOut: '11: 00 am',
                isValid: true,
                staged: true,
                published: false
            }, {
                id: 4,
                date: '11-16-2013',
                timeIn: '8: 30 am',
                timeOut: '12: 45 am',
                isValid: false,
                staged: true,
                published: false
            }]
        }

    ];

    $scope.weekEntries = _.map(studentWeekEntries, function(student){
        return _.map(student.timeRecords, function(timeRecord){
            return {
                student: student.id,
                name: student.firstName + student.lastName,
                timeRecord: timeRecord
            };
        })
    }).concat

    var onLogoutSuccess = function(response) {
        $location.path('/login');
    };

    $scope.logout = function() {
        AuthenticationService.logout().success(onLogoutSuccess);
    };
});
