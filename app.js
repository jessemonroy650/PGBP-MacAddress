var app = {
    onDeviceReady : function () {
        console.log('deviceready');
        document.getElementById('info').innerHTML = 'deviceready';
    }
};

alert('app.js loaded');
document.addEventListener("deviceready", app.onDeviceReady, false);
