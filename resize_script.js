const sharp = require('sharp');
const fs = require('fs');
const directory = 'images/1-2020March';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize({width: 5000}) // width, height
    .toFile(`${file}`);
  });