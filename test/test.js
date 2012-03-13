var vows = require('vows');
var assert = require('assert');
var fs = require('fs');

var allworlds = require('..');

vows.describe('All Worlds Engine').addBatch({
    'The loader': {
        topic: allworlds.loader,
        'when loading a simple road': {
            topic: function(loader) {
                loader.load(
                    fs.createReadStream('roads/simple.json'),
                    this.callback
                );
            },
            'returns a road object': function(road) {
                assert.instanceOf(road, allworlds.Road);
            }
        },
        /* 'when loading a road with malformed JSON': {
            topic: function(loader) {
                loader.load(
                    fs.createReadStream('roads/malformed.json'),
                    this.callback
                );
            },
            'returns an error': function(error) {
                assert.isNotNull(error);
                //console.log(error);
            }
        }, */
        'when loading a road lacking some specification': {
            topic: function(loader) {
                loader.load(
                    fs.createReadStream('roads/lacking.json'),
                    this.callback
                );
            },
            'returns an error': function(error) {
                assert.isNotNull(error);
                //console.log(error);
            }
        }
    }
}).export(module);
