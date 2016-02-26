var app = {
    onDeviceReady : function () {
        console.log('deviceready');
        document.getElementById('info').innerHTML = 'deviceready';
        app.showIt('content', 'deviceready');
    },
    showIt : function (id, msg) {
        document.getElementById(id).innerHTML = msg;
    }
};

alert('app.js loaded');
document.addEventListener("deviceready", app.onDeviceReady, false);
