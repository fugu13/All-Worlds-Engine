var JSONStream = require('JSONStream');
var events = require('event-stream');

var exports = {};

var Road = function(json) {
    
};

Road.prototype = {
    
};

exports.Road = Road;

exports.load = function(readStream, loaded) {
    var parser = JSONStream.parse([]);
    var handler = events.map(function(json, passthrough) {
        loaded(null, new Road(json));
        passthrough(null, json);
    });
    readStream.pipe(parser).pipe(handler);
    readStream.on('error', function(err) {
        loaded(err);
    });
    parser.on('error', function(err) {
        loaded(err);
    });
};

module.exports = exports;
