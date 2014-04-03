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
            "name":             "Active background",
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

    $scope.jumbotron = [
        {
            "name":             "Default background",
            "class":            "jumbotron",
            "property":         "background-color",
            "value":            "#FFFFFF"
        },
        {
            "name":             "Company Name",
            "class":            "jumbotron",
            "element":          "h2",
            "property":         "color",
            "value":            "#333333"
        }

    ];

    $scope.panels = [
        {
            "name":             "Primary panel",
            "parentclass":      "panel-primary",
            "childclass":       "panel-heading",
            "class":            "panel-title",
            "property":         "background-color",
            "value":            "#0C2A3A"
        },
        {
            "name":             "Default panel",
            "parentclass":      "panel-default",
            "childclass":       "panel-heading",
            "class":            "panel-title",
            "property":         "background-color",
            "value":            "#F5F5F5"
        }
    ];

    $scope.wells = [
        {
            "name":             "Category list",
            "parentclass":      "panel-category-list",
            "element":          "li",
            "class":            "well",
            "property":         "background-color",
            "value":            "#FFFFFF"
        },
        {
            "name":             "Product list",
            "parentclass":      "panel-product-list",
            "element":          "li",
            "class":            "well",
            "property":         "background-color",
            "value":            "#FFFFFF"
        }
    ];

    $scope.save = function() {
        $scope.msg = 'Theme = '
            + JSON.stringify($scope.navbar)
            + JSON.stringify($scope.scaffolding)
            + JSON.stringify($scope.buttons)
            + JSON.stringify($scope.jumbotron)
            + JSON.stringify($scope.panels)
            + JSON.stringify($scope.wells);
    };

    $scope.resetnavbar = angular.copy($scope.navbar);
    $scope.resetscaffolding = angular.copy($scope.scaffolding);
    $scope.resetbuttons = angular.copy($scope.buttons);
    $scope.resetpanels = angular.copy($scope.panels);
    $scope.resetjumbotron = angular.copy($scope.jumbotron);
    $scope.resetwells = angular.copy($scope.wells);
    $scope.resetColor = function() {
        $scope.navbar = angular.copy($scope.resetnavbar);
        $scope.scaffolding = angular.copy($scope.resetscaffolding);
        $scope.buttons = angular.copy($scope.resetbuttons);
        $scope.panels = angular.copy($scope.resetpanels);
        $scope.wells = angular.copy($scope.resetwells);
        $scope.jumbotron = angular.copy($scope.resetjumbotron);
        $scope.msg = ""
    };

});

