/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const componentGenerator = require('./component/index.js');
const pageGenerator = require('./page/index.js');
const dialogGenerator = require('./dialog/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.setGenerator('dialog', dialogGenerator);
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(`src/containers/${comp}`, fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.addHelper('upperCase', (txt) => txt.toUpperCase());
  plop.addHelper('lowerCase', (txt) => txt.toLowerCase());
  plop.addHelper('splitUpperByUnderscore', (txt) => {
    let newTxt = '';
    for (let i = 0; i < txt.length; i++) {
      if (txt[i] === txt[i].toUpperCase() && (i !== 0)) {
        newTxt += '_';
      }

      newTxt += txt[i].toUpperCase();
    }
    return newTxt;
  });
  plop.addHelper('splitUpperByHyphen', (txt) => {
    let newTxt = '';
    for (let i = 0; i < txt.length; i++) {
      if (txt[i] === txt[i].toUpperCase() && (i !== 0)) {
        newTxt += '-';
      }

      newTxt += txt[i].toUpperCase();
    }
    return newTxt;
  });
  plop.addHelper('removePage', (txt) => txt.replace('Page', ''));
};
