Demo.app.controller("DemoCtrl", function($scope){


    $scope.hello = "Howdy!";
    $scope.appVariable = "The file app.js is telling AngularJS that it should render this page as an application called DemoApp and assigning it to the app variable.";
    $scope.appController = "The file DemoCtrl.js is assigning a main controller called DemoCtrl to DemoApp.";

});
