Simple.app.controller("colorThemeCtrl", function($scope, Less){


$scope.navbarCrunch = function(newColor){
    $scope.navbar[0].value = newColor;
    var color = new Less.RGBColor(newColor);
    if (color.ok){
        var brightness = Less.calcBrightness(color);
        var newTextColor = (brightness < 130) ? "#FFFFFF" : "#000000";
        var newBadgeTextColor = (brightness < 130) ? "#000000" : "#FFFFFF";
    }
    $scope.hiddennavbar[9].value = newTextColor;
    $scope.hiddennavbar[10].value = newTextColor;
    $scope.hiddennavbar[12].value = newBadgeTextColor;
    $scope.navbar[1].value = newTextColor;
    var activeColor = Less.LightDark(newColor, -20);
    $scope.hiddennavbar[0].value = activeColor;
    $scope.hiddennavbar[1].value = activeColor;
    $scope.hiddennavbar[2].value = activeColor;
    $scope.hiddennavbar[3].value = activeColor;
    $scope.hiddennavbar[4].value = activeColor;
    $scope.hiddennavbar[5].value = activeColor;
    $scope.hiddennavbar[6].value = activeColor;
    $scope.hiddennavbar[7].value = activeColor;

    $scope.navbar[2].value = activeColor;

    var activeBg = new Less.RGBColor(activeColor);
    if (activeBg.ok){
        var abrightness = Less.calcBrightness(activeBg);
        var activeTextColor = (abrightness < 130) ? "#FFFFFF" : "#000000";
    }
    $scope.hiddennavbar[11].value = activeTextColor;
    $scope.navbar[3].value = activeTextColor;

};

$scope.buttonCrunch = function(newColor, index){
    $scope.buttons[index + 2].value = Less.LightDark(newColor, -15);
    $scope.buttons[index + 3].value = Less.LightDark(newColor, -20);
    var color = new Less.RGBColor(newColor);
    if (color.ok){
        var brightness = Less.calcBrightness(color);
        var newTextColor = (brightness < 130) ? "#FFFFFF" : "#000000";
    }
    $scope.buttons[index + 1].value = newTextColor;
};

$scope.wellCrunch = function(newColor, index, type){
    if (type == 'category'){
        $scope.categorywells[index].value = newColor;
        $scope.categorywells[index + 2].value = Less.LightDark(newColor, -15);
        var color = new Less.RGBColor(newColor);
        if (color.ok){
            var brightness = Less.calcBrightness(color);
            var newTextColor = (brightness < 130) ? "#FFFFFF" : "#000000";
        }
        $scope.categorywells[index + 1].value = newTextColor;
    }
    else {
        $scope.productwells[index].value = newColor;
        $scope.productwells[index + 2].value = Less.LightDark(newColor, -15);
        var color = new Less.RGBColor(newColor);
        if (color.ok){
            var brightness = Less.calcBrightness(color);
            var newTextColor = (brightness < 130) ? "#FFFFFF" : "#000000";
        }
        $scope.productwells[index + 1].value = newTextColor;
    }
};

$scope.panelCrunch = function(newColor, index){
    $scope.panels[index].value = newColor;
    var color = new Less.RGBColor(newColor);
    if (color.ok){
        var brightness = Less.calcBrightness(color);
        var newTextColor = (brightness < 130) ? "#FFFFFF" : "#000000";
    }
    $scope.panels[index + 1].value = newTextColor;
};

$scope.jumboCrunch = function(value){
    if (value == 'block'){
        $scope.jumbotron[2].value = '-45px 5px 45px';
    } else {
        $scope.jumbotron[2].value = '0 0 45px';
    }
};


// bootstrap
$scope.hiddennavbar = [
    {
        "name":             "Navbar Hover",
        "parentclass":      "container .navbar-nav",
        "parentelement":    "li.active",
        "element":          "a:hover",
        "property":         "background-color",
        "value":            "#359FD5",
        "important":        ""
    },
    {
        "name":             "Navbar Focus",
        "parentclass":      "container .navbar-nav",
        "parentelement":    "li.active",
        "element":          "a:focus",
        "property":         "background-color",
        "value":            "#359FD5",
        "important":        ""
    },
    {
        "name":             "Navbar Open",
        "parentclass":      "navbar-default .navbar-nav .open",
        "element":          "> a",
        "property":         "background-color",
        "value":            "#359FD5",
        "important":        ""
    },
    {
        "name":             "Navbar Open Hover",
        "parentclass":      "navbar-default .navbar-nav .open",
        "element":          "> a:hover",
        "property":         "background-color",
        "value":            "#359FD5",
        "important":        ""
    },
    {
        "name":             "Navbar Open Focus",
        "parentclass":      "navbar-default .navbar-nav .open",
        "element":          "> a:focus",
        "property":         "background-color",
        "value":            "#359FD5",
        "important":        ""
    },
    {
        "name":             "Navbar Dropdown Hover",
        "parentclass":      "navbar-nav li.dropdown li",
        "element":          "> a:hover",
        "property":         "background-color",
        "value":            "#359FD5",
        "important":        ""
    },
    {
        "name":             "Navbar Dropdown Focus",
        "parentclass":      "navbar-nav li.dropdown li",
        "element":          "> a:focus",
        "property":         "background-color",
        "value":            "#359FD5",
        "important":        ""
    },
    {
        "name":             "Navbar Arrow",
        "parentclass":      "navbar .container .navbar-nav",
        "parentelement":    "li.active",
        "class":            "fa-caret-down",
        "property":         "color",
        "value":            "#359FD5",
        "important":        ""
    },
    {
        "name":             "Navbar Dropdown Text",
        "parentclass":      "navbar-nav li.dropdown li",
        "element":          "> a",
        "property":         "color",
        "value":            "#333333",
        "important":        ""
    },
    {
        "name":             "Navbar Dropdown Hover Text",
        "parentclass":      "navbar-nav li.dropdown li",
        "element":          "> a:hover",
        "property":         "color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "Navbar Checkout Circle",
        "parentclass":      "navbar .container .navbar-nav.pull-right li",
        "element":          "a i:first-of-type",
        "property":         "border-color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "Badge Background",
        "class":            "badge",
        "property":         "background-color",
        "value":            "#0C2A3A",
        "important":        ""
    },
    {
        "name":             "Badge Text",
        "class":            "badge",
        "property":         "color",
        "value":            "#FFFFFF",
        "important":        ""
    }
];
$scope.navbar = [
    {
        "name":             "Default background",
        "class":            "navbar-default",
        "property":         "background-color",
        "value":            "#50ACDB",
        "important":        ""
    },
    {
        "name":             "Default text",
        "parentclass":      "container .navbar-nav",
        "parentelement":    "li",
        "element":          "a",
        "property":         "color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "Active background",
        "parentclass":      "container .navbar-nav",
        "parentelement":    "li.active",
        "element":          "> a",
        "property":         "background-color",
        "value":            "#359FD5",
        "important":        ""
    },
    {
        "name":             "Active text",
        "parentclass":      "container .navbar-nav",
        "parentelement":    "li.active",
        "element":          "> a",
        "property":         "color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "Border",
        "class":            "navbar-default, .dropdown-mega",
        "property":         "border-color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "Mega Nav",
        "class":            "navbar .dropdown-mega",
        "property":         "display",
        "value":            "block",
        "important":        ""
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
        "value":            "#F0F0F0",
        "important":        ""
    },
    {
        "name":             "Body Text",
        "parentclass":      "",
        "childclass":       "",
        "parentelement":    "",
        "element":          "body",
        "property":         "color",
        "value":            "#333333",
        "important":        ""
    },
    {
        "name":             "Primary text & Primary icons",
        "class":            "text-primary",
        "property":         "color",
        "value":            "#0C2A3A",
        "important":        ""
    },
    {
        "name":             "Info text",
        "class":            "text-info",
        "property":         "color",
        "value":            "#31708F",
        "important":        ""
    },
    {
        "name":             "Link text",
        "parentclass":      "",
        "childclass":       "",
        "parentelement":    "body",
        "element":          "a",
        "property":         "color",
        "value":            "#0C2A3A",
        "important":        ""
    }
];
$scope.buttons = [
    {
        "name":         "Primary background",
        "class":        "btn-primary",
        "property":     "background-color",
        "value":        "#0C2A3A",
        "important":    ""
    },
    {
        "name":         "Primary Button",
        "class":        "btn-primary, .btn-primary:hover",
        "property":     "color",
        "value":        "#FFFFFF",
        "important":    ""
    },
    {
        "name":         "Primary border",
        "class":        "btn-primary",
        "property":     "border-color",
        "value":        "#081B24",
        "important":    ""
    },
    {
        "name":         "Primary hover",
        "class":        "btn-primary:hover",
        "property":     "background-color",
        "value":        "#051118",
        "important":    ""
    },
    {
        "name":         "Default background",
        "class":        "btn-default",
        "property":     "background-color",
        "value":        "#FFFFFF",
        "important":    ""
    },
    {
        "name":         "Default Button",
        "class":        "btn-default, .btn-default:hover",
        "property":     "color",
        "value":        "#333333",
        "important":    ""
    },
    {
        "name":         "Default border",
        "class":        "btn-default",
        "property":     "border-color",
        "value":        "#CCCCCC",
        "important":    ""
    },
    {
        "name":         "Default hover",
        "class":        "btn-default:hover",
        "property":     "background-color",
        "value":        "#EBEBEB",
        "important":    ""
    },
    {
        "name":         "Info background",
        "class":        "btn-info",
        "property":     "background-color",
        "value":        "#5BC0DE",
        "important":    ""
    },
    {
        "name":         "Info Button",
        "class":        "btn-info, .btn-info:hover",
        "property":     "color",
        "value":        "#FFFFFF",
        "important":    ""
    },
    {
        "name":         "Info border",
        "class":        "btn-info",
        "property":     "border-color",
        "value":        "#46B8DA",
        "important":    ""
    },
    {
        "name":         "Info hover",
        "class":        "btn-info:hover",
        "property":     "background-color",
        "value":        "#39B3D7",
        "important":    ""
    },
    {
        "name":         "Success background",
        "class":        "btn-success",
        "property":     "background-color",
        "value":        "#5CB85C",
        "important":    ""
    },
    {
        "name":         "Success Button",
        "class":        "btn-success, .btn-success:hover",
        "property":     "color",
        "value":        "#FFFFFF",
        "important":    ""
    },
    {
        "name":         "Success border",
        "class":        "btn-success",
        "property":     "border-color",
        "value":        "#4CAE4C",
        "important":    ""
    },
    {
        "name":         "Success hover",
        "class":        "btn-success:hover",
        "property":     "background-color",
        "value":        "#47A447",
        "important":    ""
    },
    {
        "name":         "Warning background",
        "class":        "btn-warning",
        "property":     "background-color",
        "value":        "#f0ad4e",
        "important":    ""
    },
    {
        "name":         "Warning Button",
        "class":        "btn-warning, .btn-warning:hover",
        "property":     "color",
        "value":        "#FFFFFF",
        "important":    ""
    },
    {
        "name":         "Warning border",
        "class":        "btn-warning",
        "property":     "border-color",
        "value":        "#EEA236",
        "important":    ""
    },
    {
        "name":         "Warning hover",
        "class":        "btn-warning:hover",
        "property":     "background-color",
        "value":        "#ED9C28",
        "important":    ""
    },
    {
        "name":         "Danger background",
        "class":        "btn-danger",
        "property":     "background-color",
        "value":        "#D9534F",
        "important":    ""
    },
    {
        "name":         "Danger Button",
        "class":        "btn-danger, .btn-danger:hover",
        "property":     "color",
        "value":        "#FFFFFF",
        "important":    ""
    },
    {
        "name":         "Danger border",
        "class":        "btn-danger",
        "property":     "border-color",
        "value":        "#D43F3A",
        "important":    ""
    },
    {
        "name":         "Danger hover",
        "class":        "btn-danger:hover",
        "property":     "background-color",
        "value":        "#D2322D",
        "important":    ""
    }
];
$scope.jumbotron = [
    {
        "name":             "Brand background",
        "class":            "jumbotron",
        "property":         "background-color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "Brand Text",
        "class":            "jumbotron",
        "element":          "h2",
        "property":         "color",
        "value":            "#333333",
        "important":        ""
    },
    {
        "name":             "Brand margins",
        "class":            "jumbotron",
        "property":         "margin",
        "value":            "-45px 5px 45px",
        "important":        ""
    }
];
$scope.panels = [
    {
        "name":             "Primary panel header background",
        "parentclass":      "panel-primary",
        "childclass":       "panel-heading",
        "class":            "panel-title",
        "property":         "background-color",
        "value":            "#0C2A3A",
        "important":        ""
    },
    {
        "name":             "Primary panel header text",
        "parentclass":      "panel-primary",
        "childclass":       "panel-heading",
        "class":            "panel-title",
        "property":         "color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "Default panel header background",
        "parentclass":      "panel-default",
        "childclass":       "panel-heading",
        "class":            "panel-title",
        "property":         "background-color",
        "value":            "#F5F5F5",
        "important":        ""
    },
    {
        "name":             "Default panel header text",
        "parentclass":      "panel-default",
        "childclass":       "panel-heading",
        "class":            "panel-title",
        "property":         "color",
        "value":            "#333333",
        "important":        ""
    },
    {
        "name":             "panel body background",
        "class":            "panel",
        "property":         "background-color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "panel footer background",
        "class":            "panel-footer",
        "property":         "background-color",
        "value":            "#F5F5F5",
        "important":        ""
    }
];
$scope.wells = [
    {
        "name":             "Default background",
        "class":            "well",
        "property":         "background-color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "Well Text",
        "class":            "well",
        "property":         "color",
        "value":            "#333333",
        "important":        ""
    },
    {
        "name":             "Border",
        "class":            "well",
        "property":         "border-color",
        "value":            "#F0F0F0",
        "important":        ""
    }
];

// custom
$scope.categorywells = [
    {
        "name":             "Default background",
        "parentclass":      "panel-category-list",
        "class":            "well",
        "property":         "background-color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "Category Well Text",
        "parentclass":      "panel-category-list",
        "class":            "well h5",
        "property":         "color",
        "value":            "#333333",
        "important":        ""
    },
    {
        "name":             "Border",
        "parentclass":      "panel-category-list",
        "class":            "well",
        "property":         "border-color",
        "value":            "#F0F0F0",
        "important":        ""
    }
];
$scope.productwells = [
    {
        "name":             "Default background",
        "parentclass":      "panel-product-list",
        "class":            "well",
        "property":         "background-color",
        "value":            "#FFFFFF",
        "important":        ""
    },
    {
        "name":             "Product Well Text",
        "parentclass":      "panel-product-list",
        "class":            "well",
        "property":         "color",
        "value":            "#333333",
        "important":        ""
    },
    {
        "name":             "Border",
        "parentclass":      "panel-product-list",
        "class":            "well",
        "property":         "border-color",
        "value":            "#F0F0F0",
        "important":        ""
    }
];




// color palette lib
$scope.themeNames = [{
    theme: "Theme 1"
}, {
    theme: "Theme 2"
}];


// add new color palette to lib
$scope.newFruit = '';
$scope.add = function (){
    $scope.themeNames.push({theme: $scope.newFruit});
    $scope.newFruit = null;
};

// format json to css
function format(d){
    angular.forEach(d, function(i){
        var dot = ".";
        var pc = i.parentclass ? dot + i.parentclass + ' ' : '';
        var cc = i.childclass ? dot + i.childclass + ' ' : '';
        var pe = i.parentelement ? i.parentelement + ' ' : '';
        var el = i.element ? i.element + ' ' : '';
        var cl = i.class ? dot + i.class + ' ' : '';
        $scope.file += pc + cc + pe + el + cl + ' {' + i.property + ': ' + i.value + i.important + ';}\r';
    });
}

// save json to css
    $scope.save = function() {
    $scope.file = "";
    format($scope.hiddennavbar);
    format($scope.navbar);
    format($scope.scaffolding);
    format($scope.buttons);
    format($scope.jumbotron);
    format($scope.panels);
    // format($scope.wells);
    format($scope.categorywells);
    format($scope.productwells);
    console.log($scope.file);
};

// reset json to original values
$scope.resethiddennavbar = angular.copy($scope.hiddennavbar);
$scope.resetnavbar = angular.copy($scope.navbar);
$scope.resetscaffolding = angular.copy($scope.scaffolding);
$scope.resetbuttons = angular.copy($scope.buttons);
$scope.resetpanels = angular.copy($scope.panels);
$scope.resetjumbotron = angular.copy($scope.jumbotron);
// $scope.resetwells = angular.copy($scope.wells);
$scope.resetcategorywells = angular.copy($scope.categorywells);
$scope.resetproductwells = angular.copy($scope.productwells);

$scope.resetColor = function() {
    $scope.hiddennavbar = angular.copy($scope.resethiddennavbar);
    $scope.navbar = angular.copy($scope.resetnavbar);
    $scope.scaffolding = angular.copy($scope.resetscaffolding);
    $scope.buttons = angular.copy($scope.resetbuttons);
    $scope.panels = angular.copy($scope.resetpanels);
    $scope.jumbotron = angular.copy($scope.resetjumbotron);
    // $scope.wells = angular.copy($scope.resetwells);
    $scope.categorywells = angular.copy($scope.resetcategorywells);
    $scope.productwells = angular.copy($scope.resetproductwells);
};

});

