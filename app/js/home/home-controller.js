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

    $scope.currentDay = Date.today();
    $scope.today = $scope.currentDay.toString("dddd - MM/dd");

    var bindValues = function(){
        $scope.range = [];
        var marker = $scope.currentDay.clone();
        var start = ((marker.is().monday()) ? marker : marker.previous().monday());
        var end = marker.clone().next().friday();

        $scope.weekStart = start.toString("dddd - MM/dd");
        $scope.weekEnd = end.toString("dddd - MM/dd");

        var cur = start.clone();

        while(cur.between(start, end)){
            $scope.range.push(cur.clone().toString('MM-dd-yyyy'));
            cur.addDays(1);
        }
    };

    $scope.prev = function(){
        $scope.currentDay = $scope.currentDay.addDays(-7);
        bindValues();
    };

    $scope.next = function(){
        $scope.currentDay = $scope.currentDay.addDays(7);
        bindValues();
    };

    $scope.getEntries = function(date){
        return $scope.weekEntries[date];
    };

    bindValues();

    $scope.weekEntries = _.chain(studentWeekEntries).map(function(student){
        return _.map(student.timeRecords, function(timeRecord){
            return {
                student: student.id,
                name: student.firstName + ' ' + student.lastName,
                date: timeRecord.date,
                timeRecord: timeRecord
            };
        });
    }).flatten().groupBy('date').value();

    var onLogoutSuccess = function(response) {
        $location.path('/login');
    };

    $scope.logout = function() {
        AuthenticationService.logout().success(onLogoutSuccess);
    };
});
