var testApp = angular.module('testApp',
	[
		//'ngStorage'
	])
	/*.directive('postRepeatDirective', function() {
	 return function(scope, element, attrs) {
	 if (scope.$last){
	 $('.selectpicker').selectpicker('refresh');
	 }
	 };
	 }).directive('integer', function(){
	 return {
	 require: 'ngModel',
	 link: function(scope, ele, attr, ctrl){
	 ctrl.$parsers.unshift(function(viewValue){
	 return parseInt(viewValue, 10);
	 });
	 }
	 };
	 })*/;

testApp.controller("MainCtrl", function($scope) {
	$scope.day = moment();
});

testApp.directive("calendar", function() {
	return {
		restrict: "E",
		templateUrl: "app/views/calendar.html",
		scope: {
			selected: "="
		},
		link: function(scope) {
			scope.selected = _removeTime(scope.selected || moment());
			scope.month = scope.selected.clone();
			
			var start = scope.selected.clone();
			start.date(1);
			_removeTime(start.day(0));
			
			_buildMonth(scope, start, scope.month);
			
			scope.select = function(day) {
				scope.selected = day.date;
			};
			
			scope.next = function() {
				var next = scope.month.clone();
				_removeTime(next.month(next.month()+1).date(1));
				scope.month.month(scope.month.month()+1);
				_buildMonth(scope, next, scope.month);
			};
			
			scope.previous = function() {
				var previous = scope.month.clone();
				_removeTime(previous.month(previous.month()-1).date(1));
				scope.month.month(scope.month.month()-1);
				_buildMonth(scope, previous, scope.month);
			};
		}
	};
	
	function _removeTime(date) {
		return date.day(0).hour(0).minute(0).second(0).millisecond(0);
	}
	
	function _buildMonth(scope, start, month) {
		scope.weeks = [];
		var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
		while (!done) {
			scope.weeks.push({ days: _buildWeek(date.clone(), month) });
			date.add(1, "w");
			done = count++ > 2 && monthIndex !== date.month();
			monthIndex = date.month();
		}
	}
	
	function _buildWeek(date, month) {
		var days = [];
		for (var i = 0; i < 7; i++) {
			days.push({
				name: date.format("dd").substring(0, 1),
				number: date.date(),
				isCurrentMonth: date.month() === month.month(),
				isToday: date.isSame(new Date(), "day"),
				date: date
			});
			date = date.clone();
			date.add(1, "d");
		}
		return days;
	}
});

/*testApp.directive("calendar", function () {
	return {
		restrict: "E",
	templateUrl: "app/views/calendar.html",
	controller: 'rendezvousController',
	controllerAs: 'rendezvousCtrl',
	bindToController: true,
		
		link: function(scope) {
		scope.selected = _removeTime(scope.selected || moment());
		scope.month = scope.selected.clone();
		
		var start = scope.selected.clone();
		start.date(1);
		_removeTime(start.day(0));
		
		_buildMonth(scope, start, scope.month);
		
		scope.select = function(day) {
			scope.selected = day.date;
		};
		
		scope.next = function() {
			var next = scope.month.clone();
			_removeTime(next.month(next.month()+1).date(1));
			scope.month.month(scope.month.month()+1);
			_buildMonth(scope, next, scope.month);
		};
		
		scope.previous = function() {
			var previous = scope.month.clone();
			_removeTime(previous.month(previous.month()-1).date(1));
			scope.month.month(scope.month.month()-1);
			_buildMonth(scope, previous, scope.month);
		};
	}
};
	
	function _removeTime(date) {
		return date.day(0).hour(0).minute(0).second(0).millisecond(0);
	}
	
	function _buildMonth(scope, start, month) {
		scope.weeks = [];
		var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
		while (!done) {
			scope.weeks.push({ days: _buildWeek(date.clone(), month) });
			date.add(1, "w");
			done = count++ > 2 && monthIndex !== date.month();
			monthIndex = date.month();
		}
	}
	
	function _buildWeek(date, month) {
		var days = [];
		for (var i = 0; i < 7; i++) {
			days.push({
				name: date.format("dd").substring(0, 1),
				number: date.date(),
				isCurrentMonth: date.month() === month.month(),
				isToday: date.isSame(new Date(), "day"),
			date: date
		});
			date = date.clone();
			date.add(1, "d");
		}
		return days;
	}
});*/



