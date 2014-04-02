Simple.app.controller("SimpleCtrl", function($scope){


    $scope.hello = "0";
    $scope.appVariable = "1";
    $scope.appController = "2";

// css default values

    $scope.customizations = [


        {
            "name":     "Default button",
            "class":    "btn-default",
            "type":     "background-color",
            "value":    "#FFFFFF"
        },
        {
            "name":     "Info button",
            "class":    "btn-info",
            "type":     "background-color",
            "value":    "#5BC0DE"
        },
        {
            "name":     "Success button",
            "class":    "btn-success",
            "type":     "background-color",
            "value":    "#5CB85C"
        },
        {
            "name":     "Warning button",
            "class":    "btn-warning",
            "type":     "background-color",
            "value":    "#f0ad4e"
        },
        {
            "name":     "Danger button",
            "class":    "btn-danger",
            "type":     "background-color",
            "value":    "#D9534F"
        }
    ];

    $scope.buttons = [
        {
            "name":         "Primary button",
            "class":        "btn-primary",
            "property":     "background-color",
            "value":        "#3D3D3D"
        }
    ];


    $scope.save = function() {
        $scope.msg = 'CSS to save: '+ JSON.stringify($scope.customizations)+ JSON.stringify($scope.buttons);

    };
});
