var app = {
    onDeviceReady : function () {
        //console.log('deviceready');
        app.showIt('info', 'deviceready');
        if (device.platform === "iOS") {
            alert("got iOS.");
            // hide Exit button. They don't have one on iOS devices.
            // http://www.mzcart.com/javascript-how-to-addremove-css-class-from-a-dom-element/
            document.getElementById('exitApp').classList.add("hidden");
            // deals with post-iOS-7 change that covers the status bar
            // http://coenraets.org/blog/2013/09/phonegap-and-cordova-with-ios-7/
            document.body.style.marginTop = "20px";
        } else if (device.platform == 'Android') {
            // Get rid of 300ms delay 
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body); },
                false);
            //
            document.getElementById('exitApp').addEventListener('click', function() {
                navigator.app.exitApp();
            });
        }
        if (device.platform == 'browser') {
            // hide Exit button. Browser does not exit.
            document.getElementById('exitApp').classList.add("hidden");
        } else {
            //app.pluginTest();
        }
        //console.log('deviceready done.');
        app.showIt('info', 'deviceready done.');
    },
    showIt : function (id, msg) {
        document.getElementById(id).innerHTML = msg;
    }
};

alert('app.js loaded');
document.addEventListener("deviceready", app.onDeviceReady, false);
