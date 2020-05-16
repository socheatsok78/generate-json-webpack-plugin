/// <reference types="jest" />

const config = require('./dist/config.json')

describe('Webpack -> GenerateJsonPlugin -> config.json', () => {
    it('should generated the correct output', () => {
        expect(config).toEqual({
            "config": {
                "key": "value",
                "production": false
            }
        })
    })
})
