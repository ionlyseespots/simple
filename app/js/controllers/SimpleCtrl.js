Simple.app.controller("SimpleCtrl", function($scope, Fullscreen){
    $scope.goFullscreen = function () {

        if (Fullscreen.isEnabled())
            Fullscreen.cancel();
        else
            Fullscreen.all();

        // Set Fullscreen to a specific element (bad practice)
        // Fullscreen.enable( document.getElementById('img') )

    }
});