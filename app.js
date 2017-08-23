var testApp = angular.module("testApp", []);

testApp.controller("MainCtrl", function($scope, $rootScope, $http) {
	$scope.day = moment();
	$scope.day.selectedFinish;
	
	$scope.controls  = {
		showHideCalendar: function() {
			$rootScope.daysShow = !$rootScope.daysShow;
		}
	}
});

testApp.factory("getStatic", function ($http) {
	return {
		get: function () {
			return $http.get("test.json?v=5");
		}
	};
});

testApp.directive("calendar", function(getStatic) {
	return {
		restrict: "E",
		templateUrl: "app/views/calendar.html?v=6",
		scope: {
			selected: "="
		},
		link: function(scope) {
			scope.selected = _removeTime(scope.selected || moment());
			scope.month = scope.selected.clone();
			
			var start = scope.selected.clone();
			
			start.date(0);//1
			_removeTime(start.day(1));
			
			scope.setCalendar = function() {
				getStatic.get().then(function (msg) {
					if (msg.data.status === "ok") {
						scope.notReady = false;
						scope.avHours = msg.data.availableHours;
						scope.holidays = [];
						for (var i = 0; i < msg.data.holidays.length; i++) {
							if (msg.data.holidays[i].is_weekend === "1" && msg.data.holidays[i].holiday !== undefined) {
								scope.holidays.push(msg.data.holidays[i].holiday.substring(0, 10));
							}
						}
						_buildMonth(scope, start, scope.month, scope.holidays);
					} else {
						scope.notReady = true;
					}
				}).catch(function (error) {
					console.log("error");
					scope.notReady = true;
				});
			};
			scope.setCalendar();
			
			scope.next = function() {
				var next = scope.month.clone();
				_removeTimeD(next.month(next.month()+1).date(0));
				scope.month.month(scope.month.month()+1);
				_buildMonth(scope, next, scope.month, scope.holidays);
			};
			
			scope.previous = function() {
				var previous = scope.month.clone();
				_removeTimeD(previous.month(previous.month()-1).date(0));
				scope.month.month(scope.month.month()-1);
				_buildMonth(scope, previous, scope.month, scope.holidays);
			};
		},
		controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
			$scope.selectHour = function(day, hour) {
				day.hours(hour);
				day.selectedFinish = day;
				$rootScope.daysShow = false;
				$scope.hoursShow = false;
			};
			
			$scope.selectDay = function(day) {
				if (!day.avHours) return false;
				$scope.selected = day.date;
				$scope.selected.avHours = day.avHours;
				$scope.hoursShow = true;
			};
		}]
	};
	
	function _removeTime(date) {
		return date.hour(0).minute(0).second(0).millisecond(0);
	}
	function _removeTimeD(date) {
		return date.day(1).hour(0).minute(0).second(0).millisecond(0);
	}
	
	function _buildMonth(scope, start, month, holidays) {
		scope.weeks = [];
		var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
		while (!done) {
			scope.weeks.push({ days: _buildWeek(scope, date.clone(), month, holidays) });
			date.add(1, "w");
			done = count++ > 2 && monthIndex !== date.month();
			monthIndex = date.month();
		}
	}
	
	function _buildWeek(scope, date, month, holidays) {
		var days = [];
		for (var i = 0; i < 7; i++) {
			var dayHours = false;
			let obj = scope.avHours.find(o => o.date === date.format("YYYY-MM-DD"));
			if (obj && obj.hours.length > 0) {
				dayHours = [];
				for (var j = 0; j < obj.hours.length; j++) {
					dayHours.push({name: obj.hours[j]+":00",time:obj.hours[j]});
				}
			}
			
			days.push({
				name: date.format("dd").substring(0, 1),
				number: date.date(),
				isCurrentMonth: date.month() === month.month(),
				isHoliday: holidays.indexOf(date.format("YYYY-MM-DD")) !== -1,
				isToday: date.isSame(new Date(), "day"),
				date: date,
				avHours: dayHours
			});
			
			date = date.clone();
			date.add(1, "d");
		}
		return days;
	}
});