(function (window) {
    var hello = {};
    var speakingword = "Hello";

    hello.speak = function (name) {
        console.log(speakingword + " " + name);
    };

    window.hello = hello; 
})(window);