testApp.controller('MainCtrl2', function ($scope, $http, /*$localStorage,*/ $q, Friend) {
	/*console.log('ItemsListCtrl');
	var self = this;
	$scope.msg = null;
	
	Friend.get().then(function (msg) {
		$scope.msg = msg.data;
	});
	
	angular.element(document).ready(function () {
		$('.form_datetime').datetimepicker({
			language:  'ru',
			weekStart: 1,
			todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 1,
			forceParse: 0,
			showMeridian: 1,
			startDate: '2017-08-16',
			endDate: '2018-02-16',
			disabledDates: [
				"2017-08-22 22:00"
			],
			disabledHours: [0, 1, 2, 3, 4, 5, 22, 23, 24]
		});
		
		console.log($scope.msg);
	});*/
	
	
	
	
	
	
	/*function gettt() {
		console.log('resetData');
		$.getJSON( "test.json", function( data ) {
			$scope.items = data;
			//localStorage.setItem("dataItems", angular.toJson(data));
		});
		return $scope.items;
	}
	var jiss = gettt();
	console.log(jiss);*/
	
	
	
	
	
	
	/*var self = this;
	 self.$storage = $localStorage;
	 self.listOperationsStates = {"0": "Ожидание", "1": "В работе", "2": "Остановлено", "3": "Выполнено"};
	 self.items = self.$storage.items;
	 self.sortBy = "id";
	 self.sortDir = true;*/
	
	/*self.isEdit = {};
	 self.clickHandler = function (id) {
	 self.isEdit[id] = !self.isEdit[id];
	 };*/
	
	//self.listOperationsStates = $.getJSON( "/app/controllers/lists.json", function( data ) {return data[3];});
	// get data and lists
	/*var deferred = $q.defer();
	 
	 self.getLists = function(i) {
	 $http.get('/app/controllers/lists.json').success (function(data){
	 deferred.resolve(data);
	 });
	 return deferred.promise;
	 };
	 self.lists = self.getLists();
	 console.log(self.lists);*/
	
	//console.log($scope.listPriorities);
	/*self.setSelected = function (item) {
	 return item.priority === 'Низкий';
	 };*/
	
	/*$.getJSON( "/app/controllers/lists.json", function (data) {
	 //console.log(data);
	 lists = data;
	 console.log(lists);
	 $scope.listPriorities = data[0];
	 $scope.listStates = data[1];
	 $scope.listOperations = data[2];
	 $scope.listOperationsStates = data[3];
	 $scope.listOperationsWorkcenters = data[4];
	 $scope.listOperationsPerformers = data[5];
	 //return data;
	 });*/
	
	/*self.changedValue = function(item) {
	 console.log("trtr");
	 self.items.push(item.name);
	 }*/
	
	/*$scope.$watch("item.name", function( newValue, oldValue ) {
	 // Ignore initial setup.
	 if ( newValue === oldValue ) {
	 //return;
	 console.log( newValue,oldValue );
	 } else {
	 console.log( "22" );
	 }
	 console.log( "changed." );
	 // Ignore if form already mirrors new value.
	 if ( self.form.quality.value === newValue ) {
	 return;
	 }
	 $scope.form.quality = getQualityOptionByValue( newValue );
	 }
	 );*/
	
	/*angular.element(document).ready(function () {
		var panels=localStorage.panels === undefined ? new Object() : JSON.parse(localStorage.panels);
	});*/
	
	/*self.setOperationComplete = function(operation) {
	 if (operation.status == 3) {
	 var today = new Date();
	 var dd = today.getDate();
	 var mm = today.getMonth()+1;
	 var yyyy = today.getFullYear();
	 var hh = today.getHours();
	 var mins = today.getMinutes();
	 var ss = today.getSeconds();
	 today = yyyy+"-"+mm+'-'+dd+' '+hh+':'+mins+':'+ss;
	 operation.date = today;
	 } else {
	 operation.date = "";
	 }
	 };*/
	
	self.resetData = function () {
		console.log('resetData');
		$localStorage.$reset();
		var dataItems = null;
		$.getJSON( "/app/controllers/data.json", function( data ) {
			console.log(data);
			dataItems = data;
			self.$storage.items = data;
			//localStorage.setItem("dataItems", angular.toJson(data));
		});
	};
	
	
	/*
	 // Counting tshk and totals
	 self.items.forEach(function(i){
	 //console.log(i.operations);
	 i.totalS = 0;
	 i.totalZ = 0;
	 i.operations.forEach(function(j){
	 j.tshk = j.tpz / i.qty + j.tsht;
	 i.totalS += j.tshk;
	 i.totalZ += j.tshk;
	 });
	 i.totalS /= 60;
	 i.totalZ *= i.qty;
	 //console.log(i.total);
	 });*/
});

/*myApp.factory('serviceId', function() {
 var shinyNewServiceInstance;
 // factory function body that constructs shinyNewServiceInstance
 return shinyNewServiceInstance;
 });*/

/*myApp.controller('ModalAddItemCtrl',[
 '$scope','$http', '$localStorage', '$uibModalInstance',
 function($scope, $http, $localStorage, $uibModalInstance) {
 console.log('modal add');
 $scope.items = angular.copy($scope.$resolve.items[0]);
 $.getJSON( "/app/controllers/lists.json", function( data ) {
 $scope.listPriorities = data[0];
 $scope.listStates = data[1];
 $scope.listOperations = data[2];
 $scope.listOperationsStates = data[3];
 $scope.listOperationsWorkcenters = data[4];
 $scope.listOperationsPerformers = data[5];
 $scope.listLaserS = data[6];
 $scope.listLaserM = data[7];
 });
 
 $scope.openTerm = function() {
 $scope.popupTerm.opened = true;
 };
 $scope.popupTerm = {
 opened: false
 };
 $scope.today = function() {
 $scope.dt = new Date($scope.items.term);
 };
 $scope.today();
 $scope.dateOptions = {
 formatYear: 'yy',
 startingDay: 1
 };
 
 $scope.ok = function () {
 angular.extend($scope.$resolve.items[0], $scope.items);
 $uibModalInstance.close();
 var fdata = $scope.$resolve.items[0];
 //console.log("fdata ", fdata);
 $scope.$resolve.items[1].push($scope.items);
 };
 
 $scope.cancel = function () {
 $uibModalInstance.dismiss();
 };
 $uibModalInstance.rendered.then(function(){
 $('.selectpicker').selectpicker('refresh');
 });
 }
 ]);
 
 myApp.filter('dateToISO', function() {
 return function(badTime) {
 var goodTime = badTime.replace(/(.+) (.+)/, "$1T$2Z");
 return goodTime;
 };
 });*/

