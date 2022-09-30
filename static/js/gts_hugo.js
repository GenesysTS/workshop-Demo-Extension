function myTestFunction() {
  alert("Current datetime: " + new Date());
}

// addEventListener support for IE8
function bindEvent(element, eventName, eventHandler) {
  if (element.addEventListener) {
    element.addEventListener(eventName, eventHandler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + eventName, eventHandler);
  }
}

// Send a message to the parent
var sendMessage = function (msg) {
  // Make sure you are sending a string, and to stringify JSON
  window.parent.postMessage(msg, "*");
};

bindEvent(window, "load", function (e) {
  console.log("iframe sending path: " + window.location.pathname);
  sendMessage(window.location.pathname);
});
