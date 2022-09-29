function myFunction(x) {
    let d = new Date();
    alert("Current datetime: " + d + "\nYou passed in: " + x);
}

// addEventListener support for IE8
function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}

// Send a message to the parent
var sendMessage = function (msg) {
    // Make sure you are sending a string, and to stringify JSON
    window.parent.postMessage(msg, '*');
};

// var results = document.getElementById('results'),
//     messageButton = document.getElementById('message_button');

// Listen to messages from parent window
// bindEvent(window, 'message', function (e) {
//     results.innerHTML = e.data;
// });

// Send random message data on every button click
// bindEvent(messageButton, 'click', function (e) {
//     var random = Math.random();
//     sendMessage('' + random);
// });

bindEvent(window, 'load', function (e) {
    console.log('iframe path: ' + window.location.pathname);
    sendMessage(window.location.pathname);
});