/*testApp.filter('getKeyValue', function () {
 return function(key, list){
 $.getJSON( "/app/controllers/lists.json", function( data ) {
 //console.log(data);
 var listPriorities = data[0];
 var listStates = data[1];
 var listOperations = data[2];
 var listOperationsStates = data[3];
 var listOperationsWorkcenters = data[4];
 var listOperationsPerformers = data[5];
 var listLaserS = data[6];
 var listLaserM = data[7];
 });
 var obj = {};
 var listPriorities = {"0": "Фоновый", "1": "Нормальный", "2": "Приоритетный", "3": "Срочно"};
 var listStates = {"0": "В работе", "1": "Остановлено", "2": "Запуск выполнен"};
 var listOperations = {"0": "Заготовительная", "1": "Запрессовка", "2": "Галтовка", "3": "Гибочная", "4": "Контрольная", "5": "Круглошлифовальная", "6": "Литьё", "7": "Плоскошлифовальная", "8": "Прожиг", "9": "Прокатка", "10": "Резка лазерная", "11": "Сатинирование", "12": "Сварочная", "13": "Сверлильная", "14": "Слесарная", "15": "Токарная с ЧПУ", "16": "Токарная", "17": "Фрезерная", "18": "Фрезерная с ЧПУ", "19": "Мойка", "20": "Маркировка", "21": "Штамповка"};
 var listOperationsStates = {"0": "Ожидание", "1": "В работе", "2": "Остановлено", "3": "Выполнено"};
 var listOperationsWorkcenters = {"0": "Автом. Пром-я установка 'Гейзер' АПУ 550", "1": "Аппарат сварочный Ergo AC-DC 250", "2": "Аппарат сварочный SuperTIG 250", "3": "Вальцы TO62.PG02.00.00.000 Вальцы TO62.PG02.00.00.000", "4": "Вальцы 3-х валковые ИБ-2220", "5": "Верт.-фрезерный станок 6Т12-1", "6": "Верт.-фрезерный станок F2-250", "7": "Вертикально-фрезерный станок F2-250", "8": "Вырубной станок JET HN-16N", "9": "Гильотина 2000-6", "10": "Горизонт.фрезерный НГФ 155", "11": "Дрель-шуруп Makita", "12": "Заточной станок 3А64", "13": "Заточной станок 3В642", "14": "Заточной станок ЗМ 634"};
 var listOperationsPerformers = {"0": "Ковбаскин С.О.", "1": "Наумов М.В.", "2": "Берг С.А.", "3": "Лопатская Н.А.", "4": "Никулина О.В.", "5": "Суркова В.В.", "6": "Кучина Н.Ю.", "7": "Лунькова Е.В.", "8": "Ярунец Н.Е.", "9": "Холодов О.И.", "10": "Сафронов К.О.", "11": "Отмахов Г.А.", "12": "Цыганков Д.А."};
 var listLaserS = {"0": "0.5", "1": "0.7", "2": "1.0", "3": "1.2", "4": "1.5", "5": "2.0", "6": "2.5", "7": "3.0", "8": "3.5", "9": "4.0", "10": "5.0", "11": "6.0", "12": "8.0", "13": "10.0", "14": "12.0"};
 var listLaserM = {"0": "AISI 304", "1": "AISI 304Зерк.", "2": "Ст3", "3": "08Х17", "4": "12Х18Н10Т"};
 if (list === "listPriorities") {
 obj = listPriorities;
 } else if (list === "listStates") {
 obj = listStates;
 } else if (list === "listOperations") {
 obj = listOperations;
 } else if (list === "listOperationsStates") {
 obj = listOperationsStates;
 } else if (list === "listOperationsWorkcenters") {
 obj = listOperationsWorkcenters;
 } else if (list === "listOperationsPerformers") {
 obj = listOperationsPerformers;
 } else if (list === "listLaserS") {
 obj = listLaserS;
 } else if (list === "listLaserM") {
 obj = listLaserM;
 }
 //console.log(list);
 var value = obj[key];
 //return(1e4+""+a).slice(-b);
 return value;
 };
 });*/
testApp.factory('Friend', function ($http) {
	return {
		get: function () {
			console.log("inside function");
			return $http.get('test.json');
		}
	};
});