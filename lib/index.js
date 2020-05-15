var fs = require('fs');
var path = require('path');

class GenerateJsonPlugin {
    /**
     * Create new instance of GenerateJsonPlugin
     * @param {object} options
     * @param {object} options.value Object to output or the properties you wish to modify
     * @param {string} options.source Path to an existing JSON file to extend (optional)
     * @param {string} options.filename Output file name
     * @param {number} options.space Insert white space into the output JSON string for readability purposes
     */
    constructor(options = {}) {
        this.pluginName = 'GenerateJsonPlugin';

        this.options = options;
        this.options.value = options.value || {};
        this.options.source = options.source || '';
        this.options.filename = options.filename || 'manifest.json';
        this.options.space = options.space

        this._source = {};
        if (this.options.source) {
            if (/\.js$/.test(this.options.source)) {
                var data = require(this.options.source)
                this._source = data;
            } else if (/\.json$/.test(this.options.source)) {
                var data = fs.readFileSync(this.options.source).toString();
                this._source = JSON.parse(data);
            }
        }
    }

    apply(compiler) {
        const emit = (compilation, callback) => {
            var merged = Object.assign({}, this._source, this.options.value);
            var json = JSON.stringify(merged, null, this.options.space);

            compilation.assets[this.options.filename] = {
                source: function () { return json; },
                size: function () { return json.length; }
            }

            callback();
        };

        if (compiler.hooks) {
            compiler.hooks.emit.tapAsync(this.pluginName, emit);
        }
        else {
            compiler.plugin('emit', emit);
        }
    }
}

module.exports = GenerateJsonPlugin;
