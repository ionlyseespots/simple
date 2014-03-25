Demo.app.controller("DemoCtrl", function($scope){


    $scope.hello = "0";
    $scope.appVariable = "1";
    $scope.appController = "2";

// css default values
    $scope.customizations = [
        {
            "name":         "Primary button color",
            "class":        ".btn-primary",
            "property":     "bg-color",
            "value":        "#3d3d3d"
        },
        {
            "name":     "Default button color",
            "class":    ".btn-default",
            "type":     "bg-color",
            "value":    "#ffffff"
        }
    ];
    $scope.save = function() {
        $scope.msg = 'CSS to save: '+ JSON.stringify($scope.customizations);
    };
});
