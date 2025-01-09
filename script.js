(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var startingfirstletter = names[i].charAt(0).toLowerCase();

        if (startingfirstletter === 'j') {
            goodbye.speak(names[i]); 
        } else {
            hello.speak(names[i]); 
        }
    }
})();
