/**
 * Created by Tanya on 29.03.2017.
 */
export function splitUpperByUnderscoreAndUpper(txt) {
  let newTxt = '';

  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === txt[i].toUpperCase() && (i !== 0)) {
      newTxt += '_';
    }

    newTxt += txt[i].toUpperCase();
  }
  return newTxt;
}
// TODO : to optimize
export function replaceUnderscoreByUpper(txt) {
  let newTxt = '';

  for (let i = 0; i < txt.length - 1; i++) {
    if (txt[i] === '_') {
      ++i;
      newTxt += txt[i].toUpperCase();
    } else {
      newTxt += txt[i];
    }
  }
  return newTxt.replace('_', '');
}

export function splitUpperByUnderscore(txt) {
  let newTxt = '';

  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === txt[i].toUpperCase() && (i !== 0)) {
      newTxt += `_${txt[i].toLowerCase()}`;
    } else {
      newTxt += txt[i];
    }
  }
  return newTxt;
}
