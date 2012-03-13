var roads = require('./roads');

exports = {}

exports.loader = {
    load: roads.load
};

exports.Road = roads.Road;

module.exports = exports;
