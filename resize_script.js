const sharp = require('sharp');
const fs = require('fs');
const directory = 'images/5-2020Winter';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize({width: 3000}) // width, height
    .toFile(`${file}`);
  });