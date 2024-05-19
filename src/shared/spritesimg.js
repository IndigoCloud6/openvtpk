'use strict'

const fs = require('fs')
const path = require('path')
/**
 * 
 * @param {String} sourceFolder 
 * @returns {JSON} the content of the root.json file
 */
const spritesimg = (sourceFolder) => {
    const rootFileName = path.join(sourceFolder, 'p12/resources/sprites', 'sprite@2x.png')
    const rootFile = fs.readFileSync(rootFileName)
    const base64Image = rootFile.toString('base64');
    return base64Image
}
module.exports = spritesimg