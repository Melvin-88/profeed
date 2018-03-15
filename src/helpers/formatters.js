/**
 * Created by Tanya on 19.03.2017.
 */

export function elsSplittedByComa(items, fieldName) {
  return items.map((item, index) => {
    const workItem = fieldName ? item[fieldName] : item;

    return workItem + (index !== (items.length - 1) ?  ', ' : '');
  });
}

export function showNumbers(value, numsAfterComma = 2) {
  return +Number(value.toFixed(numsAfterComma));
}
