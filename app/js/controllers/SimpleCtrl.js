Simple.app.controller("SimpleCtrl", function($scope){
// default css
    $scope.navbar = [
        {
            "name":             "Default background",
            "class":            "navbar-default",
            "property":         "background-color",
            "value":            "#50ACDB"
        },
        {
            "name":             "Default text",
            "parentclass":      "navbar-nav",
            "element":          "a",
            "property":         "color",
            "value":            "#FFFFFF"
        },
        {
            "name":             "Active background",
            "parentclass":      "navbar-nav",
            "class":            "active",
            "property":         "background-color",
            "value":            "#359FD5"
        },
        {
            "name":             "Active text",
            "parentclass":      "navbar-nav",
            "class":            "active",
            "property":         "color",
            "value":            "#FFFFFF"
        },
        {
            "name":             "Border",
            "parentclass":      "navbar-default",
            "property":         "border-color",
            "value":            "#359FD5"
        }
    ];
    $scope.scaffolding = [
        {
            "name":             "Body background",
            "parentclass":      "",
            "childclass":       "",
            "parentelement":    "",
            "element":          "body",
            "property":         "background-color",
            "value":            "#F0F0F0"
        },
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
            "parentclass":      "",
            "childclass":       "",
            "parentelement":    "body",
            "element":          "a",
            "property":         "color",
            "value":            "#0C2A3A"
        }
    ];
    $scope.buttons = [
        {
            "name":         "Primary background",
            "class":        "btn-primary",
            "property":     "background-color",
            "value":        "#0C2A3A"
        },
        {
            "name":         "Primary text",
            "class":        "btn-primary",
            "property":     "color",
            "value":        "#FFFFF"
        },
        {
            "name":         "Primary border",
            "class":        "btn-primary",
            "property":     "border-color",
            "value":        "#0C2A3A"
        },
        {
            "name":         "Primary hover",
            "class":        "btn-primary:hover",
            "property":     "background-color",
            "value":        "#051118"
        },
        {
            "name":         "Default background",
            "class":        "btn-default",
            "property":     "background-color",
            "value":        "#FFFFFF"
        },
        {
            "name":         "Default text",
            "class":        "btn-default",
            "property":     "background-color",
            "value":        "#333333"
        },
        {
            "name":         "Default border",
            "class":        "btn-default",
            "property":     "border-color",
            "value":        "#CCCCCC"
        },
        {
            "name":         "Default hover",
            "class":        "btn-default",
            "property":     "background-color",
            "value":        "#EBEBEB"
        },
        {
            "name":         "Info background",
            "class":        "btn-info",
            "property":     "background-color",
            "value":        "#5BC0DE"
        },
        {
            "name":         "Info text",
            "class":        "btn-info",
            "property":     "color",
            "value":        "#FFFFFF"
        },
        {
            "name":         "Info border",
            "class":        "btn-info",
            "property":     "border-color",
            "value":        "#46B8DA"
        },
        {
            "name":         "Info hover",
            "class":        "btn-info",
            "property":     "background-color",
            "value":        "#39B3D7"
        },
        {
            "name":         "Success background",
            "class":        "btn-success",
            "property":     "background-color",
            "value":        "#5CB85C"
        },
        {
            "name":         "Success text",
            "class":        "btn-success",
            "property":     "background-color",
            "value":        "#FFFFFF"
        },
        {
            "name":         "Success border",
            "class":        "btn-success",
            "property":     "border-color",
            "value":        "#4CAE4C"
        },
        {
            "name":         "Success hover",
            "class":        "btn-success",
            "property":     "background-color",
            "value":        "#47A447"
        },
        {
            "name":         "Warning background",
            "class":        "btn-warning",
            "property":     "background-color",
            "value":        "#f0ad4e"
        },
        {
            "name":         "Warning text",
            "class":        "btn-warning",
            "property":     "color",
            "value":        "#FFFFFF"
        },
        {
            "name":         "Warning border",
            "class":        "btn-warning",
            "property":     "border-color",
            "value":        "#EEA236"
        },
        {
            "name":         "Warning hover",
            "class":        "btn-warning",
            "property":     "background-color",
            "value":        "#ED9C28"
        },
        {
            "name":         "Danger background",
            "class":        "btn-danger",
            "property":     "background-color",
            "value":        "#D9534F"
        },
        {
            "name":         "Danger text",
            "class":        "btn-danger",
            "property":     "color",
            "value":        "#FFFFFF"
        },
        {
            "name":         "Danger border",
            "class":        "btn-danger",
            "property":     "border-color",
            "value":        "#D43F3A"
        },
        {
            "name":         "Danger hover",
            "class":        "btn-danger",
            "property":     "background-color",
            "value":        "#D2322D"
        }
    ];
    $scope.jumbotron = [
        {
            "name":             "Brand background",
            "class":            "jumbotron",
            "property":         "background-color",
            "value":            "#FFFFFF"
        },
        {
            "name":             "Brand Text",
            "parentclass":      "jumbotron",
            "element":          "h2",
            "property":         "color",
            "value":            "#333333"
        }
    ];
    $scope.panels = [
        {
            "name":             "Primary background",
            "parentclass":      "panel-primary",
            "childclass":       "panel-heading",
            "class":            "panel-title",
            "property":         "background-color",
            "value":            "#0C2A3A"
        },
        {
            "name":             "Primary panel text",
            "parentclass":      "panel-primary",
            "childclass":       "panel-heading",
            "class":            "panel-title",
            "property":         "color",
            "value":            "#FFFFFF"
        },
        {
            "name":             "Default background",
            "parentclass":      "panel-default",
            "childclass":       "panel-heading",
            "class":            "panel-title",
            "property":         "background-color",
            "value":            "#F5F5F5"
        },
        {
            "name":             "Default panel text",
            "parentclass":      "panel-default",
            "childclass":       "panel-heading",
            "class":            "panel-title",
            "property":         "color",
            "value":            "#333333"
        },
    ];
	function format(d){

        angular.forEach(d, function(i){
            var dot = ".";
            var pc = i.parentclass ? dot + i.parentclass + ' ' : '';
            var cc = i.childclass ? dot + i.childclass + ' ' : '';
            var pe = i.parentelement ? i.parentelement + ' ' : '';
            var el = i.element ? i.element + ' ' : '';
            var cl = i.class ? dot + i.class + ' ' : '';
			$scope.file += pc + cc + pe + el + cl + ' {' + i.property + ': ' + i.value + ';}\r';
		});
	}
	$scope.save = function() {
		$scope.file = "";
		format($scope.navbar);
		format($scope.scaffolding);
		format($scope.buttons);
		format($scope.jumbotron);
		format($scope.panels);
		console.log($scope.file);
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
        $scope.jumbotron = angular.copy($scope.resetjumbotron);
    };
});

