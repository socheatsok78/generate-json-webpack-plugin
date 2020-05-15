'use strict';

const GenerateJsonPlugin = require('../lib/index');

module.exports = {
    plugins: [
        new GenerateJsonPlugin({
            filename: 'manifest.json',
            space: 4,
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
        }),
        new GenerateJsonPlugin({
            filename: 'config.json',
            space: 4,
            source: __dirname + '/src/config.js'
        })
    ],
};
