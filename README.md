# generate-json-webpack-plugin
Webpack plugin to generate a JSON file

[![Webpack Build Test][github-action-badge]][github-action-url] [![NPM][npm-badge]][npm-url]

## Getting Started
To begin, you'll need to install `generate-json-webpack-plugin`:

```sh
$ npm install @pp-spaces/generate-json-webpack-plugin --save-dev
```

Then add the plugin to your webpack config. For example:

`webpack.config.js`

```js
const GenerateJsonPlugin = require('@pp-spaces/generate-json-webpack-plugin');

module.exports = {
  plugins: [new GenerateJsonPlugin({
      filename: 'manifest.json',
      value: {
        short_name: 'Weather',
        name: 'Weather: Do I need an umbrella?',
        description: 'Weather forecast information',
        icons: [
            {
                src: "/images/icons-192.png",
                type: "image/png",
                sizes: "192x192"
            },
            {
                src: "/images/icons-512.png",
                type: "image/png",
                sizes: "512x512"
            }
        ],
        start_url: "/?source=pwa",
        background_color: "#3367D6",
        display: "standalone",
        scope: "/",
        theme_color: "#3367D6"
      }
  })],
};
```

That will generate a file that looks like this:

`manifest.json`

```json
{
  "short_name": "Weather",
  "name": "Weather: Do I need an umbrella?",
  "description": "Weather forecast information",
  "icons": [
    {
      "src": "/images/icons-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/images/icons-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": "/?source=pwa",
  "background_color": "#3367D6",
  "display": "standalone",
  "scope": "/",
  "theme_color": "#3367D6"
}
```

### Options

| Name     | Type   | Default       | Description                                                             |
| -------- | ------ | ------------- | ----------------                                                        |
| filename | string | manifest.json | Output file name                                                        |
| source   | string | \[Optional\]  | Path to an existing JS/JSON file to extend                              |
| value    | object | {}            | Object to output or the properties you wish to modify                   |
| space    | number | \[Optional\]  | Insert white space into the output JSON string for readability purposes |

See [`tests/webpack.config.js`](tests/webpack.config.js) for more.

## License
[MIT](LICENSE)

<!-- Variables -->
[github-action-badge]: https://github.com/socheatsok78/generate-json-webpack-plugin/workflows/Webpack%20Build%20Test/badge.svg
[github-action-url]: https://github.com/socheatsok78/generate-json-webpack-plugin/actions?query=workflow%3A%22Webpack+Build+Test%22

[npm-url]: https://www.npmjs.com/package/@pp-spaces/generate-json-webpack-plugin
[npm-badge]: https://badgen.net/npm/v/@pp-spaces/generate-json-webpack-plugin
