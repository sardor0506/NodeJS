const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'src');

const nestedPath = path.join(__dirname, 'src', 'components', 'nav', 'NavBar');
fs.writeFileSync(nestedPath, 'index.js')
fs.mkdir(nestedPath, { recursive: true }, (err) => {
  if (err) {
    return console.error('Xatolik:', err.message);
  }
});

