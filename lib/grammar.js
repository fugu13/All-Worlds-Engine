
var _ = require('underscore');


var Matcher = function() {
    //if the last argument is a function, don't consider it part of the matchers
    //pass all remaining arguments to an init method, which must return
    //a list where all values are matchers or strings that name matchers
};

//TODO: key

Matcher.prototype = {
    
};


var matchers = {
    
};


var m = matchers;
var grammar = {
    "start": m.mapping('tableau', 'states', 'startPlace'),
    "tableau": m.keyvalue('tableau', m.mapping('location', 'characters?')),
    "states": m.keyvalue('states', m.mapping('state+')),
    "startPlace": m.keyvalue('start', m.regex('.*'), function(key, value) {
        this.start = value;
    }), //TODO: check on regular expressions
    "location": m.keyvalue("location", m.or(
        '~',
        m.list('locationName+')
    )),
    "characters": m.keyvalue("characters", m.list('characterName+')),
    "state": m.keyvalue(m.any(), m.mapping(), function(key, value) {
        this.stateNames.push(key);
    }), //TODO: fill out states
    "locationName": m.any(),
    "characterName": m.any(),
    
    "setup": function() {
        this.stateNames = [];
    },
    "validator": function(callback) {
        if(~this.stateNames.indexOf(this.start)) {
            callback("Start is " + this.start + ", but that is not a state");
        } else {
            callback(null, this);
        }
    }
};
