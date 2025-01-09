(function (window) {
    var goodbye = {};

    var speakingWord = "Goodbye";

    goodbye.speak = function (name) {
        console.log(speakingWord + " " + name);
    };

    window.goodbye = goodbye; 
})(window);
