Simple.app.controller("SimpleCtrl", function($scope){

// css default values
    $scope.navbar = [
        {
            "name":             "Default background",
            "class":            "navbar-default",
            "property":         "background-color",
            "value":            "#50ACDB"
        },
        {
            "name":             "Active link background",
            "parentclass":      "navbar-nav",
            "class":            "active",
            "element":          "a",
            "property":         "background-color",
            "value":            "#359FD5"
        }
    ];

    $scope.scaffolding = [
        {
            "name":             "Primary text",
            "class":            "text-primary",
            "property":         "color",
            "value":            "#0C2A3A"
        },
        {
            "name":             "Info text",
            "class":            "text-info",
            "property":         "color",
            "value":            "#31708F"
        },
        {
            "name":             "Link text",
            "parentelement":    "body",
            "element":          "a",
            "property":         "color",
            "value":            "#0C2A3A"
        }
    ];

    $scope.products = [
        {
            "name":             "Categories",
            "class":            "well",
            "property":         "color",
            "value":            "#0C2A3A"
        },
        {
            "name":             "Products",
            "class":            "well",
            "property":         "color",
            "value":            "#31708F"
        }
    ];

    $scope.panels = [
        {
            "name":             "Panel default",
            "parentclass":      "panel-default",
            "childclass":       "panel-heading",
            "class":            "panel-title",
            "property":         "background-color",
            "value":            "#F5F5F5"
        },
        {
            "name":             "Panel primary",
            "parentclass":      "panel-primary",
            "childclass":       "panel-heading",
            "class":            "panel-title",
            "property":         "background-color",
            "value":            "#0C2A3A"
        }
    ];

    $scope.buttons = [
        {
            "name":         "Primary button",
            "class":        "btn-primary",
            "property":     "background-color",
            "value":        "#0C2A3A"
        },
        {
            "name":         "Default button",
            "class":        "btn-default",
            "property":     "background-color",
            "value":        "#FFFFFF"
        },
        {
            "name":         "Info button",
            "class":        "btn-info",
            "property":     "background-color",
            "value":        "#5BC0DE"
        },
        {
            "name":         "Success button",
            "class":        "btn-success",
            "property":     "background-color",
            "value":        "#5CB85C"
        },
        {
            "name":         "Warning button",
            "class":        "btn-warning",
            "property":     "background-color",
            "value":        "#f0ad4e"
        },
        {
            "name":         "Danger button",
            "class":        "btn-danger",
            "property":     "background-color",
            "value":        "#D9534F"
        }
    ];


    $scope.save = function() {
        $scope.msg = 'CSS to save: '+ JSON.stringify($scope.panels)+ JSON.stringify($scope.buttons)+ JSON.stringify($scope.scaffolding);

    };

    $scope.colors = angular.copy($scope.buttons);

    $scope.resetColor = function() {
        $scope.buttons = angular.copy($scope.colors);
        $scope.msg = ""

    };

});

